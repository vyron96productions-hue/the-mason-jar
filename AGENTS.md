# The Mason Jar — Agent Context

> Read this entire file before making any changes. These rules override general defaults.

## What This Is

The Mason Jar is a static marketing website for a bar & grill in Greer, SC. No database, no user auth. Pure marketing — menu, events, gallery, contact.

**Physical location**: 202 Trade St, Greer, SC 29651 | (864) 879-4454

## Stack

- **Framework**: Next.js 16 App Router (TypeScript)
- **Styles**: Tailwind CSS v4
- **Deployment**: Vercel (pending — not yet live)
- **GTM**: `GTM-TB3VRXK8` in `lib/gtm.ts`

## Running Locally

```bash
cd /mnt/i/workspace/the-mason-jar
npm run dev   # http://localhost:3000 (or 3001 if 3000 is taken)
```

---

## Key Files

```
lib/
  site-config.ts    — NAP (name/address/phone), hours, social links — edit here first
  menu-data.ts      — all menu items and categories
  events-data.ts    — upcoming and recurring events
  gtm.ts            — GTM container ID
public/
  images/Logo/logo.png   — circular logo, do NOT invert, scale-[1.18]
  images/verdictiq-logo.png — VerdictIQ attribution logo in footer
app/
  page.tsx          — homepage
  menu/             — menu page
  events/           — events page
  about/            — about page
  gallery/          — photo gallery
  contact/          — contact page
```

---

## Design Rules

- **Logo**: `public/images/Logo/logo.png` — circular crop, `scale-[1.18]`, NO `invert` filter
- **Colors**: Match the warm, rustic bar-and-grill brand (earthy tones, wood feel)
- **Mobile-first**: Test at 375px width — majority of bar customers are on mobile
- All images: `next/image` with descriptive `alt` text, WebP format preferred

## Attribution

- **BarGuard badge** appears on menu + contact pages — do not remove
- **VerdictIQ footer**: `public/images/verdictiq-logo.png` — do not remove

## GTM Events (Already Wired)

- `phone_click` — fired via `TrackedLink` when phone number is tapped
- `directions_click` — fired via `TrackedLink` when directions link is tapped
- `social_click` — fired via `TrackedLink` on social media links

All events use the `TrackedLink` component. Do not replace with plain `<a>` tags.

---

## SEO Rules (Always Apply)

- Every page: unique `<title>` (50–60 chars), `metaDescription` (120–155 chars), self-referential canonical URL
- Title format: `Primary Keyword | The Mason Jar`
- OG tags required: `og:title`, `og:description`, `og:image` (1200×630px), `og:url`, `og:type`
- One H1 per page containing primary keyword
- Homepage + contact: `LocalBusiness` JSON-LD schema with address, phone, hours, geo coordinates
- All external links: `rel="noopener noreferrer"`
- Internal links: `next/link`, no `noopener`
- Images: descriptive `alt` text, WebP, descriptive kebab-case filenames

## NAP Consistency (Critical for Local SEO)

Business name, address, and phone must be **exactly identical** everywhere on the site. Always pull from `lib/site-config.ts` — never hardcode the address or phone number directly in components.

---

## What NOT to Do

- **Do NOT hardcode the address or phone number** in components — use `lib/site-config.ts`
- **Do NOT add `www` redirect in `next.config.ts`** — Vercel handles it
- **Do NOT add `noindex`** to any public page
- **Do NOT remove canonical tags**
- **Do NOT invert the logo** with CSS filters
- **Do NOT replace `TrackedLink` with plain `<a>` tags** — GTM events will break
- **Do NOT use `target="_blank"` without `rel="noopener noreferrer"`**
- **Do NOT generate fake schema data** (fake reviews, fake ratings)

---

## Pending (Not Yet Done)

- Vercel deployment + domain connection
- Real drink photos and interior/exterior photos
- Menu photos
