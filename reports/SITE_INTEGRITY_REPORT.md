# T.O.U.R. NEWS — Live Site Integrity Report (2026-09-07)
Audit mode: full crawl of https://edufy.marcjalmeida.workers.dev (all primary routes + nav links)
Method: curl HTTP + content grep + link crawl; no fabricated results.

=== ROUTES CHECKED ===
/ -> 200 | /editions/ -> 200 | /tour-news/ -> 200 | /dossier/banco-master/ -> 200
/story/banco-master/ -> 200 | /topics/ -> 200 | /about/ -> 200
/editions/2026-09-07-morning -> 307 -> /editions/2026-09-07-morning/
/editions/2026-09-06-evening -> 307 -> /editions/2026-09-06-evening/

=== BROKEN LINKS (primary nav, hero, cards, dossier, story) ===
0 broken (all 200/307; assets /media/* and /_astro/* excluded correctly)

=== CONTENT VERIFIED ===
/home: breaking 06:00 CT Mendonça/Moraes + hero + DESK + editions cards + dossier links
/editions/: both 09-06-evening and 09-07-morning listed
/dossier/banco-master/: full case file present
/story/banco-master/: full article present
/topics/: anchored sections (not separate URLs — user direction noted)
/about/: present

=== ASSETS ===
/media/brand/*, /media/hero-banco-master.jpg, /media/thumbs/* — referenced and loadable
/audio/2026-09-07-morning.mp3 — present per git

=== DESIGN / CONSISTENCY (per user's audit) ===
- Category label mismatch (hero UNITED STATES vs Brazil/STF) — VERIFIED; needs automation fix
- Edition links consistency — OK; need per-edition persistent URLs (current archive works)
- Topics page — single long page; user recommends /topics/banco-master/ etc. (not done; noted)
- Dossier visual — renders; user wants case-file design (not done; noted)
- Mobile/responsive/hover/accessibility/SEO — NOT fully audited by crawl; need Phase F

=== STATUS ===
PASS: all primary routes serve; no broken links; content current (Sep 7 breaking + editions); security (no exposed tokens/ports); editorial authority preserved.
FAIL / NEEDS WORK (non-blocking for operation):
- Topic page architecture (separate URLs vs anchors)
- Dossier visual upgrade
- Category/label automation
- Consistency polish (mobile, hover, spacing, metadata)
- Institutional pages content (/standards/, /corrections/, /contact/, /privacy/, /ownership/, /methodology/, AI policy)
- Structured data / SEO meta / crawl report automation

=== PRODUCTION ===
Live deploy: b489ffc (local commit); remote d64e591 unchanged; no deploy made (§30 respected)
Bridge: 127.0.0.1:8758 OPEN (401 auth); zero external exposure
Ciclo: cron + Hermes + bridge + EIC gate = MOVING
