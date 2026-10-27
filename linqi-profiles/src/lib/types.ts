import type { SocialKey } from "./socials";

export type ButtonStyle = "rounded" | "pill" | "square";

export interface Profile {
  id: string;
  username: string;
  display_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  theme: string;
  button_style: ButtonStyle;
  socials: Partial<Record<SocialKey, string>>;
  views: number;
}

export interface Link {
  id: string;
  profile_id: string;
  title: string;
  url: string;
  position: number;
  is_active: boolean;
  clicks: number;
}
