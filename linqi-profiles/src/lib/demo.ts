import type { Link, Profile } from "./types";

// Example profile shown on the landing page.
export const DEMO_PROFILE: Profile = {
  id: "demo",
  username: "istanbuljazz",
  display_name: "Istanbul Jazz Nights",
  bio: "Live jazz every Thursday in Kadıköy. Tickets, playlists and the season programme below.",
  avatar_url: null,
  theme: "midnight",
  button_style: "rounded",
  socials: { instagram: "istanbuljazz", spotify: "https://open.spotify.com/", youtube: "istanbuljazz", email: "hello@example.com" },
  views: 0,
};

export const DEMO_LINKS: Link[] = [
  { id: "d1", profile_id: "demo", title: "🎟️ Tickets for this Thursday", url: "https://example.com/tickets", position: 0, is_active: true, clicks: 0 },
  { id: "d2", profile_id: "demo", title: "Autumn 2026 programme", url: "https://example.com/programme", position: 1, is_active: true, clicks: 0 },
  { id: "d3", profile_id: "demo", title: "Our Spotify playlist", url: "https://open.spotify.com/", position: 2, is_active: true, clicks: 0 },
];
