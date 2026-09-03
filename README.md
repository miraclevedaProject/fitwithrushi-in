# fitwithrushi.in — static export

This is a static HTML export of the fitwithrushi.in WordPress site, generated from
the Hostinger backup (Aug 26, 2026). WordPress itself can't run on Vercel (no PHP/MySQL),
so this export was produced by restoring the site locally and crawling every published
page into plain HTML/CSS/images.

## What's included
- 93 published WordPress pages + 1 blog post, each in its own folder (`/slug/index.html`)
- Full media library (`wp-content/uploads`)
- All pages preserve their original design (mostly self-contained inline CSS)

## Known limitations (carried over from the original WordPress site, or introduced by static conversion)
1. **Homepage (`/`) is blank.** The live site never had a real homepage design — WordPress's
   active theme ("Intentionally Blank") + no static front page set meant `fitwithrushi.in/`
   itself showed nothing. Traffic went straight to individual landing pages
   (e.g. `/fatloss/`, `/english/`, `/marathi/`, `/protein-shastra/`) via ads/links.
2. **A handful of pages have broken image/video placeholders that were already broken in
   the original site** — literal unfilled placeholder text like `YOUR_TRANSFORMATION_14.jpg`
   or `YOUR_YOUTUBE_LINK_2` was left in the page HTML instead of a real file/link.
3. **~14 pages have `<form>` elements** (mostly `portfolio-*` pages and a `test-razorpay-api`
   page) that may have relied on custom JS/backend logic — worth a manual check.
4. **WhatsApp CTAs work as-is** — most pages (82 of 93) use `wa.me/...` links for lead capture,
   which need no backend and work identically on static hosting.
5. **Contact/subscribe forms** (WPForms, Hostinger Reach newsletter block) are WordPress-only
   and were not present as actual visible forms on any page — no static replacement was needed.
6. Many pages look like **test/duplicate iterations** (`colour1`–`colour14`, `latest01`–`latest08`,
   `portfolio-1`–`portfolio-5`, etc.) — kept for completeness; safe to delete if unwanted.

## Deploy
This is a zero-config static site — Vercel will serve it as-is with no build step.
