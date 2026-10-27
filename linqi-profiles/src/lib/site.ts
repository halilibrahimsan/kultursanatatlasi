export const SITE_URL = (import.meta.env.VITE_SITE_URL || (typeof window !== "undefined" ? window.location.origin : "https://linqi.link")).replace(/\/$/, "");

export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, "");

export const profileUrl = (username: string) => `${SITE_URL}/@${username}`;
