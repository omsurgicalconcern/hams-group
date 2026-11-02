# HAMS Group — Reworded Version

An independent local redesign using HAMS Group's existing navy/gold palette, company information, leadership content and supplied imagery. The original project in the parent directory is unchanged.

Design reference: https://www.adani.com/ (reviewed 2 November 2026). This version recreates its presentation patterns with HAMS content: full-screen image crossfades, animated headline entrances, a business mega-menu, vertical/company explorer, scroll-linked word emphasis, large image stories and editorial inner pages. No Adani claims, branding, tracking or media are included.

## Run locally

From this directory, run `npm run dev`.

Preview: http://127.0.0.1:3001

Dependencies currently resolve from the parent project's node_modules. For a standalone copy, run `npm install` here first. `npm run build` creates the static export in `out/`.

Hero slide navigation (without pause buttons), business tabs with arrow-key navigation, company directory, local search, mobile navigation, official company links and contact actions are functional. Medical brand logos scroll; automobile logos remain static as requested. Reduced-motion preferences disable autoplay and decorative motion.

Company copy and asset provenance are retained in CONTENT-SOURCES.md. Existing content routes are preserved.

