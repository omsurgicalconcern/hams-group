# HAMS Group

The redesigned HAMS Group website is now the main application at the repository root. The former duplicate reworded-version directory has been removed.

## Development

Run `pnpm install --frozen-lockfile`, then `pnpm dev`.

Local preview: http://127.0.0.1:3000

`pnpm build` creates the static export in `out/`.

## Features

GSAP/ScrollTrigger hero and chairperson motion, image parallax, responsive business accordion, keyboard navigation, local search and reduced-motion support. Company details, branding and supplied imagery are retained.

GitHub Pages deploys on pushes to main, with NEXT_PUBLIC_BASE_PATH=/hams-group. The root .openai/hosting.json retains the original Sites project identity. The separate redesign preview retains its existing hosted URL.
