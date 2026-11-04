---
title: Agile Team Charter — QAMS
---

# Agile Team Charter — QAMS

[Back to Agile evidence](index.md)

## Evidence

### 1. Team Purpose and Vision

- **Team mission:** Replace slow, error-prone paper attendance registers with a fast, fraud-resistant digital check-in for students, lecturers and administrators at Universities of Technology and TVET colleges, starting with CPUT as the pilot.
- **Success definition:** A working system where a lecturer starts a session, students check in by scanning a rotating QR code, duplicate or shared check-ins are blocked, and attendance can be tracked against each module's threshold. Success also means delivering every assessed artefact on time.
- **Product / Service:** QAMS — a web-based QR Code Attendance Management System (Vue.js 3 frontend, Spring Boot REST API, MySQL database).

### 2. Team Members and Roles

| Name | Role | Key Responsibilities |
|------|------|----------------------|
| Milani Ncana | Product Owner and Agile Lead / Scrum Master | Owns the product vision, prioritises the Product Backlog and accepts completed work; facilitates ceremonies, maintains the Trello board, removes blockers and keeps the logbook |
| Vuyolwethu R. Piyo | Developer | System structure, attendance-tracking rules and feature definition |
| Ross Barth | Developer | Repository setup, backend development, QR system design |
| Levi Williams | Developer | QR generation and attendance logic, system design |
| Isheanesu Chowuraya | Developer / Analyst | Requirements analysis, system structure, documentation |
| Reece Josephs | Tester / QA | Test planning, quality checks against acceptance criteria |

### 3. Ways of Working

**3.1 Agile Framework**

- [x] Scrum with one-week sprints, tracked on a Trello board (Product Backlog list plus one list per sprint)

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
- Every task lives on the Trello board with an owner and a due date, and the board is updated daily
- No pushing straight to `main`: changes go through pull requests
- We commit to continuous improvement

### 5. Communication

- **Primary channels:** WhatsApp group for day-to-day messages, Microsoft Teams for calls and ceremonies, GitHub for code and issues, and email for formal communication
- **Response-time expectations:** Messages during core hours (09:00–17:00 weekdays) answered within 2 hours; urgent blockers flagged to everyone; non-urgent items answered within 24 hours
- **Remote / hybrid norms:** Cameras on for planning, reviews and retrospectives; optional for daily stand-ups; mute when not speaking

### 6. Decision-Making

- [x] Consensus — the default for technical and process decisions
- [x] Product Owner final decision — for scope and priority disputes
- [ ] Team vote
- [ ] Agile Lead decides after input

*Escalation path if we're stuck:* discuss in stand-up, then raise it in the retrospective, then the Agile Lead calls a short decision meeting, and the lecturer is consulted as a last resort.

### 7. Definition of Done (DoD)

A piece of work is done only when:

- The code is written, compiles and runs without errors
- It has been reviewed through a pull request
- It is covered by at least one automated or documented manual test, and existing tests still pass
- The README or user documentation is updated where relevant
- The Product Owner has accepted it against its acceptance criteria
- It is merged to `main` and deployed to the agreed environment

### 8. Core Values and Behaviours

- **Respect:** respect everyone's time, input and level of experience
- **Transparency:** share progress, blockers and mistakes openly
- **Accountability:** own your commitments; if something slips, say so early
- **Trust:** assume good intent
- **Learning mindset:** treat every sprint as a chance to learn something new

### 9. Risks and Constraints

- **Known risks:** clashing assessment deadlines across subjects; uneven Git and GitHub experience; load-shedding and unstable internet; scope creep from over-ambition
- **Dependencies:** a shared GitHub repository before development can start; finalised database design and wireframes before building screens; a free hosting platform
- **Constraints:** academic timeline; zero budget (free tiers on Vercel, Render and Aiven); POPIA compliance for student data

### 10. Review and Improvement

- Charter reviewed every: [ ] Quarter [ ] Release [x] Retrospective
- Last updated: November 2026

### 11. Team Commitment

By working on this team, we commit to the principles and agreements outlined above.

| Name | Signature / Agreement |
|------|-----------------------|
| Milani Ncana | Agreed |
| Vuyolwethu R. Piyo | Agreed |
| Ross Barth | Agreed |
| Levi Williams | Agreed |
| Isheanesu Chowuraya | Agreed |
| Reece Josephs | Agreed |

---

## Reflection (STAR)

**Situation**
In July our team of six formed for the QAMS project. We had never worked together, and we had no shared rules for how often we would meet, how we would make decisions or what "done" meant.

**Task**
As Product Owner and Agile Lead, I had to get a charter in place that everyone agreed to before any real work started, so that roles and expectations were clear from day one.

**Action**
I drafted the charter from our business case and shared it in our WhatsApp group with the parts the team needed to confirm: roles, communication channels, sprint length and core hours. Team members signed it. We chose one-week sprints on Trello because our academic calendar was too short for two-week sprints, and I made sure the Definition of Done covered pull requests, testing and deployment, not just "the code works".

**Result**
The charter gave us a clear structure for the four planning sprints, and roles were never disputed. Holding both the Product Owner and Agile Lead roles taught me to keep two jobs separate: deciding what we build, and making sure the process runs. The charter did not stop every problem. When the shared repository card stayed open for weeks, I eventually set up the repository and moved into development myself. Next time I would add an agreement that any card blocked for more than one sprint is escalated at the review.
