# Lai Wei / 魏来 — Personal Website

A bilingual, evidence-led personal portfolio for Lai Wei. It is designed to support research introductions, graduate-school applications, finance and data roles, and a fuller introduction beyond a one-page résumé.

The site connects applied economics, policy evaluation, financial risk, and computational modelling through one principle: turn complex questions into testable models, reviewable evidence, and decision-ready communication.

## Live site

- [中文 / Chinese](https://lai-wei-evidence.futureavicii.chatgpt.site/)
- [English](https://lai-wei-evidence.futureavicii.chatgpt.site/en)

The language switch in the upper-right uses independent, shareable paths. `/` is Chinese and `/en` is English; the older `?lang=en` form remains a compatibility path rather than the canonical English URL.

## Information architecture

The home page is an overview with real links to full pages. Every detail route has a mirrored English route under `/en`.

| Chinese route | English mirror | Purpose |
| --- | --- | --- |
| `/about` | `/en/about` | Full personal introduction and working principles |
| `/academics` | `/en/academics` | Degree, final GPA, honours, coursework, and IELTS |
| `/research/[slug]` | `/en/research/[slug]` | Research question, role, methods, findings, and evidence limits |
| `/projects/[slug]` | `/en/projects/[slug]` | Competition and public GitHub project details |
| `/experience/[slug]` | `/en/experience/[slug]` | Internship responsibilities, outputs, and disclosure boundaries |

The current site includes:

- A compact square portrait and a substantial self-introduction at the beginning of the home page
- Horizontal, readable section labels on all viewport sizes
- Education, a final GPA of 3.44/4.00, First Class Honours, multiple President’s Honour Roll appearances, the Dean’s List, selected coursework, and IELTS results
- Four research pages with explicit roles, methods, current result status, and limitations
- Four project pages, including the COMAP ICM 2026 Problem D Finalist work and three reproducible public GitHub projects
- Five experience pages for banking, securities, investment, and audit work
- A privacy-reviewed evidence section with redacted or tightly cropped visual derivatives
- Personal information and a three-image life gallery, included at the site owner’s request
- Keyboard-visible focus, semantic headings and breadcrumbs, skip links, reduced-motion support, and responsive layouts
- Route-specific canonical links, language alternates, Open Graph metadata, and X/Twitter cards

## Code structure

- `app/page.tsx` contains the bilingual home-page overview and links into the portfolio.
- `app/portfolio-content.ts` is the shared bilingual source for About, Academics, Research, Projects, and Experience detail content.
- `app/detail-page.tsx` provides the common accessible detail-page presentation.
- `app/site-metadata.ts` builds route-specific canonical, language-alternate, and social metadata.
- `app/[category]/[slug]/page.tsx` and `app/en/[category]/[slug]/page.tsx` render the Chinese and English dynamic detail routes.
- `app/globals.css` contains the shared responsive visual system.
- `scripts/prepare-public-assets.py` reproducibly creates the approved public portrait and evidence derivatives from a private source library.
- `tests/rendered-html.test.mjs` renders the built Worker and checks both home pages plus every known Chinese and English detail route.

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

The development server normally starts at `http://localhost:3000/`.

Run the complete release checks with:

```bash
npm run lint
npm test
```

`npm test` first creates the production build and then runs the rendered-HTML suite. The suite checks route status, one-and-only-one `h1`, breadcrumbs, reciprocal language links, responsive and accessibility contracts, public-asset boundaries, metadata, and resistance to forwarded-host metadata injection.

The small `scripts/run-vinext.mjs` wrapper keeps Wrangler logs in a project-local path so the same npm commands work on Windows, macOS, and Linux.

## Rebuilding the public derivatives

The generator requires Python, Pillow, and pdfplumber. Point it at an authorised private material library; never copy that library into this repository.

```powershell
& 'E:\Python312\python.exe' .\scripts\prepare-public-assets.py `
  --source-root 'D:\path\to\private-material-library'
```

The script emits only these reviewed derivative assets:

- `public/images/lai-wei-portrait-square.webp` — a square, metadata-free web portrait
- `public/evidence/icm-finalist-redacted.webp` — a cropped and redacted award preview
- `public/evidence/path-academics-grade.webp` — a cropped grade preview without student numbers, signatures, contact details, or QR codes

Review every regenerated image visually before publishing it. A successful script run does not replace human privacy review.

## Privacy and evidence boundary

Original source records remain private and outside `public/` and Git. Original transcripts, graduation documents, IELTS reports, national IDs, student IDs, internship proofs, application materials, award bundles, questionnaires, client material, and other source records must never be committed or deployed.

The public site contains only verified factual summaries and the explicitly allowlisted, privacy-reviewed derivative images above. The original PDFs, DOC/DOCX files, text exports, scans, and credential files are not public assets. Acceptance evidence is described as acceptance; it is not upgraded into a claim of attendance, presentation, publication, or sole authorship unless a source independently supports that claim.

The phone number remains public because the site owner explicitly requested it. Date of birth, height, weight, zodiac sign, and MBTI are not published. Contact information is excluded from descriptions and social metadata, but anything shown on a public page can still be indexed, copied, or collected by automated crawlers.

## Content maintenance

Re-check these items before each major résumé, application, or recruiting cycle:

- The end date and evidence status of the China Construction Bank internship, currently shown as “Present”.
- Research acceptance, presentation, publication, and repository status.
- GPA, honours, programme wording, internship dates, and award wording against authoritative records.
- Public contact information and the privacy review of every asset under `public/`.

## Technology and hosting

- Next.js-compatible Vinext runtime
- React and TypeScript
- Cloudflare Worker-compatible Vite output
- OpenAI Sites hosting configuration in `.openai/hosting.json`

## Repository

[WeiLai-OpsFin/Personal-information-website](https://github.com/WeiLai-OpsFin/Personal-information-website)

