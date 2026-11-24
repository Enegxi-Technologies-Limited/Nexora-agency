# Nexora Agency Website — Project Guide

This document explains the structure, main features, and configuration of the Nexora Agency website. The project is a Next.js App Router site built with TypeScript, React, and Tailwind CSS.

## What the site contains

- **Home page (`/`)** — agency hero, statistics, technology banner, services, differentiators, methodology, industries, team, resources, testimonials, and contact form.
- **About page (`/aboutnexora`)** — mission, agency overview, methodology, service tiles, and a contact call to action.
- **Shared layout pieces** — navigation, footer, and back-to-top control.
- **Team profiles** — leadership cards use local photos in `public/images/team/` and can show more information in a profile modal.
- **Contact form** — submits to the server endpoint `/api/contact`, which validates the submitted fields and sends a formatted email through Resend.
- **Search and social metadata** — page metadata and Open Graph previews, organization JSON-LD, `sitemap.xml`, and `robots.txt` are generated from the App Router files.

## Project structure

```text
src/
  app/
    aboutnexora/page.tsx     About page and its metadata
    api/contact/route.ts     Contact form email endpoint
    globals.css              Global styles and design tokens
    layout.tsx               Root HTML, shared metadata, organization schema
    page.tsx                 Home page and its metadata
    robots.ts                Generated robots.txt
    sitemap.ts               Generated sitemap.xml
  components/
    about/                   About page sections
    contact/                 Contact section, form, and contact channel rows
    hero/                    Home page hero
    layout/                  Navbar, footer, and back-to-top control
    ...                      Reusable section and card components
    seo/                     Organization structured data
  data/                      Content arrays used by the section components
public/
  images/                    Public images, including team portraits
  logo*.png                  Agency logo variants
```

The `data` files keep repeatable content separate from presentation. For example, edit `src/data/team.ts` to change team profiles, `src/data/services.ts` to change service cards, and `src/data/testimonials.ts` to change testimonials.

## Contact email configuration

The browser posts form data to `src/app/api/contact/route.ts`. The Resend API key must remain server-only; do not prefix it with `NEXT_PUBLIC_` or commit it to source control.

Create or update `.env.local` in the project root with the required values:

```ini
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=Nexora Agency <verified-sender@example.com>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`RESEND_FROM_EMAIL` is optional in local development because the route has a Resend onboarding sender as a fallback. For production, configure a sender/domain verified with Resend. After changing `.env.local`, restart the dev server. The receiving address is configured in `src/app/api/contact/route.ts`.

The API route validates required fields and email format, escapes user-provided values before adding them to the email HTML, and returns a useful response when sending fails. Never log or publish the API key.

## Local development

Install dependencies and start the Next.js dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Available project scripts are:

```bash
npm run dev     # Start development server
npm run build   # Create a production build
npm run start   # Serve the production build
npm run lint    # Run ESLint
```

## Images and branding

Files in `public/` are served from the site root. For example, `public/images/hero-team.jpg` is referenced as `/images/hero-team.jpg`. Keep image URLs and filenames in components/data aligned with the actual files and capitalization, especially when deploying to a case-sensitive host. Replace images by updating the referenced file or changing the component/data path; after replacing an image, refresh the browser and restart the dev server if Next.js continues to show a stale version.

## SEO and site URL

`NEXT_PUBLIC_SITE_URL` is used to form canonical site references for metadata, the sitemap, robots file, and organization schema. It can be `http://localhost:3000` locally; set it to the final HTTPS domain in the production environment. The `NEXT_PUBLIC_` prefix makes the value available to client code, so it must never contain secrets.

The root layout provides fallback metadata and `metadataBase`. Each route defines its own title and description. `src/app/sitemap.ts` and `src/app/robots.ts` create `/sitemap.xml` and `/robots.txt` automatically.

## Updating the site

1. Change content in the matching file under `src/data/` where possible.
2. Change section layout or behavior in its component under `src/components/`.
3. Add new routes under `src/app/` and set route-specific metadata there.
4. Store public images in `public/` and reference them with root-relative paths.
5. Keep API credentials in `.env.local` locally and in the hosting provider's environment settings in production.

