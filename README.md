# Dhananjay Maurya — Portfolio

Personal portfolio for Dhananjay Maurya, Software Engineer & Full-Stack Developer.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, and Framer Motion.

## Sections
1. Navbar — sticky, active-section highlighting, mobile hamburger, Resume button
2. Hero — intro, CTA buttons (Projects / GitHub / LinkedIn / X / Resume)
3. About — bio + stats (10+ merged PRs, internship, hackathon recognition)
4. Tech Stack — categorized technologies with icons
5. Experience — timeline (Zidio Development, Corsair Open Source)
6. Featured Projects — case-study card + project cards with stylized UI previews
7. Achievements & Certifications
8. Open Source
9. Education
10. Contact + Footer
11. AI Chatbot — floating assistant that answers questions about the portfolio

## AI Chatbot Setup

The chat widget (bottom-right bubble) answers visitor questions using the
portfolio data in `data/portfolio.ts` as its knowledge base. To turn it on,
add **one** API key to a `.env.local` file in the project root:

```bash
GEMINI_API_KEY=your-key        # free tier: https://aistudio.google.com/apikey
# or
GROQ_API_KEY=your-key          # free tier: https://console.groq.com/keys
# or
ANTHROPIC_API_KEY=your-key     # https://console.anthropic.com/settings/keys
# or
OPENAI_API_KEY=your-key        # https://platform.openai.com/api-keys
# or
ZAI_API_KEY=your-key           # https://z.ai
```

Then restart the server (`npm run build && npm start`, or `npm run dev`).
The first key found wins; force a specific one with `AI_PROVIDER=gemini` etc.
See `.env.example` for all options including custom OpenAI-compatible endpoints.

Without a key the widget still works but runs in offline mode and points
visitors to the contact section. The API key is only ever used server-side
(`app/api/chat/route.ts`), never exposed to the browser. Requests are
rate-limited to 20 per 5 minutes per visitor.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production:

```bash
npm run build
npm start
```

## Customization
- `data/portfolio.ts` — single source of truth for profile, links, stats, tech stack, experience, projects, achievements, education
- `public/resume.pdf` — the downloadable CV; replace this file to update the resume
- `app/globals.css` — design tokens (colors, fonts) via Tailwind v4 `@theme`
- `app/layout.tsx` — SEO metadata; update `SITE_URL` to the production domain after deployment

## Design
- Near-black background (`#0a0a0e`) with a single indigo accent (`#6366f1`)
- Inter + JetBrains Mono via `next/font`
- Respects `prefers-reduced-motion`; keyboard-accessible with visible focus states
