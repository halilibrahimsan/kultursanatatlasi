import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowUp, Plus, Trash2 } from "lucide-react";
import { addLink, deleteLink, updateLink } from "@/lib/api";
import type { Link } from "@/lib/types";
import { normalizeUrl } from "@/lib/validation";
import { Button, Card, Field, Input } from "@/components/ui";
import { cn } from "@/lib/cn";

interface Props {
  userId: string;
  links: Link[];
  onChange: (links: Link[]) => void;
}

export function LinksEditor({ userId, links, onChange }: Props) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function add(e: FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      const cleanUrl = normalizeUrl(url);
      const cleanTitle = title.trim() || new URL(cleanUrl).hostname.replace(/^www\./, "") || cleanUrl;
      setBusy(true);
      const position = links.length ? Math.max(...links.map((l) => l.position)) + 1 : 0;
      const link = await addLink(userId, cleanTitle.slice(0, 80), cleanUrl, position);
      onChange([...links, link]);
      setTitle("");
      setUrl("");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  const replace = (next: Link) => onChange(links.map((l) => (l.id === next.id ? next : l)));

  async function move(index: number, dir: -1 | 1) {
    const a = links[index];
    const b = links[index + dir];
    if (!a || !b) return;
    // Swap positions locally first so the list responds immediately.
    const swapped = [...links];
    swapped[index] = { ...b, position: a.position };
    swapped[index + dir] = { ...a, position: b.position };
    onChange(swapped);
    try {
      await Promise.all([updateLink(a.id, { position: b.position }), updateLink(b.id, { position: a.position })]);
    } catch (err) {
      onChange(links);
      setError((err as Error).message);
    }
  }

  async function remove(id: string) {
    const before = links;
    onChange(links.filter((l) => l.id !== id));
    try {
      await deleteLink(id);
    } catch (err) {
      onChange(before);
      setError((err as Error).message);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      <Card>
        <form onSubmit={add} noValidate className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-navy">Add a link</h2>
          <Field label="URL" htmlFor="new-url">
            <Input id="new-url" inputMode="url" placeholder="https://example.com/tickets" value={url} onChange={(e) => setUrl(e.target.value)} />
          </Field>
          <Field label="Button text" htmlFor="new-title" hint="Leave empty to use the website name.">
            <Input id="new-title" placeholder="Get tickets" maxLength={80} value={title} onChange={(e) => setTitle(e.target.value)} />
          </Field>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" disabled={busy || !url.trim()} className="self-start">
            <Plus size={18} /> Add link
          </Button>
        </form>
      </Card>

      {links.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
          Your links will appear here. Add your first one above.
        </p>
      ) : (
        <ol className="flex flex-col gap-3">
          {links.map((link, i) => (
            <LinkRow
              key={link.id}
              link={link}
              first={i === 0}
              last={i === links.length - 1}
              onMoveUp={() => move(i, -1)}
              onMoveDown={() => move(i, 1)}
              onSaved={replace}
              onDelete={() => remove(link.id)}
            />
          ))}
        </ol>
      )}
    </div>
  );
}

function LinkRow({ link, first, last, onMoveUp, onMoveDown, onSaved, onDelete }: {
  link: Link;
  first: boolean;
  last: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onSaved: (link: Link) => void;
  onDelete: () => void;
}) {
  const [title, setTitle] = useState(link.title);
  const [url, setUrl] = useState(link.url);
  const [error, setError] = useState<string | null>(null);
  const [confirming, setConfirming] = useState(false);
  const [saving, setSaving] = useState(false);

  async function save(patch: Partial<Pick<Link, "title" | "url" | "is_active">>) {
    setError(null);
    setSaving(true);
    try {
      onSaved(await updateLink(link.id, patch));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSaving(false);
    }
  }

  function saveTitle() {
    const next = title.trim();
    if (!next) {
      setTitle(link.title);
      return setError("Button text can't be empty.");
    }
    if (next !== link.title) save({ title: next });
  }

  function saveUrl() {
    try {
      const next = normalizeUrl(url);
      setUrl(next);
      if (next !== link.url) save({ url: next });
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <li className={cn("rounded-2xl border bg-white p-4 transition-opacity", link.is_active ? "border-gray-200" : "border-gray-200 opacity-60")}>
      <div className="flex gap-3">
        <div className="flex flex-col gap-1">
          <button type="button" aria-label="Move up" disabled={first} onClick={onMoveUp} className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 disabled:opacity-30">
            <ArrowUp size={16} />
          </button>
          <button type="button" aria-label="Move down" disabled={last} onClick={onMoveDown} className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 disabled:opacity-30">
            <ArrowDown size={16} />
          </button>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <input
            aria-label="Button text"
            value={title}
            maxLength={80}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={saveTitle}
            className="w-full rounded-lg px-2 py-1 font-semibold text-navy outline-none hover:bg-gray-50 focus:bg-gray-50 focus:ring-2 focus:ring-brand/30"
          />
          <input
            aria-label="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onBlur={saveUrl}
            className="w-full truncate rounded-lg px-2 py-1 text-sm text-gray-500 outline-none hover:bg-gray-50 focus:bg-gray-50 focus:ring-2 focus:ring-brand/30"
          />
          {error && <p className="px-2 text-sm text-red-600">{error}</p>}
        </div>

        <label className="flex cursor-pointer items-start gap-2 pt-1 text-xs text-gray-500">
          <span className="sr-only">Show on profile</span>
          <input type="checkbox" className="peer sr-only" checked={link.is_active} disabled={saving} onChange={(e) => save({ is_active: e.target.checked })} />
          <span className="relative h-6 w-10 rounded-full bg-gray-300 transition-colors after:absolute after:left-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-transform peer-checked:bg-brand peer-checked:after:translate-x-4 peer-focus-visible:ring-2 peer-focus-visible:ring-brand/40" />
        </label>
      </div>

      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-sm">
        <span className="tabular-nums text-gray-500">
          {link.clicks} {link.clicks === 1 ? "click" : "clicks"}
          {!link.is_active && " · hidden"}
        </span>
        {confirming ? (
          <span className="flex items-center gap-2">
            <span className="text-gray-600">Delete this link?</span>
            <Button size="sm" variant="danger" onClick={onDelete}>Delete</Button>
            <Button size="sm" variant="ghost" onClick={() => setConfirming(false)}>Cancel</Button>
          </span>
        ) : (
          <Button size="sm" variant="ghost" onClick={() => setConfirming(true)} aria-label={`Delete ${link.title}`}>
            <Trash2 size={16} />
          </Button>
        )}
      </div>
    </li>
  );
}
