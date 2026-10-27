export const USERNAME_PATTERN = /^[a-z0-9_.]{3,30}$/;

// Keep in sync with the check constraint in supabase/migrations.
export const RESERVED_USERNAMES = new Set([
  "admin", "api", "app", "auth", "login", "signup", "register", "dashboard",
  "settings", "account", "linqi", "support", "help", "about", "www",
]);

/** Returns an error message, or null when the username is valid. */
export function usernameError(input: string): string | null {
  const name = input.trim().toLowerCase();
  if (name.length < 3) return "Usernames need at least 3 characters.";
  if (name.length > 30) return "Usernames can be at most 30 characters.";
  if (!USERNAME_PATTERN.test(name)) return "Use only lowercase letters, numbers, dots and underscores.";
  if (name.startsWith(".") || name.endsWith(".") || name.includes("..")) return "Dots can't be at the start, the end, or next to each other.";
  if (RESERVED_USERNAMES.has(name)) return "That username is reserved.";
  return null;
}

/**
 * Normalizes a link the user typed. Adds https:// when the scheme is missing.
 * Throws with a readable message for anything that isn't http(s), mailto or tel.
 */
export function normalizeUrl(input: string): string {
  let raw = input.trim();
  if (!raw) throw new Error("Enter a link.");
  if (raw.length > 2048) throw new Error("That link is too long.");
  if (/^[^\s@/]+@[^\s@/]+\.[^\s@/]+$/.test(raw)) raw = `mailto:${raw}`;
  else if (!/^[a-z][a-z0-9+.-]*:/i.test(raw)) raw = `https://${raw}`;

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error("That doesn't look like a valid link.");
  }
  if (url.protocol === "mailto:" || url.protocol === "tel:") return url.toString();
  if (url.protocol !== "http:" && url.protocol !== "https:") throw new Error("Links must start with http://, https://, mailto: or tel:.");
  if (!url.hostname.includes(".")) throw new Error("Enter a full web address, like example.com.");
  return url.toString();
}

/** True for links that are safe to render as an href. */
export function isSafeHref(href: string | null | undefined): href is string {
  return typeof href === "string" && /^(https?:\/\/|mailto:|tel:)/i.test(href);
}
