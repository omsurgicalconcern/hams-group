# HAMS Group

Responsive corporate homepage built with Next.js App Router, JavaScript, semantic HTML and Tailwind CSS.

## Development

Install dependencies with `pnpm install`, then run `pnpm dev` and open http://127.0.0.1:3000.

`pnpm build` generates the production static export in `out/`. Deploy that directory on a static host. Webpack is selected because Turbopack's CSS compiler subprocess failed in this Windows environment.

## Editing

- `app/page.js`: content, navigation, business dialogs and interactions.
- `app/globals.css`: responsive layouts, brand tokens and typography.
- `app/layout.js`: page metadata and document layout.
- `public/images/`: website assets. Inter font license is included beside the font.
- `WEBSITE-BRIEF.md`: source content direction and information needed before public launch.

The four business cards open keyboard-accessible native dialogs. Mobile navigation closes when a destination is selected. The site respects reduced-motion preferences.

## Content and assets

Logo: supplied HAMS brand artwork. Hero: AI-generated illustrative Himalayan landscape using the built-in image generator. Prompt: cinematic Himalayan sunrise, layered Nepal foothills, distant snow peaks, golden light to the right, navy shadows to the left, authentic village, no text or logos.

Business and careers imagery: illustrative Unsplash photographs, not photographs of HAMS facilities or employees. Original photo identifiers: photo-1559839734-2b71ea197ec2, photo-1519641471654-76ce0107ad1b, photo-1579154204601-01588f351e67, photo-1522071820081-009f0129c71c. Replace with approved company photography for public launch.

Copy is based on the supplied Human Progress brand book. There are no invented company statistics, contact addresses, vacancies or leadership profiles. The final CTA directs visitors to the portfolio until official contact routes are provided.
