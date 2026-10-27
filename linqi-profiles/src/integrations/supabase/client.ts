import { createClient } from "@supabase/supabase-js";

// Lovable's Supabase integration may replace these with the project's own values.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export const supabase = createClient(SUPABASE_URL || "http://localhost:54321", SUPABASE_ANON_KEY || "public-anon-key", {
  auth: { persistSession: true, autoRefreshToken: true },
});
