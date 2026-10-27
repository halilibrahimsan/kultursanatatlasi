import type { Link, Profile } from "@/lib/types";
import { getTheme } from "@/lib/themes";
import { SOCIALS } from "@/lib/socials";
import { isSafeHref } from "@/lib/validation";
import { Avatar } from "./Avatar";

const RADIUS = { rounded: "14px", pill: "999px", square: "4px" } as const;

interface Props {
  profile: Pick<Profile, "username" | "display_name" | "bio" | "avatar_url" | "theme" | "button_style" | "socials">;
  links: Pick<Link, "id" | "title" | "url">[];
  onLinkClick?: (link: Pick<Link, "id">) => void;
  /** Compact rendering for the dashboard phone preview. */
  preview?: boolean;
}

export function ProfileView({ profile, links, onLinkClick, preview = false }: Props) {
  const theme = getTheme(profile.theme);
  const name = profile.display_name?.trim() || `@${profile.username}`;
  const socials = SOCIALS.filter((s) => profile.socials?.[s.key]?.trim())
    .map((s) => ({ ...s, href: s.toUrl(profile.socials[s.key]!) }))
    .filter((s) => isSafeHref(s.href));
  const safeLinks = links.filter((l) => isSafeHref(l.url));

  return (
    <div
      style={{ background: theme.background, color: theme.text }}
      className={preview ? "min-h-full px-5 py-10" : "min-h-screen px-4 py-14 sm:py-20"}
    >
      <div className="mx-auto flex max-w-[560px] flex-col items-center text-center">
        <Avatar src={profile.avatar_url} name={name} size={preview ? 80 : 104} ring={theme.accent} />
        <h1 className={preview ? "mt-4 text-xl font-bold" : "mt-5 text-2xl font-bold sm:text-3xl"} style={{ textWrap: "balance" }}>
          {name}
        </h1>
        {profile.display_name && (
          <p className="mt-1 text-sm" style={{ color: theme.muted }}>
            @{profile.username}
          </p>
        )}
        {profile.bio && (
          <p className={preview ? "mt-3 text-sm leading-relaxed" : "mt-4 max-w-md leading-relaxed"} style={{ color: theme.muted }}>
            {profile.bio}
          </p>
        )}

        {socials.length > 0 && (
          <ul className="mt-5 flex flex-wrap justify-center gap-4">
            {socials.map(({ key, label, icon: Icon, href }) => (
              <li key={key}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="block transition-opacity hover:opacity-70">
                  <Icon size={preview ? 20 : 24} />
                </a>
              </li>
            ))}
          </ul>
        )}

        <ul className={preview ? "mt-6 flex w-full flex-col gap-3" : "mt-8 flex w-full flex-col gap-4"}>
          {safeLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onLinkClick?.(link)}
                style={{ background: theme.buttonBg, color: theme.buttonText, borderColor: theme.buttonBorder, borderRadius: RADIUS[profile.button_style] ?? RADIUS.rounded }}
                className={`block w-full border px-5 font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0 ${preview ? "py-3 text-sm" : "py-4"}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {safeLinks.length === 0 && socials.length === 0 && (
          <p className="mt-8 text-sm" style={{ color: theme.muted }}>
            No links yet.
          </p>
        )}

        <a href="/" className="mt-12 text-xs font-semibold tracking-[0.2em]" style={{ color: theme.muted }}>
          LINQI
        </a>
      </div>
    </div>
  );
}
