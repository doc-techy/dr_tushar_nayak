## Dr. Tushar Nayak — Orthopaedic Care Website

This repository contains the marketing and patient engagement site for **Dr. Tushar Nayak**, benchmarked against the public reference experience on [drtusharnayak.getmy.clinic](https://drtusharnayak.getmy.clinic/). It is built with Next.js (App Router) and styled using Tailwind CSS to deliver a bright, modern UI in shades of light green, light blue, dark blue, white, and black.

Key sections:

- Hero, About, Education & Experience, Services, Educational Blogs, FAQs, and Contact.
- Dedicated booking workflow (`/booking`) with concierge handoff messaging.
- Google Maps embed, WhatsApp floating action button, and social media link-out chips.

## Tech Stack

- Next.js 15 (App Router, React 19 RC)
- TypeScript
- Tailwind CSS with `@tailwindcss/forms`
- Local Geist font assets

## Local Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

Lint the project before committing:

```bash
npm run lint
```

## Deployment (Vercel)

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Create a new project on [Vercel](https://vercel.com/new) and import the repo.
3. Use the default build command `npm run build` and output directory `.next` (defaults are already correct).
4. Set the production URL (e.g. `https://drtusharnayak.com`) under **Domains**. Update the `siteUrl` constant in `src/app/layout.tsx` if the canonical domain changes.

No environment variables are required. After the first deployment, enable Vercel Analytics or Speed Insights for Core Web Vitals tracking.

## Content Management

Structured content such as hero statistics, services, blog cards, FAQs, and map embeds are centralised in `src/data/site-content.ts` for easy updates. Modify the data file to refresh copy or add new entries without touching layout logic.

## Accessibility & UX Notes

- Components use semantic markup and accessible labels for the FAQ accordion and navigation toggle.
- WhatsApp FAB includes an accessible name and uses high-contrast colors for legibility.
- Layout is responsive across breakpoints up to 1440px.

## License

Proprietary. All rights reserved by the project owner.
