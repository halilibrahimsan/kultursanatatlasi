import { supabase } from "@/integrations/supabase/client";
import type { Link, Profile } from "./types";

const PROFILE_COLUMNS = "id, username, display_name, bio, avatar_url, theme, button_style, socials, views";
const LINK_COLUMNS = "id, profile_id, title, url, position, is_active, clicks";

function check<T>({ data, error }: { data: T | null; error: { message: string; code?: string } | null }): T {
  if (error) {
    if (error.code === "23505") throw new Error("That username is already taken.");
    throw new Error(error.message);
  }
  return data as T;
}

export async function getPublicProfile(username: string) {
  const profile = check(
    await supabase.from("profiles").select(PROFILE_COLUMNS).eq("username", username.toLowerCase()).maybeSingle(),
  ) as Profile | null;
  if (!profile) return null;
  const links = check(
    await supabase.from("links").select(LINK_COLUMNS).eq("profile_id", profile.id).eq("is_active", true).order("position"),
  ) as Link[];
  return { profile, links };
}

export async function getMyProfile(userId: string) {
  const profile = check(await supabase.from("profiles").select(PROFILE_COLUMNS).eq("id", userId).maybeSingle()) as Profile | null;
  if (!profile) return null;
  const links = check(await supabase.from("links").select(LINK_COLUMNS).eq("profile_id", userId).order("position")) as Link[];
  return { profile, links };
}

export async function isUsernameAvailable(username: string) {
  const row = check(await supabase.from("profiles").select("id").eq("username", username).maybeSingle());
  return !row;
}

export async function createProfile(userId: string, username: string, displayName: string) {
  return check(
    await supabase.from("profiles").insert({ id: userId, username, display_name: displayName || null }).select(PROFILE_COLUMNS).single(),
  ) as Profile;
}

export async function updateProfile(userId: string, patch: Partial<Omit<Profile, "id" | "views">>) {
  return check(await supabase.from("profiles").update(patch).eq("id", userId).select(PROFILE_COLUMNS).single()) as Profile;
}

export async function uploadAvatar(userId: string, file: File) {
  if (!file.type.startsWith("image/")) throw new Error("Choose an image file (PNG, JPG, WebP or GIF).");
  if (file.size > 2 * 1024 * 1024) throw new Error("Images can be at most 2 MB.");
  const ext = file.name.split(".").pop()?.toLowerCase() || "png";
  const path = `${userId}/avatar-${Date.now()}.${ext}`;
  const { error } = await supabase.storage.from("avatars").upload(path, file, { cacheControl: "3600", upsert: false });
  if (error) throw new Error(error.message);
  return supabase.storage.from("avatars").getPublicUrl(path).data.publicUrl;
}

export async function addLink(userId: string, title: string, url: string, position: number) {
  return check(
    await supabase.from("links").insert({ profile_id: userId, title, url, position }).select(LINK_COLUMNS).single(),
  ) as Link;
}

export async function updateLink(id: string, patch: Partial<Pick<Link, "title" | "url" | "is_active" | "position">>) {
  return check(await supabase.from("links").update(patch).eq("id", id).select(LINK_COLUMNS).single()) as Link;
}

export async function deleteLink(id: string) {
  check(await supabase.from("links").delete().eq("id", id));
}

// Supabase queries are lazy: they only run once awaited or .then() is called.
const ignore = () => undefined;

export function recordView(username: string) {
  supabase.rpc("record_view", { p_username: username }).then(ignore, ignore);
}

export function recordClick(linkId: string) {
  supabase.rpc("record_click", { p_link_id: linkId }).then(ignore, ignore);
}
