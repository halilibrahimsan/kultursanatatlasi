import { useRef, useState, type FormEvent } from "react";
import { Upload, X } from "lucide-react";
import { updateProfile, uploadAvatar } from "@/lib/api";
import type { Profile } from "@/lib/types";
import { SOCIALS, type SocialKey } from "@/lib/socials";
import { usernameError } from "@/lib/validation";
import { SITE_HOST } from "@/lib/site";
import { Avatar } from "@/components/Avatar";
import { Button, Card, Field, Input, Textarea } from "@/components/ui";

interface Props {
  saved: Profile;
  draft: Profile;
  onDraft: (draft: Profile) => void;
  onSaved: (profile: Profile) => void;
}

export function ProfileEditor({ saved, draft, onDraft, onSaved }: Props) {
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof Profile>(key: K, value: Profile[K]) => {
    setNotice(null);
    onDraft({ ...draft, [key]: value });
  };
  const setSocial = (key: SocialKey, value: string) => set("socials", { ...draft.socials, [key]: value });

  const usernameProblem = draft.username !== saved.username ? usernameError(draft.username) : null;
  const dirty = JSON.stringify({ ...draft, avatar_url: null }) !== JSON.stringify({ ...saved, avatar_url: null });

  async function onFile(file: File | undefined) {
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const url = await uploadAvatar(saved.id, file);
      const next = await updateProfile(saved.id, { avatar_url: url });
      onSaved(next);
      onDraft({ ...draft, avatar_url: next.avatar_url });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  async function removeAvatar() {
    try {
      const next = await updateProfile(saved.id, { avatar_url: null });
      onSaved(next);
      onDraft({ ...draft, avatar_url: null });
    } catch (err) {
      setError((err as Error).message);
    }
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (usernameProblem) return;
    setError(null);
    setBusy(true);
    try {
      const socials = Object.fromEntries(Object.entries(draft.socials).filter(([, v]) => v?.trim()).map(([k, v]) => [k, v!.trim()]));
      const next = await updateProfile(saved.id, {
        username: draft.username.trim().toLowerCase(),
        display_name: draft.display_name?.trim() || null,
        bio: draft.bio?.trim() || null,
        socials,
      });
      onSaved(next);
      onDraft(next);
      setNotice("Saved.");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <Card>
        <h2 className="text-lg font-semibold text-navy">Profile</h2>
        <div className="mt-5 flex items-center gap-4">
          <Avatar src={draft.avatar_url} name={draft.display_name || draft.username} size={72} />
          <div className="flex flex-wrap gap-2">
            <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp,image/gif" className="hidden" onChange={(e) => onFile(e.target.files?.[0])} />
            <Button variant="secondary" size="sm" disabled={uploading} onClick={() => fileRef.current?.click()}>
              <Upload size={16} /> {uploading ? "Uploading…" : "Upload photo"}
            </Button>
            {draft.avatar_url && (
              <Button variant="ghost" size="sm" onClick={removeAvatar}>
                <X size={16} /> Remove
              </Button>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <Field label="Username" htmlFor="username" error={usernameProblem} hint={`Your page: ${SITE_HOST}/@${draft.username || "…"}`}>
            <Input id="username" value={draft.username} autoCapitalize="none" spellCheck={false} maxLength={30} onChange={(e) => set("username", e.target.value.toLowerCase())} />
          </Field>
          <Field label="Display name" htmlFor="display-name">
            <Input id="display-name" maxLength={60} placeholder="Istanbul Jazz Nights" value={draft.display_name ?? ""} onChange={(e) => set("display_name", e.target.value)} />
          </Field>
          <Field label="Bio" htmlFor="bio" hint={`${(draft.bio ?? "").length}/160`}>
            <Textarea id="bio" rows={3} maxLength={160} placeholder="What you do, in a sentence or two." value={draft.bio ?? ""} onChange={(e) => set("bio", e.target.value)} />
          </Field>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-navy">Social icons</h2>
        <p className="mt-1 text-sm text-gray-500">Shown as icons under your bio. Enter a username or a full link.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {SOCIALS.map(({ key, label, icon: Icon, placeholder }) => (
            <label key={key} htmlFor={`social-${key}`} className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 focus-within:border-brand focus-within:ring-4 focus-within:ring-brand/15">
              <Icon size={18} className="shrink-0 text-gray-600" aria-hidden />
              <span className="sr-only">{label}</span>
              <input
                id={`social-${key}`}
                value={draft.socials[key] ?? ""}
                placeholder={`${label}: ${placeholder}`}
                onChange={(e) => setSocial(key, e.target.value)}
                className="min-w-0 flex-1 bg-transparent py-2.5 text-[15px] text-navy outline-none placeholder:text-gray-400"
              />
            </label>
          ))}
        </div>
      </Card>

      <div className="sticky bottom-4 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-lg backdrop-blur">
        <Button type="submit" disabled={busy || !dirty || Boolean(usernameProblem)}>
          {busy ? "Saving…" : "Save changes"}
        </Button>
        {dirty && !busy && (
          <Button variant="ghost" onClick={() => onDraft(saved)}>
            Discard
          </Button>
        )}
        {error && <p className="text-sm text-red-600">{error}</p>}
        {notice && !dirty && <p className="text-sm text-green-700">{notice}</p>}
      </div>
    </form>
  );
}
