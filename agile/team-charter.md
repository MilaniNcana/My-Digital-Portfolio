---
title: Agile Team Charter — QAMS
---

# Agile Team Charter — QAMS

[Back to Agile evidence](index.md)

## Evidence

### 1. Team Purpose and Vision

- **Team mission:** Replace slow, error-prone paper attendance registers with a fast, fraud-resistant digital check-in for students, lecturers and administrators at Universities of Technology and TVET colleges, starting with CPUT as the pilot.
- **Success definition:** A working prototype where a lecturer starts a session, students check in by scanning a rotating QR code, duplicate or shared check-ins are blocked, and attendance reports can be exported. Success also means delivering every assessed artefact on time.
- **Product / Service:** QAMS — a web-based QR Code Attendance Management System (Vue.js 3 frontend, Spring Boot REST API, MySQL database).

### 2. Team Members and Roles

| Name | Role | Key Responsibilities |
|------|------|----------------------|
| Vuyolwethu R. Piyo | Developer | System structure, attendance-tracking rules and feature definition |
| Milani Ncana | Product Owner and Agile Lead / Scrum Master | Owns the product vision, prioritises the Product Backlog and accepts completed work; facilitates ceremonies, maintains the Trello board, removes blockers and keeps the logbook |
| Ross Barth | Developer | Repository setup, backend development, QR system design |
| Levi Williams | Developer | QR generation and attendance logic, system design |
| Isheanesu Chowuraya | Developer / Analyst | Requirements analysis, system structure, documentation |
| Reece Josephs | Tester / QA | Test planning, quality checks against acceptance criteria |

### 3. Ways of Working

**3.1 Agile Framework**

- [x] Kanban, run on Trello, organised into weekly sprints (Sprint 1 to Sprint 4) with a Product Backlog list

**3.2 Ceremonies**

| Ceremony | Frequency | Purpose |
|----------|-----------|---------|
| Daily Stand-up | Tuesday to Friday during sprint weeks | What I did, what I'm doing next, what is blocking me |
| Planning | Start of each weekly sprint | Pull cards from the Product Backlog into the sprint list and assign owners and dates |
| Review / Demo | End of each sprint | Show completed cards to the Product Owner for acceptance |
| Retrospective | End of each sprint | What went well, what didn't, what we change next sprint |

### 4. Working Agreements

- We show up prepared and on time
- We respect timeboxes
- We give constructive feedback
- We raise blockers early, at the stand-up, not at the deadline
- Every task lives on the Trello board with an owner and a due date
- We commit to continuous improvement

### 5. Communication
<!-- CONFIRM: check these channels match what the team actually used -->

- **Primary channels:** Group chat for day-to-day messages, Trello for all task tracking, online calls for ceremonies
- **Response-time expectations:** Reply within the same working day; urgent blockers flagged immediately in the group chat
- **Remote / hybrid norms:** Cameras on during planning and retrospectives where possible; update Trello before each stand-up

### 6. Decision-Making
<!-- CONFIRM: tick the option the team actually agreed on -->

- [x] Consensus for team-wide decisions (for example, choosing the project idea)
- [x] Product Owner final decision on scope and priority
- [ ] Team vote
- [ ] Agile Lead decides after input

*Escalation path if we're stuck:* The Agile Lead facilitates a team discussion first. If there is still no agreement, the Product Owner makes the final call on scope and priority. If it remains unresolved, we raise it with the lecturer.

### 7. Definition of Done (DoD)

A card is done only when:

- The work meets the card's description or acceptance criteria
- It has been reviewed by at least one other team member
- Tests pass (for code) or the document has been proofread (for documentation)
- Documentation and the Trello card are updated
- The Product Owner has accepted it
- Code is merged to the shared GitHub repository and deployed to the agreed environment

### 8. Core Values and Behaviours

- Respect
- Transparency
- Accountability
- Trust
- Learning mindset

### 9. Risks and Constraints

- **Known risks:** Some students may not have a smartphone; poor classroom internet; QR screenshots shared remotely; low lecturer adoption; server downtime during class
- **Dependencies:** A shared GitHub repository must be set up before development can start; finalised database design and UI wireframes are needed before building screens
- **Constraints:** Academic timeline; zero budget (free-tier hosting on Vercel and Railway/Render); POPIA compliance for student data; team members balancing other modules

### 10. Review and Improvement

- Charter reviewed every: [ ] Quarter [ ] Release [x] Retrospective
- Last updated: November 2026

### 11. Team Commitment

By working on this team, we commit to the principles and agreements outlined above.

| Name | Signature / Agreement |
|------|-----------------------|
| Vuyolwethu R. Piyo | Agreed |
| Milani Ncana | Agreed |
| Ross Barth | Agreed |
| Levi Williams | Agreed |
| Isheanesu Chowuraya | Agreed |
| Reece Josephs | Agreed |

---

## Reflection (STAR)

**Situation**

At the start of the QAMS project, our team of six had just formed and had never worked together. We had no shared rules for how often we would meet, how we would make decisions, or what "done" meant.

**Task**

As Agile Lead, I was responsible for helping the team create a charter that everyone agreed to, so that we could work together without confusion about roles and expectations.

**Action**

I took the charter template and worked through each section with the team. We agreed on roles (me as Product Owner and Agile Lead, with the developers, analyst and tester), chose Kanban on Trello, and set our ceremonies around weekly sprints. I pushed for a clear Definition of Done and the agreement that every task must be on Trello with an owner and a due date.

**Result**

The charter gave us a reference point when things got unclear. Roles were never disputed, and the Trello agreement meant I could run stand-ups directly from the board. Holding both the Product Owner and Agile Lead roles meant I had to keep two jobs separate: deciding what we build, and facilitating how the team works. The charter did not prevent every problem: our GitHub repository setup stayed blocked for weeks, which showed me that raising a blocker early is only useful if someone follows up on it. Next time I would add an agreement that any card blocked for more than one sprint is escalated at the review.
