# Linqi Profiles

Link-in-bio pages for **linqi.link**. Each user gets a page at `linqi.link/@username` with their
photo, bio, social icons and a list of link buttons, plus a dashboard to edit it and see clicks.

Built on the same stack Lovable generates: React 18, Vite, TypeScript, Tailwind CSS and Supabase.

## Features

- Email + password sign up, then pick a username (`linqi.link/@yourname`)
- Profile photo upload, display name, 160-character bio
- 15 social icons: Instagram, TikTok, X, YouTube, Spotify, SoundCloud, LinkedIn, Facebook,
  Pinterest, Behance, GitHub, Twitch, WhatsApp, email, website
- Link buttons: add, edit in place, reorder, hide, delete
- 6 themes (Midnight, Daylight, Ocean, Stage, Spring, Rose) and 3 button shapes
- Live phone preview while editing
- Page views and clicks per link
- Row level security: people can only change their own page; visitors can only bump counters

## Put it on Lovable

Lovable keeps a project in sync with a GitHub repository, so the code goes in through GitHub.

1. **Create the Lovable project.** In Lovable, start a new project (any prompt, e.g. "Linqi").
2. **Connect GitHub.** In the project, open **GitHub → Connect to GitHub** and let Lovable create the repository.
3. **Copy this code in.** Clone the new repository, delete everything except `.git`, copy the
   contents of this `linqi-profiles` folder into it, then commit and push to `main`:
   ```bash
   git clone https://github.com/<you>/<lovable-repo>.git && cd <lovable-repo>
   git rm -rq . && cp -r /path/to/linqi-profiles/. .
   git add -A && git commit -m "Linqi profiles" && git push
   ```
   Lovable picks up the push within a few seconds.
4. **Connect Supabase.** In Lovable, click **Supabase → Connect** and create (or pick) a project.
5. **Create the tables.** In Supabase, open **SQL Editor**, paste the contents of
   `supabase/migrations/20261027000000_linqi_profiles.sql` and run it. It is safe to run again.
6. **Point the app at Supabase.** If Lovable rewrote `src/integrations/supabase/client.ts`, you're done.
   Otherwise set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (Supabase → Settings → API).
   The anon key is meant to be public; row level security protects the data.
7. **Set auth URLs.** In Supabase → **Authentication → URL Configuration**, set **Site URL** to
   `https://linqi.link` and add `https://linqi.link/**` (and your Lovable preview URL) to **Redirect URLs**,
   so confirmation emails link back to the app.
8. **Connect the domain.** In Lovable → **Project Settings → Domains**, add `linqi.link`, then set
   `VITE_SITE_URL=https://linqi.link`.

Alternatively, paste [`LOVABLE_PROMPT.md`](./LOVABLE_PROMPT.md) into a new Lovable project to have
Lovable build the same app itself.

## Run locally

```bash
cp .env.example .env   # fill in your Supabase URL and anon key
npm install
npm run dev            # http://localhost:8080
npm test
```

## Project layout

| Path | What it does |
| --- | --- |
| `src/pages/Index.tsx` | Landing page with "claim your username" and an example profile |
| `src/pages/Auth.tsx` | Log in and sign up |
| `src/pages/Dashboard.tsx` | Editor with Links, Profile, Appearance and Stats tabs plus live preview |
| `src/pages/PublicProfile.tsx` | The public page at `/@username`; counts views and clicks |
| `src/components/ProfileView.tsx` | Renders a profile; shared by the public page and the preview |
| `src/lib/themes.ts` | Theme colours. Add a theme here to offer it in the editor |
| `src/lib/socials.tsx` | Supported social networks and how a handle becomes a link |
| `src/lib/api.ts` | Every Supabase query the app makes |
| `supabase/migrations/` | Tables, security policies, counters and the avatar bucket |

## Notes

- Page views and click counts are stored on the public rows, so they can be read through the API.
  They aren't shown to visitors.
- Usernames are lowercase letters, numbers, `.` and `_`, 3–30 characters. The reserved list lives in
  both `src/lib/validation.ts` and the migration; keep them in sync.
