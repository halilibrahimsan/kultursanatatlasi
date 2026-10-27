-- Linqi profiles: link-in-bio pages for social media.
-- Run once in the Supabase SQL Editor (or with `supabase db push`).

-- ---------------------------------------------------------------------------
-- Profiles
-- ---------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text not null unique
    check (username ~ '^[a-z0-9_.]{3,30}$' and username !~ '^\.|\.$|\.\.')
    check (username not in ('admin', 'api', 'app', 'auth', 'login', 'signup', 'register', 'dashboard', 'settings', 'account', 'linqi', 'support', 'help', 'about', 'www')),
  display_name text check (char_length(display_name) <= 60),
  bio text check (char_length(bio) <= 160),
  avatar_url text check (avatar_url is null or avatar_url ~* '^https://'),
  theme text not null default 'midnight',
  button_style text not null default 'rounded' check (button_style in ('rounded', 'pill', 'square')),
  socials jsonb not null default '{}'::jsonb check (jsonb_typeof(socials) = 'object'),
  views integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Links
-- ---------------------------------------------------------------------------
create table if not exists public.links (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles (id) on delete cascade,
  title text not null check (char_length(title) between 1 and 80),
  url text not null check (char_length(url) <= 2048 and url ~* '^(https?://|mailto:|tel:)'),
  position integer not null default 0,
  is_active boolean not null default true,
  clicks integer not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists links_profile_position_idx on public.links (profile_id, position);

create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
  before update on public.profiles
  for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------------
-- Row level security
-- ---------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.links enable row level security;

drop policy if exists "Profiles are public" on public.profiles;
create policy "Profiles are public" on public.profiles
  for select using (true);

drop policy if exists "Users create their own profile" on public.profiles;
create policy "Users create their own profile" on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists "Users update their own profile" on public.profiles;
create policy "Users update their own profile" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "Users delete their own profile" on public.profiles;
create policy "Users delete their own profile" on public.profiles
  for delete using (auth.uid() = id);

drop policy if exists "Active links are public" on public.links;
create policy "Active links are public" on public.links
  for select using (is_active or profile_id = auth.uid());

drop policy if exists "Users add their own links" on public.links;
create policy "Users add their own links" on public.links
  for insert with check (profile_id = auth.uid());

drop policy if exists "Users update their own links" on public.links;
create policy "Users update their own links" on public.links
  for update using (profile_id = auth.uid()) with check (profile_id = auth.uid());

drop policy if exists "Users delete their own links" on public.links;
create policy "Users delete their own links" on public.links
  for delete using (profile_id = auth.uid());

-- ---------------------------------------------------------------------------
-- Counters. Visitors can't update rows; they bump counters only through these.
-- ---------------------------------------------------------------------------
create or replace function public.record_view(p_username text)
returns void language sql security definer set search_path = public as $$
  update public.profiles set views = views + 1 where username = lower(p_username);
$$;

create or replace function public.record_click(p_link_id uuid)
returns void language sql security definer set search_path = public as $$
  update public.links set clicks = clicks + 1 where id = p_link_id and is_active;
$$;

revoke all on function public.record_view(text) from public;
revoke all on function public.record_click(uuid) from public;
grant execute on function public.record_view(text) to anon, authenticated;
grant execute on function public.record_click(uuid) to anon, authenticated;

-- ---------------------------------------------------------------------------
-- Avatars (Storage). Each user may only write inside avatars/<user id>/.
-- ---------------------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('avatars', 'avatars', true, 2097152, array['image/png', 'image/jpeg', 'image/webp', 'image/gif'])
on conflict (id) do nothing;

drop policy if exists "Users upload their own avatar" on storage.objects;
create policy "Users upload their own avatar" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "Users replace their own avatar" on storage.objects;
create policy "Users replace their own avatar" on storage.objects
  for update to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "Users delete their own avatar" on storage.objects;
create policy "Users delete their own avatar" on storage.objects
  for delete to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
