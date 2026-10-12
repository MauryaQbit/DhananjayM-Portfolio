# Claude Code — orientation

This file is the entry point for Claude Code. The rules that apply to any AI
agent working in this repo live in [AGENTS.md](./AGENTS.md) and are imported
below, so they stay the single source of truth.

@AGENTS.md

## Repo map

| Path | What it is |
|---|---|
| `app/` | App Router — `page.tsx` (home), `blog/` (index + `[slug]`), `layout.tsx` (SEO + fonts), `globals.css` (design tokens), `api/chat/` |
| `components/` | Presentational sections, one component per page block |
| `components/blog/` | Article bodies (`AiToolsArticle`, `EdgeArticle`) and shared `Prose` styles |
| `data/` | `portfolio.ts` and `blog.ts` — the single source of truth for content |
| `types/index.ts` | Shared TypeScript interfaces |
| `public/` | `resume.pdf` and static assets |

## Commands

```bash
npm run dev      # dev server (Turbopack, Next 16 default)
npm run build    # production build — run before pushing
npm start        # serve the production build
npm run lint     # eslint
```

## Conventions worth knowing before editing

- Content changes go in `data/`, not in components. Prefer adding data over
  adding markup.
- `globals.css` holds the design tokens as Tailwind v4 `@theme` variables.
  Reuse `--color-*` names; don't introduce one-off hex values in components.
- Sections are numbered in `SectionHeading` via the `index` prop. When you add
  a section, renumber the ones after it.
- Preview mockups live in `components/ProjectPreview.tsx`; each project in
  `data/portfolio.ts` picks a `preview` variant from that file's union type,
  so the two must stay in sync.
- Fonts are declared once in `app/layout.tsx` and referenced by CSS variable.
