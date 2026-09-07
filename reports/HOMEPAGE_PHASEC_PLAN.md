# Phase C — Homepage Upgrade Plan (local only; no deploy)
Status: PLANNED — no source edited yet.
Based on audit (PROFESSIONAL_NEWSROOM_AUDIT.md) + live HTML extraction.

=== CURRENT HOMEPAGE (verified live) ===
- Utility bar: brand + EN/PT-BR + Search + ● LIVE — PASS
- BREAKING strip: 06:00 CT Mendonça/Moraes + 05:30/05:00 — PASS (real)
- Hero card: Banco Master / mutual-suspension spiral + hero image — PASS
- DESK grid: US Immigration / Brazil Public Integrity / World / War-Security — PASS
- Editions cards: morning / midday / evening — PASS
- Dossier / story links — PASS
- Footer — PASS

=== WHAT IS MISSING vs §8 spec ===
A. Investigations section (T.O.U.R. Investigates / Follow the Money / The Documents) — not as a distinct visual band; only via dossier links.
B. AI / Technology section — not visible as standalone section.
C. Brazil–USA Desk — present via desktop topics, not as dedicated hero.
D. Latest / live rail — present via BREAKING, not as separate timestamped rail.
E. Newsletter / follow — not implemented (acceptable; don't expose fake UI).
F. Professional footer with full link taxonomy — adequate but can be denser.

=== PROPOSED (no layout destruction; only additions within existing design) ===
1. Add an "Investigations" band after DESK (uses existing EditionCard components + EvidenceLabel) — showcases dossier + timeline.
2. Add AI/Tech band (small, 2 cards) — uses existing card family.
3. Strengthen footer with full section taxonomy (news / investigations / dossiers / editions / topics / brasil-usa / tech / courts / defense) — no external links added.
4. No changes to hero, navigation, branding, colors, or editorial authority.
5. Preserve all 6 cron outputs and Hermes workflows.
=== NOT IN THIS PHASE (deliberately deferred) ===
- Search UI (still not implemented; no fake search exposed)
- Structured data / SEO meta (Phase E / F)
- Responsive QA / link crawl / accessibility audit (Phase F)
- Production deployment (Phase H — Marc approval required)

--- EXECUTION NOTE (2026-09-07) ---
User approved: "ok go ahead" — interpreted as Phase C homepage upgrade, local only, no deploy.
Action taken: Added Investigations band markup directly to src/pages/index.astro using existing EditionCard + EvidenceLabel components; no new dependencies; no redesign of hero/navigation/brand.
Files modified: src/pages/index.astro only (addition, not rewrite).
Files preserved: all other source, all cron/Hermes/workflows, live site untouched until deploy approval.
Status after edit: needs `npm run build` + browser QA (Phase F) before any production claim.
