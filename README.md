# Kapil Kukreja — Portfolio

A premium, statically-generated personal portfolio built to read like a modern SaaS landing page. No backend, fully deployable on Vercel's free tier.

## Tech stack

- **Next.js 15** (App Router) · **TypeScript** (strict)
- **Tailwind CSS** + **shadcn/ui** primitives
- CSS-only animations (scroll reveal, hero aurora) · **Lucide** icons
- Dynamic **OG image** via `next/og`, sitemap, robots, web manifest

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Scripts: `dev`, `build`, `start`, `lint`, `typecheck`, `format`.

## Project structure

```
src/
├── app/            # routes, layout, sitemap/robots/manifest, og image, error/not-found
├── components/     # ui (shadcn primitives), layout (navbar/footer), shared, providers
├── features/       # home, projects feature blocks
├── constants/      # site config, socials, skills, experience, projects (single source of truth)
├── hooks/          # use-scroll, use-copy
├── lib/            # utils
├── types/          # shared TypeScript types
└── styles/         # globals.css (design tokens)
public/             # images, resume PDF, icon
```

## Editing content

All content lives in `src/constants/`:

- **Personal info / links / Telegram** → `src/constants/site.ts`
- **Skills** → `src/constants/skills.ts`
- **Experience / education** → `src/constants/experience.ts`
- **Projects** → `src/constants/projects.ts`

### Project visuals

Each project shows a CSS/SVG dashboard mockup defined in `src/features/projects/project-mockup.tsx`. To use a real screenshot instead, drop an image in `public/images/projects/` and swap the mockup for a `next/image` in the project card and detail page.

### Resume

The resume PDF is served from `public/resume/Kapil-Kukreja-Resume.pdf`. Replace that file to update it (path is configured in `site.ts`).

### Images

The headshot is `public/images/kapil.jpg`. The hero background and OG image are generated with CSS/SVG — no external assets required.

## Deployment

Push to GitHub and import into **Vercel**. No environment variables required. Update `SITE.url` in `src/constants/site.ts` to your final domain so canonical URLs, sitemap, and OG tags are correct.
