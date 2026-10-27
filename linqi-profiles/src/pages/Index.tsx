import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ProfileView } from "@/components/ProfileView";
import { Button } from "@/components/ui";
import { useAuth } from "@/hooks/useAuth";
import { DEMO_LINKS, DEMO_PROFILE } from "@/lib/demo";
import { SITE_HOST } from "@/lib/site";
import { usernameError } from "@/lib/validation";

export default function Index() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);

  function claim(e: FormEvent) {
    e.preventDefault();
    const name = username.trim().toLowerCase();
    const problem = usernameError(name);
    if (problem) return setError(problem);
    navigate(user ? `/dashboard?username=${encodeURIComponent(name)}` : `/signup?username=${encodeURIComponent(name)}`);
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <Logo />
        <nav className="flex items-center gap-2">
          {user ? (
            <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
          ) : (
            <>
              <Button variant="ghost" onClick={() => navigate("/login")}>
                Log in
              </Button>
              <Button onClick={() => navigate("/signup")}>Sign up free</Button>
            </>
          )}
        </nav>
      </header>

      <main className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-6 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-12">
        <section className="rounded-card bg-navy px-6 py-12 text-white shadow-[0_20px_50px_-20px_rgba(17,24,39,0.45)] sm:px-10 sm:py-14">
          <h1 className="text-5xl font-bold leading-none tracking-wide sm:text-6xl">LINQI</h1>
          <p className="mt-4 text-2xl font-medium text-brand-light sm:text-[28px]">LINKS, SIMPLIFIED.</p>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-300">
            One page for everything you share. Your Instagram, TikTok, tickets, playlists and shop, at one short address.
          </p>

          <hr className="my-8 border-navy-line" />

          <form onSubmit={claim} noValidate className="flex flex-col gap-3">
            <label htmlFor="claim" className="text-sm text-gray-400">
              Claim your page
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex min-w-0 flex-1 items-stretch overflow-hidden rounded-xl border border-navy-line bg-navy-2 focus-within:border-brand-light focus-within:ring-4 focus-within:ring-brand-light/25">
                <span className="flex items-center whitespace-nowrap bg-navy-3 px-3 text-sm text-gray-400">{SITE_HOST}/@</span>
                <input
                  id="claim"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value.toLowerCase());
                    setError(null);
                  }}
                  placeholder="yourname"
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-base text-white placeholder:text-gray-500 outline-none"
                />
              </div>
              <Button type="submit" className="py-3.5">
                Get started <ArrowRight size={18} />
              </Button>
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
          </form>
        </section>

        <section aria-label="Example profile" className="flex justify-center">
          <PhoneFrame>
            <ProfileView profile={DEMO_PROFILE} links={DEMO_LINKS} preview />
          </PhoneFrame>
        </section>
      </main>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-24 sm:grid-cols-3 sm:px-6">
        {[
          ["Every platform", "Instagram, TikTok, YouTube, Spotify, WhatsApp and more, as icons at the top of your page."],
          ["Six themes", "Pick a look and a button shape. The preview updates as you edit."],
          ["Know what works", "See how many people visited your page and which links they tapped."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="font-semibold text-navy">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[300px] max-w-full rounded-[44px] border-[10px] border-navy bg-navy shadow-2xl">
      <div className="h-[600px] overflow-y-auto rounded-[34px] bg-white">{children}</div>
    </div>
  );
}
