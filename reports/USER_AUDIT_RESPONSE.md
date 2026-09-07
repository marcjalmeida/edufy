# T.O.U.R. NEWS — User Audit Response (2026-09-07)
Source: Marc's live-crawler review of production site. Not an AI summary — user's own ratings and directions, quoted/paraphrased.
Status: RECORDED, NOT AUTO-EXECUTED. No new edits to source.

=== USER RATINGS (verbatim direction) ===
- Brand identity: 9/10
- Homepage concept: 8.5/10
- Investigative product concept: 9/10
- Editorial differentiation: 9/10
- Information architecture: 7/10
- Consistency / polish: ~7/10
- Institutional trust layer: 6.5/10
- Overall verdict: concept strong enough; STOP redesigning from scratch; finish existing instead.

=== VERIFICATION DONE THIS TURN ===
A. Category/label mismatch (hero "UNITED STATES" on Brazil/STF Mendonça story) — VERIFIED via live HTML extraction: label wrong; user's request: "caught automatically by Hermes" (story.category / topic / country / section validation against rendered label)
B. Edition links (morning/midday/evening) — VERIFIED: consistent in source; user's note: ensure they don't all resolve to same target unless deliberate
C. Topics (/topics/#brazil-public-integrity) — VERIFIED: single anchored page; user recommends separate URLs (/topics/brazil-public-integrity/ etc.)
D. Dossier (banco-master) — VERIFIED: renders full; user wants case-file visual design (status, verified facts, docs, timeline, claim ledger, contradictions, what's unknown)

=== USER'S DIRECT QUESTIONS / ORDERS ===
- "Don't keep adding new boxes." → Phase C Investigations band already done; no further additions.
- "Make every existing page look finished, connected, intentional, mobile-ready, trustworthy." → Phase C done; remaining work is consistency (same headline scale, metadata, image ratios, badges, hover, mobile, spacing) — not new pages.
- "The homepage repeats Mendonça headline several times. Use space for genuinely different second lead." → Verified: same hero reused; fix = content/curation, not design.
- "READ / LISTEN / WATCH / SEE RECEIPTS — LISTEN and WATCH must never be visible unless they work." → Verified: components exist; condition should be data-driven (if audio/video present, show; else hide) — require source check.
- Institutional pages (/about/, /standards/, /corrections/, /contact/, /privacy/, /ownership/, /methodology/, AI policy) — required per user; not yet built. Must contain real content, not placeholders.
- Dossier should have: OVERVIEW (verified facts / docs / timeline / contradictions), THE STORY, DOCUMENTS, TIMELINE, PEOPLE & ORGS, CLAIM LEDGER (FACT/ALLEGATION/ANALYSIS/UNVERIFIED), WHAT WE STILL DON'T KNOW.

=== WHAT I DID NOT DO (deliberate) ===
- Did not edit index.astro (already edited in Phase C; no further changes)
- Did not create /topics/brazil-public-integrity/ (would need route + content — user didn't explicitly say "do it now"; just direction)
- Did not build the dossier redesign (needs user approval of design spec from user's message)
- Did not deploy (Phase H requires Marc approval)
- Did not start new feature (respecting "stop adding boxes")
- Did not modify cron / bridge / kanban (preserved)

=== WHAT IS PRESERVED ===
- All working systems (cron 6, Hermes, bridge 8758 local, site live)
- All existing content (editions 06/07, dossier, story, audio)
- All editorial authority (Marc / TourNEWS / Hermes / agents)
- Commit b489ffc (Phase B + C) unchanged

=== NEXT STEP NEEDED FROM MARC ===
Choose ONE priority (user listed 4 implicitly):
1. Fix category/label automation (Hermes validation rule)
2. Separate topic pages (/topics/brazil-public-integrity/ etc.)
3. Dossier visual upgrade (case-file design)
4. Consistency / mobile / hover / spacing polish (no new features)
Or: declare done — site is credible as-is (8/10) and focus on news cycle.
