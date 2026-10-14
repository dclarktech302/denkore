# Denkore Group

Marketing site for Denkore Group LLC — built with Next.js (App Router), TypeScript, and Tailwind CSS v4. Live at [denkore.com](https://denkore.com).

## Getting started

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.local.example`. The contact form (`app/api/contact/route.ts`) needs `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_TO_EMAIL` to send mail via [Resend](https://resend.com). If any of these three are unset, the route returns a 503 (`"Contact form is not available right now. Please try again later."`) instead of attempting to send or crashing.

When all three are set, the route renders `components/emails/ContactEmail.tsx` to HTML with `@react-email/render` and sends it via Resend's `html` field (not the `react:` shorthand — that option resolves its renderer with a runtime dynamic import that doesn't survive Next's serverless bundling unless something in first-party code imports `@react-email/render` directly).

## Structure

- `app/page.tsx` — single-page site, sections assembled in order
- `app/api/contact/route.ts` — contact form submission handler (Resend)
- `components/sections/` — page sections (Hero, Services, Work, Contact, etc.)
- `components/canvas/` — `ParticleField` and `NebulaBlobs`, the fixed Deep Space background layer
- `components/ui/` — base primitives (button, input, select, tilt-card, etc.)
- `components/layout/` — `Header` and `Footer`
- `components/features/` — `ContactForm`, the client-side form behind the Contact section
- `components/emails/` — React Email templates sent via Resend
- `lib/types.ts` — shared types and the contact form's zod schema
- `lib/utils.ts` — `cn()` class-merging helper

## Stack notes

- No Tailark — marketing sections are custom components in `components/sections/`; shadcn/ui-style primitives are hand-rolled in `components/ui/` (network access to the shadcn registry isn't available in this environment, so primitives were written by hand following shadcn conventions rather than pulled via the CLI).
- Fonts: Space Grotesk (display/headings) + Inter (body), loaded via `next/font/google`.
- Email components import from the `react-email` package (not the deprecated `@react-email/components`), with `@react-email/render` as an explicit dependency for the contact route's render step.
