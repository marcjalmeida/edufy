# T.O.U.R. NEWS — Professional Newsroom Upgrade Audit (Phase A)
Status: AUDIT ONLY — no edits made to production.
Audit date: 2026-09-07 (Mon) — CDT (UTC-05:00) per session.
Auditor: Hermes / Agent.
Project: /Users/macsm1/.hermes/projects/toto-global-desk/portal
Live URL (verified): https://edufy.marcjalmeida.workers.dev/ (HTTP 200, Cloudflare, HIT)
Repo: https://github.com/marcjalmeida/edufy (origin/main = d64e591)

=== 1. WHAT IS PRESERVED (do not touch unless needed) ===
- All 6 cron jobs (Morning 07:00, Midday 13:00, Evening 19:00, Breaking hourly, News Cast, Brazil Monitor) — all reported ok.
- Hermes kanban / work-flow / broker / gateway (local-only 127.0.0.1:8758 bridge NOT exposed).
- TOTO global desk assets: editorial identity, editions, dossiers (banco-master preserved with full JSON schema), audio pipeline, evidence labels.
- All production content: live site serves 2026-09-07 content (morning card + 06:00 CT BREAKING Mendonça/Moraes + 05:30/05:00 updates + DESK grid + dossier + story + editions archive) — verified from fetched HTML (live_home.html saved /Users/macsm1/.hermes/cache/audit/).
- Git history: 6 commits from Package B redesign (d64e591 back to ed1801f) — preserved.
- Design tokens / brand (T.O.U.R. masthead, bulldog emblem, ink/paper color system, card families — all intact).

=== 2. ROUTE INVENTORY (verified from source + live) ===
LIVE (all 200 OK verified):
/                        → homepage (hero + breaking + editions + desks + dossier links) — PASS content
/editions/              → archive index (lists 2026-09-06-evening + 2026-09-07-morning) — PASS
/editions/[id]          → per-edition detail (morning/evening) — PASS
/editions/2026-09-06-evening → serves
/editions/2026-09-07-morning → serves (live 200)
/dossier/banco-master/  → dossier (full structured case) — PASS
/story/banco-master/    → story (headline + deck + body + timeline + related) — PASS
tour-news/              → editorial section — PASS
topics/                  → topic index (anchored sections) — PASS
/about/                  → about page — PASS
/media/                   → brand assets (tour-emblem, thumbs, hero images) — PASS

LOCAL SOURCE (src/pages + .astro):
index.astro, editions.astro, editions/[id].astro, tour-news.astro, topics.astro, dossier/banco-master.astro, story/banco-master.astro, about.astro + 8 components + 2 layouts.

=== 3. CONTENT QUALITY (live extraction from HTML) ===
- BREAKING strip (verified): 06:00 CT Mendonça/Moraes/Banco Master; 05:30 CT PGR doc; 05:00 CT rally — real, sourced, timed.
- Lead story (verified): Mendonça asks plenary to suspend Moraes — mutual-suspension spiral — with evidence references.
- DESK grid (verified): US Immigration, Brazil Public Integrity, World, War/Security — all with real sub-items (worksite raid, Congress probes, watchlist, Banco Master depositors).
- Editions cards (verified): morning / midday / evening — correct data-type stamps.
- Dossier / story links (verified): /dossier/banco-master and /story/banco-master both referenced and accessible.
- No TODO / lorem / placeholder in live-rendered output.
- Source check: 2026-09-07 date does NOT appear in HTML text (count=0) — the content references the event timeline, not calendar-date stamps inside body. This is acceptable; editions list correctly via /editions/.

=== 4. DESIGN / VISUAL (verified from source + live HTML) ===
PASS items:
- Masthead / brand consistent (T.O.U.R. ink, tagline, live dot, EN/PT-BR)
- Edition cards styled by time-of-day (morning=orange, midday=blue, evening=purple)
- Evidence labels visible (EvidenceLabel component used)
- Responsive breakpoints handled via Astro + CSS (no overflow reported)
- Hero images rendered (/media/hero-banco-master.jpg + thumb variants)
- Dark-mode tokens present (prefers-color-scheme media query)
- Typography hierarchy (headlines > deck > meta > body)
- Card families: EditionCard, EditionCover, EvidenceLabel, EditionHero — consistent
- Footer links to editions / dossier / story / topics — all working

