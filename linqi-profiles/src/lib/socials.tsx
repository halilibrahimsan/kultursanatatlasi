import type { IconType } from "react-icons";
import {
  FaBehance, FaEnvelope, FaFacebook, FaGithub, FaGlobe, FaInstagram, FaLinkedin,
  FaPinterest, FaSoundcloud, FaSpotify, FaTiktok, FaTwitch, FaWhatsapp, FaXTwitter, FaYoutube,
} from "react-icons/fa6";

export type SocialKey =
  | "instagram" | "tiktok" | "x" | "youtube" | "spotify" | "soundcloud" | "linkedin" | "facebook"
  | "pinterest" | "behance" | "github" | "twitch" | "whatsapp" | "email" | "website";

interface SocialDef {
  key: SocialKey;
  label: string;
  icon: IconType;
  placeholder: string;
  /** Turns a handle into a full URL; full URLs pass through unchanged. */
  toUrl: (value: string) => string;
}

const handle = (base: string) => (value: string) => {
  const v = value.trim();
  if (/^https?:\/\//i.test(v)) return v;
  return `${base}${v.replace(/^@/, "")}`;
};

export const SOCIALS: SocialDef[] = [
  { key: "instagram", label: "Instagram", icon: FaInstagram, placeholder: "@username", toUrl: handle("https://instagram.com/") },
  { key: "tiktok", label: "TikTok", icon: FaTiktok, placeholder: "@username", toUrl: (v) => (/^https?:\/\//i.test(v.trim()) ? v.trim() : `https://www.tiktok.com/@${v.trim().replace(/^@/, "")}`) },
  { key: "x", label: "X", icon: FaXTwitter, placeholder: "@username", toUrl: handle("https://x.com/") },
  { key: "youtube", label: "YouTube", icon: FaYoutube, placeholder: "@channel", toUrl: (v) => (/^https?:\/\//i.test(v.trim()) ? v.trim() : `https://www.youtube.com/@${v.trim().replace(/^@/, "")}`) },
  { key: "spotify", label: "Spotify", icon: FaSpotify, placeholder: "https://open.spotify.com/…", toUrl: handle("https://open.spotify.com/user/") },
  { key: "soundcloud", label: "SoundCloud", icon: FaSoundcloud, placeholder: "username", toUrl: handle("https://soundcloud.com/") },
  { key: "linkedin", label: "LinkedIn", icon: FaLinkedin, placeholder: "https://linkedin.com/in/…", toUrl: handle("https://www.linkedin.com/in/") },
  { key: "facebook", label: "Facebook", icon: FaFacebook, placeholder: "username", toUrl: handle("https://facebook.com/") },
  { key: "pinterest", label: "Pinterest", icon: FaPinterest, placeholder: "username", toUrl: handle("https://pinterest.com/") },
  { key: "behance", label: "Behance", icon: FaBehance, placeholder: "username", toUrl: handle("https://www.behance.net/") },
  { key: "github", label: "GitHub", icon: FaGithub, placeholder: "username", toUrl: handle("https://github.com/") },
  { key: "twitch", label: "Twitch", icon: FaTwitch, placeholder: "username", toUrl: handle("https://twitch.tv/") },
  { key: "whatsapp", label: "WhatsApp", icon: FaWhatsapp, placeholder: "+90 5xx xxx xx xx", toUrl: (v) => (/^https?:\/\//i.test(v.trim()) ? v.trim() : `https://wa.me/${v.replace(/\D/g, "")}`) },
  { key: "email", label: "Email", icon: FaEnvelope, placeholder: "you@example.com", toUrl: (v) => (v.trim().startsWith("mailto:") ? v.trim() : `mailto:${v.trim()}`) },
  { key: "website", label: "Website", icon: FaGlobe, placeholder: "example.com", toUrl: (v) => (/^https?:\/\//i.test(v.trim()) ? v.trim() : `https://${v.trim()}`) },
];

export const SOCIAL_BY_KEY = Object.fromEntries(SOCIALS.map((s) => [s.key, s])) as Record<SocialKey, SocialDef>;
