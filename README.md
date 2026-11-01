# HAMS Group

Responsive corporate website built with Next.js App Router, JavaScript, semantic HTML and Tailwind CSS.

## Development

Install dependencies with `pnpm install`, then run `pnpm dev` and open http://127.0.0.1:3000.

`pnpm build` generates the production static export in `out/`. Deploy that directory on a static host. Webpack is selected because Turbopack's CSS compiler subprocess failed in this Windows environment.

## Editing

- `app/page.js`: homepage and business portfolio.
- `app/[category]/page.js`: four business-category pages.
- `app/[category]/[company]/page.js`: eight company pages with breadcrumbs, services and direct contact routes.
- `lib/businesses.js`: company content, source links, assets and route helpers.
- `components/`: shared navigation, cards and accessible company carousels.
- `app/globals.css`: responsive layouts, brand tokens and typography.
- `app/layout.js`: page metadata and document layout.
- `public/images/`: website assets. Inter font license is included beside the font.
- `WEBSITE-BRIEF.md`: source content direction and information needed before public launch.

Homepage portfolio cards show the companies in each category. Multi-company cards support horizontal touch scrolling, previous/next buttons and pausable rotation. Rotation pauses on hover/focus and while offscreen or the browser is hidden; reduced-motion preferences disable automatic rotation. Category headings open category pages; company images open company pages. Mobile navigation closes when a destination is selected.

GitHub Pages deploys automatically on pushes to `main`. The workflow builds with `NEXT_PUBLIC_BASE_PATH=/hams-group`; leave the variable unset for local development at the domain root. All 13 content pages are statically exported.

## Content and assets

Logo: supplied HAMS brand artwork. Hero: AI-generated illustrative Himalayan landscape using the built-in image generator. Prompt: cinematic Himalayan sunrise, layered Nepal foothills, distant snow peaks, golden light to the right, navy shadows to the left, authentic village, no text or logos.

Business imagery uses the supplied company photographs and logos. Additional Om Surgical Concern and OmniTrident AI visuals were downloaded from their official websites. Source details are in `CONTENT-SOURCES.md`. Careers imagery remains an illustrative Unsplash photograph, not a HAMS employee photograph (photo-1522071820081-009f0129c71c).

Group copy follows the supplied Human Progress brand book. Company content is paraphrased from the official websites, with source links on the company pages. Sindhu Sadabahar information comes from Om Surgical Concern’s company profile; no unverified services or contact numbers are supplied for it.
