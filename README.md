# The CJP Files

**An AEI & Gene Sharp's Playbook in action**

A responsive, interactive, source-led editorial research website covering the Cockroach Janta/Janata Party (CJP), named public organisers, reported public associations, Indian protest history, Gene Sharp's nonviolent-action framework, and the contested question of whether India's political events constitute a coordinated regime-change operation.

## Open or publish

- Open `index.html` in a modern browser. No build step or package installation is required.
- To publish, upload `index.html` as the site's root HTML file to a static website host such as Cloudflare Pages, Netlify, or GitHub Pages. Keep the filename `index.html`.
- If embedding on an existing domain, check any content-security policies and external font restrictions.

## Included interactions

- Clickable association diagram showing public, sourced relationships without asserting guilt by association.
- Searchable 45-entry public association ledger with categories, source links, and a Show All control.
- A dated research timeline and tactical comparisons referencing Gene Sharp's 198 methods.
- Searchable, filterable 19-item source register, including an export-to-CSV control.
- Explicit investigative status panel: no independently validated probability of regime change has been established. The optional interactive Bayesian scenario explores *hypothetical assumptions*, not an empirical estimate.
- A best-effort public-news search via a third-party feed. Newly fetched headlines remain unverified research leads and do not automatically influence the findings. External feed calls depend on browser networking, third-party service availability, and CORS rules, and may be unavailable when opened locally.
- Responsive mobile design, accessible labels, and a correction/evidence submission template.

## Editorial standards and limitations

This release is an initial public-research snapshot, not a comprehensive census of every past/current CJP association. Recorded connections distinguish public organising roles, prior AAP-related activity, expressions of political support, parallel protest events, and historical or conceptual context. CJP here means the **Cockroach Janta/Janata Party**; it is not Citizens for Justice and Peace, a different organisation also called CJP.

The title's mention of AEI and Gene Sharp is a research hypothesis. The site does **not** treat a shared protest method as evidence of direction, financing, command, or illicit conduct. It does not assert that a regime-change operation has been established. Historical sources, public roles, dates, and associations should be independently revalidated before wider public distribution.

This package is a static frontend. It is not connected to a database, editorial review dashboard, server-based updater, scheduled verification job, or an ongoing probability-calibration engine. To add those features, deploy and connect a secure backend and human editorial review process. Updates to the verified record must be published through a reviewed, version-controlled process.

## File contents

- `index.html` — the complete standalone site, including styling, scripts and current cited editorial content.
- `README.md` — usage and limitations.

## Research snapshot

Prepared: 15 October 2026 (India Standard Time). This is a time-bounded research release and should not be represented as having checked or verified developments after its editorial cutoff.

## Deployment

Pushing to `main` starts the GitHub Pages workflow in `.github/workflows/deploy.yml`.
If Pages is not yet activated, select **GitHub Actions** under repository **Settings → Pages → Build and deployment → Source**. The public address is `https://ashish-bhatia.github.io/the-cjp-files/` after a successful Pages deployment.
