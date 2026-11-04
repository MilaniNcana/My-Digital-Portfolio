---
title: Sprint Backlog — QAMS
---

# Sprint Backlog — QAMS

[Back to Agile evidence](index.md)

## Evidence

**Live board:** [QR Attendance — Sprint lists on Trello](https://trello.com/b/iQ0mXfK6/qr-attendance)

<!-- Add a screenshot of the Sprint 4 list here, e.g. ![Sprint 4 on Trello](images/sprint-4.png) -->

We planned QAMS in four one-week sprints on Trello (July to early August). Development then ran in three increments from late August to October, tracked in the QAMS code repository. Each sprint backlog lists the work committed to it, the owners and the status at the end.

---

### Sprint 1 — Discovery (13 – 17 July 2026)

**Sprint goal:** Generate and research project ideas.

| Card | Due | Status |
|------|-----|--------|
| Brainstorm ideas for the project | 14 Jul | Done |
| Research everyone's ideas | 15 Jul | Done |
| Gather basic information | 16 Jul | Done |
| Gather examples | 17 Jul | Done |

**Sprint outcome:** 4 of 4 cards done.

---

### Sprint 2 — Idea selection (20 – 24 July 2026)

**Sprint goal:** Present, question and compare each project idea, then choose one as a team.

| Card | Due | Status |
|------|-----|--------|
| Explain what the project idea is | 21 Jul | Done |
| Explain why the idea is a good fit for the project | 22 Jul | Done |
| Explain how to carry out the idea | 22 Jul | Done |
| Ask questions about the project ideas | 22 Jul | Done |
| Compare each project idea | 23 Jul | Done |
| Decide as a group which idea to go with | 24 Jul | Done |

**Sprint outcome:** 6 of 6 cards done. QR attendance system selected.

---

### Sprint 3 — Planning (27 – 31 July 2026)

**Sprint goal:** Agree objectives, stakeholders and a reviewed project plan, and assign project roles.

| Card | Owners | Due | Status |
|------|--------|-----|--------|
| Define objectives and success criteria | Milani | 28 Jul | Done |
| Identify stakeholders and resources | Whole team | 28 Jul | Done |
| Draft a plan | Whole team | 29 Jul | Done |
| Give feedback on plan | Whole team | 29 Jul | Done |
| Review feedback on plan | Whole team | 29 Jul | Done |
| Iterate on plan | Whole team | 30 Jul | Done |
| Identify project roles | Whole team | 31 Jul | Done |

**Sprint outcome:** 7 of 7 cards done.

---

### Sprint 4 — System design (3 – 7 August 2026)

**Sprint goal:** Define the structure of QAMS and write the core user stories so that database and UI design can begin.

| Card | User story | Owners | Status |
|------|------------|--------|--------|
| Design the actual structure of the system | US-01 Secure role-based login | Vuyolwethu, Isheanesu, Milani | Done |
| Identify what the QR system will do | US-02 Rotating QR code | Levi, Ross | Done |
| Decide the QR system will track attendance | US-03 Prevent duplicate check-ins | Vuyolwethu, Levi | Done |
| Determine who will use the system | US-04 Validate API requests | Levi, Milani | Done |
| Determine what data needs to be stored | US-05 Data retention | Milani, Ross | Done |
| Determine what features are required by the QR system | US-06 Reports and export | Whole team | Done |

**Sprint outcome:** 6 of 6 cards done. Sprint goal met.

---

### Development increments (tracked in the code repository)

The Trello board was not updated after the planning sprints, so the evidence for these increments is the commit history of the QAMS repository.

#### Increment 1 — Working core system (21 August 2026)

**Goal:** Get the full system running end to end against a real database.

| Work item | Linked story | Owner | Status |
|-----------|--------------|-------|--------|
| Set up the GitHub repository and import the system | Enabler | Milani | Done |
| Test database, backend and frontend end to end and fix the bugs found | US-01 to US-04, US-07, US-08 | Milani | Done |
| Blackboard-embeddable course check-in page | US-07 | Milani | Done |
| Log out control on the student navigation | US-01 | Milani | Done |

#### Increment 2 — Real users and deployment (15 – 17 September 2026)

**Goal:** Make the system usable by real lecturers and administrators, and put it online.

| Work item | Linked story | Owner | Status |
|-----------|--------------|-------|--------|
| Windows development scripts and setup guide | Enabler | Milani | Done |
| Admin dashboard with account management and activity tracking | US-12 | Milani | Done |
| Clear response on expired or denied tokens | US-04 | Milani | Done |
| Seed data with real student numbers and admin logins | Enabler | Milani | Done |
| Lecturer tools: modules, session restart, ad-hoc classes, manual override | US-11 | Milani | Done |
| Point the production frontend at the deployed Render backend | Enabler | Milani | Done |
| Fix camera scanning, page refresh errors and history errors | US-07, US-09 | Milani | Done |

#### Increment 3 — Hardening (30 September – 1 October 2026)

**Goal:** Make setup safe and keep the hosted database healthy.

| Work item | Linked story | Owner | Status |
|-----------|--------------|-------|--------|
| First-admin signup protected by a shared setup code | US-12 | Milani | Done |
| Daily automated database status check | Enabler | Milani | Done |

**Development outcome:** all three increment goals met; the system is deployed on Vercel, Render and Aiven.

---

## Reflection (STAR)

**Situation**
Our first four sprints were about choosing and planning a project, not writing code. After that, development had to happen around other modules and deadlines, and the shared repository the plan depended on was still not set up.

**Task**
As Agile Lead, I needed each sprint to have one clear goal and a backlog small enough to finish. Once development started, I needed to keep delivering in focused chunks instead of trying to build everything at once.

**Action**
For the planning sprints, I gave every week a single goal (discovery, idea selection, planning, system design) and only pulled cards into the sprint list that served that goal. Each card had owners and a due date, and I ran stand-ups from the board. For development, I set up the repository myself and worked in three increments, each with its own goal: get the core system working end to end, make it usable by real lecturers and admins and deploy it, then harden it.

**Result**
All four planning sprints finished every committed card, and all three development increments met their goals, ending with a deployed system. The planning sprints were easy to complete because the whole team worked on the same cards together; development was harder because it had to fit around other modules and deadlines. My main lesson is that once development started, I tracked it only in the code repository. If I did it again, I would keep running proper sprints on the Trello board during development too, so the whole team could see progress and pick up work.
