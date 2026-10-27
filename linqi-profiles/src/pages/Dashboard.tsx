import { useEffect, useState, type FormEvent } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { BarChart3, Copy, ExternalLink, Link2, LogOut, Palette, UserRound } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { createProfile, getMyProfile, isUsernameAvailable } from "@/lib/api";
import type { Link, Profile } from "@/lib/types";
import { profileUrl, SITE_HOST } from "@/lib/site";
import { usernameError } from "@/lib/validation";
import { Logo } from "@/components/Logo";
import { ProfileView } from "@/components/ProfileView";
import { Button, Field, Input } from "@/components/ui";
import { LinksEditor } from "@/components/dashboard/LinksEditor";
import { ProfileEditor } from "@/components/dashboard/ProfileEditor";
import { AppearanceEditor } from "@/components/dashboard/AppearanceEditor";
import { StatsPanel } from "@/components/dashboard/StatsPanel";
import { PhoneFrame } from "./Index";
import { cn } from "@/lib/cn";

const TABS = [
  { id: "links", label: "Links", icon: Link2 },
  { id: "profile", label: "Profile", icon: UserRound },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "stats", label: "Stats", icon: BarChart3 },
] as const;
type Tab = (typeof TABS)[number]["id"];

export default function Dashboard() {
  const { user, loading: authLoading, signOut } = useAuth();
  const [state, setState] = useState<"loading" | "onboarding" | "ready" | "error">("loading");
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState<Profile | null>(null);
  const [draft, setDraft] = useState<Profile | null>(null);
  const [links, setLinks] = useState<Link[]>([]);
  const [tab, setTab] = useState<Tab>("links");

  useEffect(() => {
    if (!user) return;
    getMyProfile(user.id)
      .then((result) => {
        if (!result) return setState("onboarding");
        setSaved(result.profile);
        setDraft(result.profile);
        setLinks(result.links);
        setState("ready");
      })
      .catch((err: Error) => {
        setError(err.message);
        setState("error");
      });
  }, [user]);

  if (authLoading) return <FullScreen>Loading…</FullScreen>;
  if (!user) return <Navigate to="/login" replace />;
  if (state === "loading") return <FullScreen>Loading your page…</FullScreen>;
  if (state === "error") return <FullScreen>Couldn't load your page: {error}</FullScreen>;
  if (state === "onboarding" || !saved || !draft) {
    return (
      <Onboarding
        userId={user.id}
        onCreated={(profile) => {
          setSaved(profile);
          setDraft(profile);
          setState("ready");
        }}
      />
    );
  }

  const onSaved = (p: Profile) => {
    setSaved(p);
    // Appearance changes save instantly; keep any unsaved profile edits in the draft.
    setDraft((d) => (d ? { ...d, theme: p.theme, button_style: p.button_style, avatar_url: p.avatar_url } : p));
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Logo />
          <div className="flex min-w-0 items-center gap-2">
            <ShareUrl username={saved.username} />
            <Button variant="ghost" size="sm" onClick={signOut} aria-label="Log out">
              <LogOut size={16} /> <span className="hidden sm:inline">Log out</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <main className="min-w-0">
          <nav className="mb-5 flex gap-1 overflow-x-auto rounded-2xl border border-gray-200 bg-white p-1" aria-label="Sections">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                aria-current={tab === id ? "page" : undefined}
                aria-label={label}
                className={cn(
                  "flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold transition-colors",
                  tab === id ? "bg-navy text-white" : "text-gray-600 hover:bg-gray-100",
                )}
              >
                <Icon size={16} /> <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </nav>

          {tab === "links" && <LinksEditor userId={user.id} links={links} onChange={setLinks} />}
          {tab === "profile" && <ProfileEditor saved={saved} draft={draft} onDraft={setDraft} onSaved={onSaved} />}
          {tab === "appearance" && <AppearanceEditor profile={saved} onSaved={onSaved} />}
          {tab === "stats" && <StatsPanel profile={saved} links={links} />}
        </main>

        <aside className="hidden lg:block">
          <div className="sticky top-24 flex flex-col items-center gap-3">
            <PhoneFrame>
              <ProfileView profile={draft} links={links.filter((l) => l.is_active)} preview />
            </PhoneFrame>
            <p className="text-xs text-gray-500">Live preview</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ShareUrl({ username }: { username: string }) {
  const [copied, setCopied] = useState(false);
  const url = profileUrl(username);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.prompt("Copy your link:", url);
    }
  }

  return (
    <div className="flex min-w-0 items-center gap-1 rounded-xl border border-gray-200 bg-white pl-3">
      <span className="truncate text-sm text-gray-600">
        <span className="hidden sm:inline">{SITE_HOST}/</span>@{username}
      </span>
      <Button variant="ghost" size="sm" onClick={copy} aria-label="Copy link">
        <Copy size={16} /> <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
      </Button>
      <a href={`/@${username}`} target="_blank" rel="noopener noreferrer" aria-label="Open your page" className="rounded-lg p-2 text-gray-600 hover:bg-gray-100">
        <ExternalLink size={16} />
      </a>
    </div>
  );
}

function Onboarding({ userId, onCreated }: { userId: string; onCreated: (p: Profile) => void }) {
  const [params] = useSearchParams();
  const [username, setUsername] = useState(params.get("username") ?? "");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    const name = username.trim().toLowerCase();
    const problem = usernameError(name);
    if (problem) return setError(problem);
    setBusy(true);
    setError(null);
    try {
      if (!(await isUsernameAvailable(name))) throw new Error("That username is already taken.");
      onCreated(await createProfile(userId, name, displayName.trim()));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#fafafa] px-4 py-10">
      <Logo className="mb-8 text-2xl" />
      <form onSubmit={submit} noValidate className="flex w-full max-w-sm flex-col gap-4 rounded-card bg-white p-7 shadow-sm ring-1 ring-gray-200">
        <h1 className="text-2xl font-bold text-navy">Pick your address</h1>
        <p className="text-sm text-gray-600">This is the link you'll put in your bios. You can change it later.</p>
        <Field label="Username" htmlFor="onb-username" error={error} hint={`${SITE_HOST}/@${username || "yourname"}`}>
          <Input id="onb-username" value={username} autoCapitalize="none" spellCheck={false} maxLength={30} onChange={(e) => setUsername(e.target.value.toLowerCase())} />
        </Field>
        <Field label="Display name" htmlFor="onb-name" hint="Optional. Shown at the top of your page.">
          <Input id="onb-name" value={displayName} maxLength={60} onChange={(e) => setDisplayName(e.target.value)} />
        </Field>
        <Button type="submit" disabled={busy} className="mt-2 py-3">
          {busy ? "Creating…" : "Create my page"}
        </Button>
      </form>
    </div>
  );
}

function FullScreen({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4 text-center text-sm text-gray-500">{children}</div>;
}
