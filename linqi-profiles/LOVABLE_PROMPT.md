# Lovable prompt

Paste the text below into a new Lovable project if you'd rather have Lovable build the app itself.
Connect Supabase when Lovable asks.

---

Build **Linqi**, a link-in-bio app (like Linktree) for the domain linqi.link. All UI text is in English.

**Brand.** Wordmark "LINQI" in bold white on a dark navy card (#111827, 28px corner radius), tagline
"LINKS, SIMPLIFIED." in blue (#60a5fa), subtitle "Your links. Shorter. Smarter." in grey (#9ca3af),
page background #fafafa, primary button blue (#3b82f6). Use the system font stack.

**Pages**
1. `/` Landing: the navy brand card with a "Claim your page" input prefixed `linqi.link/@` and a
   "Get started" button that goes to sign up with the username prefilled. Beside it, a phone mockup
   showing an example profile. Three short feature cards below.
2. `/login` and `/signup`: email + password with Supabase Auth. After sign up, show "Check your inbox".
3. `/dashboard` (logged in only): if the user has no profile yet, ask for a username and display name
   first. Otherwise show tabs **Links**, **Profile**, **Appearance**, **Stats**, with a live phone
   preview of the page on the right on desktop. The header shows `linqi.link/@username` with Copy and
   Open buttons, and Log out.
   - Links: add a link (URL + optional button text), edit title and URL in place, move up/down,
     show/hide toggle, delete with an inline "Delete this link?" confirmation, click count per link.
   - Profile: avatar upload to a public Supabase Storage bucket `avatars` (max 2 MB), username,
     display name, bio (160 chars), and inputs for Instagram, TikTok, X, YouTube, Spotify, SoundCloud,
     LinkedIn, Facebook, Pinterest, Behance, GitHub, Twitch, WhatsApp, email and website. Accept a
     handle or a full URL. Save / Discard bar.
   - Appearance: 6 themes (Midnight, Daylight, Ocean, Stage, Spring, Rose) and button shapes
     (rounded, pill, square). Saves on click.
   - Stats: page views, total link clicks, click rate, and a bar per link.
4. `/@username` Public profile: avatar, name, @username, bio, row of social icons, full-width link
   buttons in the chosen theme, small "LINQI" link at the bottom. Count a view on load and a click on
   each link tap. Show a friendly not-found page for unknown usernames.

**Database (Supabase)**
- `profiles`: id (uuid, = auth user id), username (unique, lowercase `[a-z0-9_.]{3,30}`, reserved
  words blocked), display_name, bio, avatar_url, theme, button_style, socials (jsonb), views,
  timestamps.
- `links`: id, profile_id, title (1–80), url (must start with http://, https://, mailto: or tel:),
  position, is_active, clicks, created_at.
- RLS: anyone can read profiles and active links; users can insert/update/delete only their own rows.
- `record_view(username)` and `record_click(link_id)` as SECURITY DEFINER functions callable by anon,
  so visitors can bump counters without write access.
- Storage policies so users can only write to `avatars/<their user id>/`.

**Safety.** Only render links whose URL starts with http://, https://, mailto: or tel:. Open
external links in a new tab with `rel="noopener noreferrer"`.
