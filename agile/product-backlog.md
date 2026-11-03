---
title: Product Backlog — QAMS
---

# Product Backlog — QAMS

[Back to Agile evidence](index.md)

## Evidence

**Live board:** [QR Attendance — Product Backlog list on Trello](https://trello.com/b/iQ0mXfK6/qr-attendance)

<!-- Add a screenshot of the Trello Product Backlog list here, e.g. ![Product Backlog on Trello](images/product-backlog.png) -->

The Product Backlog is ordered by priority. As Product Owner, I own the order; the team estimates effort.

**Effort:** S = under a day, M = 1–2 days, L = 3+ days

| Rank | Item | Linked story | Priority | Effort | Status |
|------|------|--------------|----------|--------|--------|
| 1 | Finalise GitHub repository | Enabler for all development | Must | S | Blocked (open since July) |
| 2 | Design the database | US-01 to US-06 | Must | L | Done |
| 3 | Determine what information must be stored in database | US-05 | Must | M | Done |
| 4 | The database should store user details | US-01 | Must | S | Done |
| 5 | The database should store QR IDs | US-02 | Must | S | Done |
| 6 | Determine how users will interact with the system | US-07 | Must | M | Done |
| 7 | Determine how user requests QR code | US-02 | Must | S | Done |
| 8 | Determine how system generates QR code | US-02 | Must | M | Done |
| 9 | System should store code in database | US-02 | Must | M | To do |
| 10 | System should verify code | US-07 | Must | M | To do |
| 11 | The database should be updated after verifying code | US-03, US-07 | Must | M | To do |
| 12 | User should receive confirmation | US-08 | Must | S | To do |
| 13 | Identify what screens are needed for the system | US-01, US-07, US-09 | Must | S | To do |
| 14 | Design and create UI wireframes | All UI stories | Must | L | To do |
| 15 | Design login page | US-01 | Must | S | To do |
| 16 | Design scan page | US-07 | Must | S | To do |
| 17 | Design dashboard | US-09 | Should | M | To do |
| 18 | Design records page | US-06 | Should | M | To do |
| 19 | Design user profile page | US-10 | Could | S | To do |
| 20 | Design settings page | US-10 | Could | S | To do |

### Backlog summary

- **Done:** 7 items (database design and QR flow decisions)
- **To do:** 12 items (QR verification logic and all UI design)
- **Blocked:** 1 item (GitHub repository), which stops coding from starting

### How the backlog is ordered

1. **Enablers first.** Nothing can be built until the repository exists, so it sits at the top.
2. **Data before screens.** The database design came before the UI because every screen depends on the data model.
3. **Core check-in flow before extras.** Generating, storing and verifying the QR code is the heart of QAMS; profile and settings pages are "could have".

---

## Reflection (STAR)

**Situation**

Our Trello board started as a single list of ideas with no order. After we chose the QR attendance idea, the list kept growing with research, design and build items mixed together.

**Task**

As Product Owner and Agile Lead, I needed to turn this into a real Product Backlog that I could prioritise and the team could pull work from.

**Action**

On 6 August I restructured the board into a Product Backlog list and separate Sprint 1 to Sprint 4 lists, with owners, dates and labels. Remaining work stayed in the Product Backlog, ordered so that enablers and data design came before screens. For this portfolio I added priority, effort and links to user stories.

**Result**

The board became much easier to read, and in October the team completed the database design items straight from the backlog. The backlog also made our main problem visible: the "Finalise GitHub repository" card had been open since July and was holding up all development. I learned that a backlog is not only a to-do list; it shows dependencies and risks, and an item that blocks everything else needs active follow-up, not just a place at the top of the list.
