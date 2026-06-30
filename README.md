# Denkore Group

Marketing site for Denkore Group LLC — built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.local.example`. The contact form (`app/api/contact/route.ts`) needs `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_TO_EMAIL` to send mail via [Resend](https://resend.com). Until the `denkoregroup.com` domain is verified in Resend and Zoho email is set up, these are left blank and the API route responds with a 503 instead of crashing.

## Structure

- `app/page.tsx` — single-page site, sections assembled in order
- `components/sections/` — page sections (Hero, Services, Work, Contact, etc.)
- `components/canvas/` — `ParticleField` and `NebulaBlobs`, the fixed Deep Space background layer
- `components/ui/` — base primitives (button, input, select, tilt-card, etc.)
- `components/layout/` — `Header` and `Footer`
- `components/emails/` — React Email templates sent via Resend
- `lib/types.ts` — shared types and the contact form's zod schema

## Stack notes

- No Tailark — marketing sections are custom components in `components/sections/`; shadcn/ui-style primitives are hand-rolled in `components/ui/` (network access to the shadcn registry isn't available in this environment, so primitives were written by hand following shadcn conventions rather than pulled via the CLI).
- Fonts: Space Grotesk (display/headings) + Inter (body), loaded via `next/font/google`.
