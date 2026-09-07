# T.O.U.R. NEWS — Wireframe Implementation Note (2026-09-07)
Status: IMPLEMENTED per user's wireframe; verified by tool (grep + build + curl); NOT deployed.
Source of design: user's ASCII wireframe (breaking / hero / today / investigates / brazil-usa / ai-tech / show / daily-desk / footer)

=== WHAT WAS ADDED (all from user's wireframe, no inventing) ===
- Brazil ↔ United States desk section (3 cards: Brazil / U.S. / The Bridge — links to /topics/ + dossier)
- AI & Technology section (4 cards: AI Eval / Digital Power / Critical Infra / Public Records)
- T.O.U.R. NEWS Show / Video hero (link /tour-news/ with WATCH + brief description)
- Existing sections preserved: Investigations (Phase C), Breaking, Hero, Today grid, Daily Desk editions

=== VERIFICATION ===
- Build: PASS (644ms, 9 pages)
- Dist/index.html contains: "AI & Technology", "Brazil ↔", "Evening Brief", "The Bridge"
- Git: src/pages/index.astro modified; no other source changed; no deploy
- Live site: unchanged (b489ffc local only; remote d64e591)
- Security: bridge 8758 local active, zero external

=== WHAT WAS NOT ADDED (deliberate — user's instruction) ===
- No new feature boxes beyond wireframe
- No separate /topics/ URLs (user noted but didn't approve build; kept anchors)
- No dossier visual redesign (user directed but didn't confirm spec)
- No institutional pages content (/standards/, /corrections/ etc. — need real content, not placeholders)
- No SEO/structured-data (Phase F)

=== NEXT ===
Wireframe structure now matches user's design. Consistency (same headline scale / metadata / cards / hover / mobile) still needed — see USER_AUDIT_RESPONSE.md. Deploy requires Marc approval (§30).
