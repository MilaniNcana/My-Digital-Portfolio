---
title: Product Backlog — QAMS
---

# Product Backlog — QAMS

[Back to Agile evidence](index.md)

## Evidence

**Live board:** [QR Attendance — Product Backlog list on Trello](https://trello.com/b/iQ0mXfK6/qr-attendance)

<!-- Add a screenshot of the Trello Product Backlog list here, e.g. ![Product Backlog on Trello](images/product-backlog.png) -->

The Product Backlog is ordered by priority. As Product Owner, I own the order; effort is estimated per item.

**Effort:** S = under a day, M = 1–2 days, L = 3+ days

The "Status" column shows where each item ended up. Items finished during development are marked "Done (code)" because they were completed in the QAMS code repository after the Trello board stopped being updated in August.

| Rank | Item | Linked story | Priority | Effort | Status |
|------|------|--------------|----------|--------|--------|
| 1 | Finalise GitHub repository | Enabler for all development | Must | S | Done (code) — repository set up 21 Aug |
| 2 | Design the database | US-01 to US-06 | Must | L | Done |
| 3 | Determine what information must be stored in database | US-05 | Must | M | Done |
| 4 | The database should store user details | US-01 | Must | S | Done |
| 5 | The database should store QR IDs | US-02 | Must | S | Done |
| 6 | Determine how users will interact with the system | US-07 | Must | M | Done |
| 7 | Determine how user requests QR code | US-02 | Must | S | Done |
| 8 | Determine how system generates QR code | US-02 | Must | M | Done |
| 9 | System should store code in database | US-02 | Must | M | Done (code) |
| 10 | System should verify code | US-07 | Must | M | Done (code) |
| 11 | The database should be updated after verifying code | US-03, US-07 | Must | M | Done (code) |
| 12 | User should receive confirmation | US-08 | Must | S | Done (code) |
| 13 | Identify what screens are needed for the system | US-01, US-07, US-09 | Must | S | Done |
| 14 | Design and create UI wireframes | All UI stories | Must | L | Done — Figma, Aug |
| 15 | Design login page | US-01 | Must | S | Done (code) |
| 16 | Design scan page | US-07 | Must | S | Done (code) |
| 17 | Design dashboard | US-09 | Should | M | Done (code) |
| 18 | Design records page | US-06 | Should | M | Partly done — history and admin activity built; export not yet |
| 19 | Design user profile page | US-10 | Could | S | Not started |
| 20 | Design settings page | US-10 | Could | S | Not started |

**Added during development**

| Item | Linked story | Priority | Status |
|------|--------------|----------|--------|
| Lecturer tools: module management, session restart, ad-hoc classes, manual attendance override | US-11 | Should | Done (code), 16 Sep |
| Admin dashboard with account management and activity tracking | US-12 | Should | Done (code), 16 Sep |
| Deploy: frontend on Vercel, API on Render, database on Aiven | Enabler | Must | Done (code), 17 Sep |
| Daily automated database status check | Enabler | Could | Done (code), 1 Oct |

### Backlog summary

- **Done:** 17 of the original 20 items, plus all 4 items added during development
- **Partly done:** 1 (records page: report export still to build)
- **Not started:** 2 "Could have" items (profile and settings pages); the retention policy (US-05) is also still open

### How the backlog was ordered

1. **Enablers first.** Nothing could be built until the repository existed, so it sat at the top.
2. **Data before screens.** Database design came before the UI because every screen depends on the data model.
3. **Core check-in flow before extras.** Generating, storing and verifying the QR code is the heart of QAMS; profile and settings pages are "Could have".

---

## Reflection (STAR)

**Situation**
Our Trello board started as one unordered list of ideas. After we chose QAMS it kept growing, with research, design and build items mixed together, and the repository card that every development item depended on stayed open for weeks.

**Task**
As Product Owner, I had to turn this into a real Product Backlog: ordered by value and dependency, and something work could actually be pulled from.

**Action**
On 6 August I restructured the board into a Product Backlog list and Sprint 1 to 4 lists, with owners, dates and labels. I ordered the backlog so that enablers and data design came first and screens came after. When the repository was still not set up by late August, I set it up myself on 21 August and worked down the backlog in priority order, starting with the check-in flow. As testing exposed new needs, I added items for lecturer tools, an admin dashboard and deployment.

**Result**
17 of the 20 original items are done, and every "Must have" item is in the deployed system. The main thing I would change is how I kept the board. Once development started, I tracked progress in the code repository and stopped updating Trello, so the board still shows items as open that are actually finished. I learned that a backlog is only useful as evidence if it stays in sync with the work, and that an item blocking everything else needs someone to act, not just a place at the top of the list.
