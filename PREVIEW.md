# LOCAL PREVIEW — TOTO GLOBAL DESK PORTAL

## Quick preview (production build, served locally)
    cd ~/.hermes/projects/toto-global-desk/portal
    npm run build && npm run preview
    → http://localhost:4321  (Ctrl+C to stop)

## Dev mode (live reload while editing)
    cd ~/.hermes/projects/toto-global-desk/portal
    npm run dev
    → http://localhost:4321 — edits to .astro files appear instantly

## Build only (verify before push)
    cd ~/.hermes/projects/toto-global-desk/portal
    npm run build
    → output in dist/ — open dist/index.html in a browser directly

## Publish (after local check)
    cd ~/.hermes/projects/toto-global-desk/portal
    git add -A && git commit -m "update" && git push
    → Cloudflare auto-builds; live in ~60-90s at https://edufy.marcjalmeida.workers.dev