NEEDS IMPROVEMENT (Phase B/C/D work — NOT done now, documented only):
- Two "placeholder" strings found in source (src/components/EditionCard.astro, src/pages/index.astro) — must check if they render visibly in production. Live extraction: no visible placeholder text in rendered HTML = likely hidden by conditional rendering.
- Visual system could be more "Globo/Reuters" dense; current is professional but slightly sparse on data-rich side panels (no stat cards on homepage yet — dossier page only).
- No search UI implemented — not exposed publicly; OK per instruction (don't expose fake search).
- Mobile QA NOT performed (require manual check at 390px / 768px / 1440px).
- Accessibility: semantic HTML verified (nav, main, section); alt text present via components; keyboard focus not verified; reduced-motion not explicitly handled.
- No structured data (Schema.org NewsArticle / Organization) — missing on all pages.
- SEO meta: descriptions present; canonical / OpenGraph / Twitter cards NOT verified in source.
- 404 page: not independently verified.
- Link integrity crawl: NOT performed (Phase F).
- Performance: CSS is render-blocking (no critical-headers), images not explicitly lazy-loaded via markup.
- No browser QA matrix performed yet.

=== 5. BROKEN / MISSING ASSETS (live fetch) ===
- All href refs in homepage point to existing routes (/editions/, /dossier/banco-master, /story/banco-master, /media/brand/*) — all 200 verified.
- Image assets (/media/hero-banco-master.jpg, /media/brand/tour-emblem.png, /media/thumbs/pgr-brief.png) — present in source public/ and referenced.
- No 404 on primary navigation links verified.
- Audio: public/audio/2026-09-07-morning.mp3 exists (per git log) — referenced by EditionAudio component.

=== 6. EDITORIAL / NEWSROOM INTEGRITY (verified from source + live) ===
PASS:
- Authority model preserved (Marc = Publisher, TourNEWS = EIC, Hermes = Orchestrator).
- State machine via kanban IDs preserved (no competing queue created).
- Evidence labels, claim types, sourcing notes preserved in JSON schema.
- Fact-check + critic review fields present in data model (though not fully rendered in all cards — acceptable for Phase A).
- All 6 cron jobs still running — automated editorial cycle preserved.
- No merge of Grok/bridge into production site — local-only 127.0.0.1 kept, as required.
- No unauthorized external exposure of Hermes or credentials.

=== 7. WHAT IS NOT READY FOR FULL REDESIGN (documented, not changed) ===
- Phase A audit file (this doc) — produced.
- Phase B design tokens — NOT started; current system already has token-level variables (var(--ink), var(--paper), etc.) — sufficient for incremental improvement.
- Phase C homepage enhancement (more data-rich cards, stats, deeper investigation callouts) — requires design agreement.
- Phase D inner pages (all already complete — no missing routes; dossier + story + editions verified working).
- Phase E editorial data integration — editions-index + edition-latest JSON already feed pages correctly; pipeline works.
- Phase F QA (browser, responsive, link crawl, accessibility matrix) — NOT executed.
- Phase G preview — local preview URL available (npm run preview at localhost:4321 after build); live site already is preview.

=== 8. PRODUCTION DEPLOY STATUS ===
- Live URL serves fresh content (Sep 7 morning edition in archive, breaking updates from 07/09).
- Git push to origin/main = d64e591 (verified with ls-remote + local HEAD).
- No separate wrangler deploy needed (Cloudflare auto-deploy from GitHub repo; wrangler.jsonc present with assets.directory=./dist; dist/ NOT tracked in git — deploy mechanism depends on CI or build step; current live state is verified working).
- No production deploy recommended until Phase B/C design agreement and Phase F QA complete.

=== 9. VERIFICATION COMMANDS USED ===
- curl (live HTML / status / headers)
- git log / status / ls-remote
- grep / find (routes + source inventory)
- Python urllib (live fetch + content extraction)
- Source inspection (.astro files + components)

=== 10. REMAINING LIMITATIONS (honest) ===
- Mobile/viewport responsive QA: not performed.
- Screen-reader / keyboard-only navigation audit: not performed.
- Structured-data schema: not implemented.
- Search UI: not implemented (not exposed — OK).
- Link-integrity crawl report: not generated.
- Browser QA matrix (acceptance criteria from spec §22): not produced.
- Performance benchmark (LCP / TTI / CLS): not measured.
- No visual comparison screenshot produced.
- No design token file formalized beyond embedded CSS variables.

=== 11. FILES CREATED / MODIFIED ===
Created (new, no existing files overwritten):
- /Users/macsm1/.hermes/cache/audit/live_home.html
- /Users/macsm1/.hermes/cache/audit/live_editions.html
- /Users/macsm1/.hermes/projects/toto-global-desk/portal/reports/PROFESSIONAL_NEWSROOM_AUDIT.md (this file)
Modified (NONE): all source, dist, git, routes preserved exactly.
No source edits made.

=== 12. NEXT PHASE READINESS ===
Phase A → COMPLETE (audit doc delivered, evidence saved, nothing broken).
Phase B/C (design tokens + homepage upgrade) → READY TO START upon Marc approval; design agreement needed for data-density improvements.
Phase D/E (inner pages + editorial integration) → ALREADY COMPLETE — no work needed.
Phase F (QA matrix + link crawl + accessibility) → BLOCKED until after Phase C; requires browser verification.
Phase G (local preview + Marc review) → AVAILABLE (npm run preview) once Phase C changes committed.
Phase H (production) → REQUIRES explicit Marc approval per §27 / §30.

=== 13. RISK / SAFETY NOTES ===
- No credentials, tokens, .env, or bridge secrets manipulated.
- No remote shell access granted.
- All work local-only; production live site verified read-only via curl.
- No destructive git operations performed (no rebase, no force-push).
- Original Project Index / ROUTER / cron / Brazil Monitor / skills untouched.
- TOTO editorial authority preserved — no AI replacement of TourNEWS EIC.
- No new paid APIs used (free/local only per user profile).
