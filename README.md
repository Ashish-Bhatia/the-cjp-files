# The CJP Files

**Independent public-record investigation · research edition 01 · 19 October 2026**

Live publication: <https://ashish-bhatia.github.io/the-cjp-files/>

The repository has been restarted from a clean slate. The new `index.html` is the public-facing research interface. Previous repository history is retained in Git; archived old content is **not** incorporated into the new evidence findings or presumed verified.

## Current deliverables

| File | Purpose | Status |
|---|---|---|
| [index.html](index.html) | Responsive editorial homepage with searchable public records | Published to main |
| [research/01-origins.md](research/01-origins.md) | Volume 1 foundation: creation, aims, public people, first chronology and limits | Foundational draft |
| [research/data.json](research/data.json) | Portable evidence, events, public roles, ties, claims, hypotheses, coverage and backlog | Initial register |
| [README.md](README.md) | Method, version tracking and volume progress | Current |

At this edition the register comprises **23 source references, 16 selective dated events, 15 public-role entries, 4 typed ties, 6 assessed claims, 6 competing hypotheses and 14 open tasks**. These counts describe files created, **not** the number of all events, relationships or people associated with CJP.

No judgment is made from the absence of a source in the incomplete database.

## Scope and editorial independence

The project investigates the Cockroach Janta Party, also referred to as the Cockroach Janata Party, from its earliest verifiable origin to the date of each research release. It makes no presumption that the movement is a foreign-directed project, a front for any party, entirely independent or unlawful.

No institutional endorsement is implied. It is not an official CJP site.

All substantive claims require original dated source references or independent reported evidence. If a report reproduces a movement statement, it verifies the **existence of that public statement** more strongly than the truth of its entire content. Court complaints, police allegations, political assertions and resolved judicial findings have distinct classifications.

### Evidence discipline

1. Record event date, document publication date and access date separately.
2. Prefer original authenticated records, government and court files, contemporaneous independent reporting, then scholarship; treat anonymous allegations as leads.
3. Keep supporters, invited attendees, formal officers, historical roles and critics **separate**.
4. Report connections only with typed, dated evidence. Ideological overlap, photo co-presence, hashtags and common marches are insufficient to prove control or financing.
5. Attribute disputed allegations to their speakers, record denials and legal status, and preserve meaningful contradictions.
6. Do not publish private identifying information, ordinary protest attendee dossiers, scraped private messaging, confidential financial records or unsupported accusations.
7. Do not infer Gene Sharp / Otpor / CANVAS direction from the use of common public nonviolent methods.
8. Do not count planned or advertised events as completed events without subsequent evidence.
9. Use source-level counts, denominators and uncertainty for statistics; do not manufacture audience size or social-media trends.
10. Make substantial corrections visibly and preserve the previous published record through Git history.

## Source representation

The file `research/data.json` contains these collections:

- `sources`: source ID, publisher, title, URL, event/publication/access dates when available, authentication status, reliability and notes.
- `events`: event ID and date precision, public event summary, evidence references, limitations and status.
- `public_roles`: named people acting in documented public professional or organisational capacities, dated role and source identifiers.
- `relationships`: typed public links with start date, evidence identifiers, level of confidence and inference prohibition.
- `claims`: attributed proposition, verdict where defensible, supporting or contradictory evidence and limits.
- `hypotheses`: competing explanations, supporting evidence, missing proof and confidence.
- `backlog`: unique IDs, priority, current state and the next document request.
- `coverage`: searched geography/language boundaries and data gaps.
- `registers`: currently sparse or empty financial, legal-case, organisation, comparative and corrections registers.

Source references link to independent publications, not reproduced copyrighted article text. Original external sites have their own ownership and access conditions.

### Reliability and confidence

The database's labels are provisional, evidence-dependent assessments. A publicly documented appointment can be highly certain **as a statement issued** while the nature of internal decision-making remains unknown. No person's moral standing is rated.

An unverified assertion must be *unsupported* or *unassessable*, not automatically *false*. A political or judicial allegation is not proof of wrongdoing.

## Fifteen-volume publication plan

| Volume | Topic | Current completion |
|---:|---|---|
| 1 | Origin story | Foundational report published, research incomplete |
| 2 | Chronological history | Selective initial event records; exhaustive ledger pending |
| 3 | People and public roles | Initial dated roster; dossier expansion pending |
| 4 | Organisational network | Four typed relationships; graph and broader verification pending |
| 5 | Financial picture | No first-party accounts or statutory filings verified |
| 6 | Politics and institutions | Initial AAP historical contact and Congress outreach documented |
| 7 | Digital mobilisation | Original post and account provenance pending |
| 8 | Claims and fact checks | Six initial claim assessments, non-exhaustive |
| 9 | Elections, SIR and ECI | Official source dataset and litigation review pending |
| 10 | Law, protest and public order | Reported incidents, signed documents pending |
| 11 | International comparisons | Study design; analytical historical chapters pending |
| 12 | Civil resistance and strategy | Gene Sharp primary reference, method-level analysis pending |
| 13 | External support and influence | No public transactional evidence verified in this edition |
| 14 | Competing hypotheses | Six initial hypothesis records, initial qualitative confidence |
| 15 | Final assessment | Not drafted; premature without evidence coverage |

### Immediate priorities

See the live `backlog` entries in [the research register](research/data.json). Highest priority is given to primary evidence for the origin and court documents, dated ECI registration, financing transparency, and the October legal proceedings. A state-by-state and multilingual search is a required expansion, not a completed activity.

## Updating and reviewing

- Add each new independent source once using a stable `SRC-NNN` ID.
- Reference it from events (`EVT-NNN`), named public roles (`PER-NNN`), public ties (`REL-NNN`), claims (`CLM-NNN`) and hypotheses (`HYP-NNN`).
- Prefer an atomic reviewed commit per coherent evidence batch.
- Verify JSON parses and that each cited ID refers to an existing source.
- Clearly distinguish an observed action, organiser announcement and allegation.
- Re-run date, identity, duplication and legal-stage checks before publishing.
- Create a corrections record with initial claim, source, new evidence, date, change and reviewer.

This static site requires no tracker, analytics account, database, build framework or third-party API. It loads the local JSON file from the repository.

## Corrections and right of reply

Open a GitHub Issue with the exact claim, supporting public URL, original publication date, proposed correction and relevant contradictory material. Do not share private contact details or sensitive information. Legitimate responses from organisations and named individuals acting publicly will be accurately attributed and assessed on the same evidentiary standard.

## Limitations of this edition

- The 16 May original digital post is not authenticated.
- The 15 May complete courtroom transcript / audio is not authenticated.
- The original website versions require archived verification.
- A current ECI party-register search is pending.
- A primary presidential communiqué is sourced. No signed Delhi or Goa court orders, FIR case numbers or audited CJP accounts are captured.
- SIR removal totals have not been independently calculated from official denominators.
- The 28 Indian states, 8 union territories and major regional languages have not been systematically searched.
- The comparative programme has not verified direct foreign organisational links.
- No claim of exhaustive coverage or continuous autonomous monitoring is made.

**Version 1.0.0 · Access date 19 October 2026.**
