# Lai Wei / 魏来 — Personal Website

A bilingual personal website for Lai Wei, designed for research, graduate-school applications, finance and data roles, and general professional introductions.

The site presents one clear narrative: turning complex questions into testable models and decision-ready evidence across applied economics, policy evaluation, financial risk, and computational modeling.

## What is included

- Chinese / English switching from the top-right language control, with a shareable English view at `?lang=en`
- Responsive layouts for desktop, tablet, and mobile
- Education, GPA, honours, and selected coursework
- Four research case studies with explicit methods, roles, and outcome status
- COMAP ICM 2026 Problem D Finalist project
- Banking, securities, investment, and audit experience
- Personal profile and a three-image life gallery
- Accessible keyboard focus, reduced-motion support, and semantic page structure
- Host-aware Open Graph and X/Twitter metadata using `public/og.png`

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

The development server normally starts at `http://localhost:3000/`.

Validation:

```bash
npm run lint
npm run build
```

The small `scripts/run-vinext.mjs` wrapper sets the Wrangler log path in a cross-platform way, so the same npm scripts work on Windows, macOS, and Linux.

## Content maintenance

Update these items when circumstances change:

- The end date of the China Construction Bank internship, currently shown as “Present”.
- Research acceptance, presentation, and publication status when a project reaches a new stage.
- GPA, honours, or programme wording only when supported by an official record.
- Personal details such as weight or MBTI if Lai Wei wants them kept current.
- Contact information before every major resume or application cycle.

All visible Chinese and English copy is maintained together in `app/page.tsx`. Site-wide styling is in `app/globals.css`.

## Privacy boundary

Only the four selected photographs are included in `public/images`. Original transcripts, graduation certificates, IELTS reports, identification documents, internship proofs, application materials, student numbers, certificate numbers, and other source records are intentionally excluded from both the site and the public repository.

The phone number and exact date of birth are shown because the site owner explicitly requested them. They are deliberately excluded from search descriptions and social metadata, but any information displayed on a public page can still be collected by search engines and automated crawlers.

## Technology

- Next.js-compatible Vinext runtime
- React and TypeScript
- Cloudflare Worker-compatible Vite output
- OpenAI Sites hosting configuration in `.openai/hosting.json`

## Repository

[WeiLai-OpsFin/Personal-information-website](https://github.com/WeiLai-OpsFin/Personal-information-website)
