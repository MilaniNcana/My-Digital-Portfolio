---
title: Agile Logbook — QAMS
---

# Agile Logbook — QAMS

[Back to Agile evidence](index.md)

## Evidence

**Kept by:** Milani Ncana (Product Owner and Agile Lead / Scrum Master)

**Source:** Planning entries are dated from card start, due and completion dates on our [Trello board](https://trello.com/b/iQ0mXfK6/qr-attendance). Development entries are dated from the commit history of the QAMS code repository. Full weekly and monthly logbooks were also submitted in the PRP37XS Word template.

<!-- Optional: link the Word logbooks here once uploaded to the repo, e.g. [Week 14–17 July (Word)](docs/logbook-14-17-jul.docx) -->

---

### Week 1 — Sprint 1: Discovery (14 – 17 July 2026)

**Sprint planning:** Goal set to generate and research project ideas. Four cards created and assigned to the whole team.

| Day | Stand-up focus | Done |
|-----|----------------|------|
| Tue 14 Jul | Share brainstormed ideas | Brainstorm ideas for the project |
| Wed 15 Jul | Research each member's idea | Research everyone's ideas |
| Thu 16 Jul | Collect basic facts for each idea | Gather basic information |
| Fri 17 Jul | Find existing examples of each idea | Gather examples |

**Blockers:** None recorded.

**Review:** 4 of 4 cards done. Each member's idea was researched and backed with basic information and examples.

**Retrospective:** Good participation from everyone. Ideas needed a common way to compare them, which shaped Sprint 2.

---

### Week 2 — Sprint 2: Idea selection (21 – 24 July 2026)

**Sprint planning:** Goal set to present, question, compare and choose one idea.

| Day | Stand-up focus | Done |
|-----|----------------|------|
| Tue 21 Jul | Each member explains their idea | Explain what the project idea is |
| Wed 22 Jul | Fit, feasibility and open questions | Explain why the idea is a good fit; Explain how to carry out the idea; Ask questions about the project ideas |
| Thu 23 Jul | Side-by-side comparison | Compare each project idea |
| Fri 24 Jul | Team decision | Decide as a group which idea to go with |

**Blockers:** None recorded.

**Review:** 6 of 6 cards done. Team chose the QR Code Attendance Management System because it solves a problem we experience, needs no extra hardware and fits our skills.

**Retrospective:** Comparing ideas against the same questions made the decision quick and fair. Next: turn the idea into a plan.

---

### Week 3 — Sprint 3: Planning (28 – 31 July 2026)

**Sprint planning:** Goal set to agree objectives, stakeholders, a reviewed plan and team roles. "Finalise GitHub repository" card created and assigned to Ross (25 July).

| Day | Stand-up focus | Done |
|-----|----------------|------|
| Tue 28 Jul | Objectives, success criteria, stakeholders | Define objectives and success criteria; Identify stakeholders and resources |
| Wed 29 Jul | Draft plan and review it | Draft a plan; Give feedback on plan; Review feedback on plan |
| Thu 30 Jul | Update plan from feedback | Iterate on plan |
| Fri 31 Jul | Assign roles | Identify project roles |

**Blockers:** GitHub repository not yet set up.

**Review:** 7 of 7 cards done. Roles confirmed: Product Owner, Agile Lead, developers, analyst and tester.

**Retrospective:** The feedback loop on the plan improved it. Action: follow up on the repository card.

---

### Week 4 — Sprint 4: System design (4 – 7 August 2026)

**Sprint planning:** Goal set to define the system structure and write core user stories. Board restructured on 6 August into a Product Backlog list plus Sprint 1–4 lists with owners, dates and labels.

| Day | Stand-up focus | Done |
|-----|----------------|------|
| Tue 4 Aug | System structure and login | Design the actual structure of the system (US-01) |
| Wed 5 – Thu 6 Aug | QR behaviour, attendance rules, users, data and features | Identify what the QR system will do (US-02); Decide the QR system will track attendance (US-03); Determine who will use the system (US-04); Determine what data needs to be stored (US-05); Determine what features are required by the QR system (US-06). All marked complete on the board by 6 Aug. |
| Fri 7 Aug | Sprint review and retrospective | Sprint 4 closed |

**Blockers:** GitHub repository still not finalised; database design not yet finalised.

**Review:** 6 of 6 cards done. Core user stories now on the board. Figma wireframes produced for the student mobile flow (login, dashboard, scan, scan result, history) and the lecturer desktop flow.

**Retrospective:** Restructuring Trello made progress visible to everyone. Action: finalise the database design; the repository must be resolved before development can start.

---

### Development — 21 August 2026: working core system

**Goal:** Get the full system running end to end against a real database.

**Done:** Set up the QAMS GitHub repository and imported the system. Tested the database, backend and frontend end to end and fixed the bugs found: a seed password that could not log in, schema columns that did not match the code, errors when loading attendance history, and a broken QR image on the lecturer's live screen. Added a Blackboard-embeddable check-in page and a log out control.

**Blocker resolved:** The repository blocker from Weeks 3 and 4 is cleared; development can proceed.

---

### Development — 15 to 17 September 2026: real users and deployment

**Goal:** Make the system usable by real lecturers and administrators, and put it online.

**Done:** Added Windows setup scripts and a setup guide. Built the admin dashboard with account management and activity tracking. Fixed expired tokens failing silently. Loaded seed data with real student numbers and admin logins. Added lecturer tools: module management, session restart, ad-hoc classes and manual attendance override. Deployed the frontend on Vercel, pointed it at the backend on Render, and fixed camera scanning and page refresh errors found on the live site.

**Retrospective:** Testing with real accounts showed needs the plan had missed, which became two new user stories (US-11 and US-12).

---

### Development — 30 September to 1 October 2026: hardening

**Done:** Protected the first-admin signup with a shared setup code. Added a daily automated check on the Aiven-hosted database.

---

### Board update — 27 October 2026

The database design and QR-flow cards were marked complete on Trello, catching the board up with work already done in the code. The remaining Trello cards (QR verification, confirmation and UI design) were never updated, although that work is finished in the deployed system.

---

## Reflection (STAR)

**Situation**
As Agile Lead I kept a weekly logbook of our stand-ups, planning, reviews and retrospectives, first through four planning sprints on Trello and then through development in the code repository.

**Task**
The logbook had to be an honest record of what actually happened each week, so it could be used to track progress, spot problems and serve as evidence.

**Action**
My first draft of an early entry described more progress than we had actually made. When I checked it against the Trello board, the board showed we were still planning, so I rebuilt the July and August entries from card start, due and completion dates. For development, the board was no longer being updated, so I used the commit history of the code repository instead. Each entry records the goal, what was done, blockers, the review and one retrospective action.

**Result**
The logbook now matches the evidence, which makes it trustworthy. Reading the entries in order also shows a pattern I might have missed week to week: the repository blocker appears from Week 3 until I cleared it on 21 August. I learned two things. A logbook is only worth something when it is grounded in real data, not in what the work should look like. And a blocker that appears in several entries in a row is a signal to act, not just to note again.
