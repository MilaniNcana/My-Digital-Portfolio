---
title: User Stories and Tasks — QAMS
---

# User Stories and Tasks — QAMS

[Back to Agile evidence](index.md)

## Evidence

User stories follow the format **As a** [user], **I want** [goal], **so that** [benefit]. Each story has acceptance criteria, is broken into tasks, and shows where it stands in the built system.

- US-01 to US-06 are written on the Sprint 4 cards of our [Trello board](https://trello.com/b/iQ0mXfK6/qr-attendance).
- US-07 to US-10 come from the remaining Product Backlog.
- US-11 and US-12 were added during development, when testing showed lecturers and administrators needed more control.

**Priority key (MoSCoW):** Must have, Should have, Could have.

### Delivery summary

| Story | Priority | Status |
|-------|----------|--------|
| US-01 Secure role-based login | Must | Done |
| US-02 Rotating QR code | Must | Done |
| US-03 Prevent duplicate check-ins | Must | Done |
| US-04 Validate every API request | Must | Done |
| US-05 Data retention policy | Should | Not started |
| US-06 Attendance reports and export | Should | Partly done |
| US-07 Scan to check in | Must | Done |
| US-08 Check-in confirmation | Must | Done |
| US-09 Attendance dashboard | Should | Done |
| US-10 Profile and settings | Could | Not started |
| US-11 Lecturer class management | Should | Done |
| US-12 Admin dashboard | Should | Done |

All seven "Must have" stories are delivered in the deployed system.

---

### US-01 — Secure role-based login
**Priority:** Must have | **Status:** Done | **Trello:** [Design the actual structure of the system](https://trello.com/c/T3KxyL3H)

> **As a** system user (Student, Lecturer, Admin)
> **I want** to log in securely with my institutional credentials
> **so that** I can access features specific to my assigned role.

**Acceptance criteria**

- Given valid credentials, the user is logged in and sent to the dashboard for their role
- Given invalid credentials, an error is shown and no session is created
- A student cannot open lecturer or admin pages

**Tasks**

- [x] Design login page wireframe
- [x] Create `users` table with a role column (STUDENT, LECTURER, ADMIN)
- [x] Build the login endpoint that returns a JWT
- [x] Build the Vue login form and store the token
- [x] Add route guards per role
- [x] Test valid, invalid and wrong-role logins

---

### US-02 — Rotating QR code for a class session
**Priority:** Must have | **Status:** Done | **Trello:** [Identify what the QR system will do](https://trello.com/c/ZfJoExhM)

> **As a** lecturer
> **I want** the system to generate dynamic, short-lived QR codes for my active class session
> **so that** I can display a code that keeps refreshing and students cannot share screenshots.

**Acceptance criteria**

- Starting a session shows a QR code on the lecturer's screen
- The code changes automatically every 30 seconds
- A code that has expired is rejected

**Tasks**

- [x] Create `sessions` and `qr_tokens` tables
- [x] Generate time-limited tokens on the server and render them as QR images (ZXing)
- [x] Build endpoints to start a session and fetch the current code
- [x] Build the lecturer's live session screen that refreshes the code
- [x] Write automated tests for token rotation and expiry

---

### US-03 — Prevent duplicate check-ins
**Priority:** Must have | **Status:** Done | **Trello:** [Decide the QR system will track attendance](https://trello.com/c/lGXowKl7)

> **As the** system
> **I want** to prevent duplicate check-ins for the same student in a single session
> **so that** attendance metrics stay accurate and cannot be manipulated.

**Acceptance criteria**

- A student's first valid scan in a session creates one attendance record
- A second scan in the same session is rejected and creates nothing

**Tasks**

- [x] Add a unique key on (`session_id`, `student_id`) in the attendance table
- [x] Handle the duplicate case in the check-in service
- [x] Return a clear message to the student
- [x] Test the duplicate check-in rejection end to end

---

### US-04 — Validate every API request
**Priority:** Must have | **Status:** Done | **Trello:** [Determine who will use the system](https://trello.com/c/QYU3AU9U)

> **As the** system
> **I want** to validate incoming API requests against the user's JWT and assigned role
> **so that** unauthorised access attempts are blocked automatically.

**Acceptance criteria**

- Requests without a valid token are rejected with 401
- Requests with a valid token but the wrong role are rejected with 403
- An expired token gives the user a clear response instead of failing silently

**Tasks**

- [x] Configure the Spring Security JWT filter
- [x] Add role rules to endpoints
- [x] Add a JSON response for expired tokens and denied access

---

### US-05 — Data retention policy
**Priority:** Should have | **Status:** Not started | **Trello:** [Determine what data needs to be stored](https://trello.com/c/QDjDVh6H)

> **As a** database administrator
> **I want** to set data lifecycle and retention policies for historical attendance records
> **so that** the database stays fast across academic terms without losing data needed for compliance.

**Acceptance criteria**

- Only data needed for attendance is stored (POPIA minimisation)
- Records older than the agreed retention period are archived

**Tasks**

- [x] List every field to store and justify it (done during database design)
- [ ] Set the retention period (Product Owner decision)
- [ ] Build an archive job for old records

---

### US-06 — Attendance reports and export
**Priority:** Should have | **Status:** Partly done | **Trello:** [Determine what features are required by the QR system](https://trello.com/c/4hq7WZnH)

> **As an** administrator
> **I want** to generate attendance reports and export official class registers (CSV/PDF)
> **so that** compliance, course attendance policies and audit trails are easy to maintain.

**Acceptance criteria**

- Admin can see attendance activity per user and class
- Export produces a CSV and a PDF with the same data

**Tasks**

- [x] Show attendance and activity per user on the admin dashboard
- [ ] Add CSV and PDF export
- [ ] Test export against known data

---

### US-07 — Scan to check in
**Priority:** Must have | **Status:** Done | **Trello:** [Design scan page](https://trello.com/c/dG9Pvwze), [System should verify code](https://trello.com/c/wV8iHjcH)

> **As a** student
> **I want** to scan the QR code on screen with my phone
> **so that** my attendance is recorded in seconds without a paper register.

**Acceptance criteria**

- The scan page opens the phone camera
- A valid, unexpired code records attendance against the logged-in student
- A code can also be typed in if the camera fails

**Tasks**

- [x] Design the scan page wireframe
- [x] Add camera scanning (vue-qrcode-reader)
- [x] Build the check-in endpoint that verifies the token
- [x] Update the database after verification

---

### US-08 — Check-in confirmation
**Priority:** Must have | **Status:** Done | **Trello:** [User should receive confirmation](https://trello.com/c/Hzd7sxqp)

> **As a** student
> **I want** to see a confirmation after I scan
> **so that** I know my attendance was recorded.

**Tasks**

- [x] Show success, late and error states on the scan result screen
- [x] Return check-in time and status from the API

---

### US-09 — Attendance dashboard
**Priority:** Should have | **Status:** Done | **Trello:** [Design dashboard](https://trello.com/c/AzIRmygc)

> **As a** student
> **I want** to see my attendance percentage per module
> **so that** I can fix it before I drop below the minimum.

**Tasks**

- [x] Design the dashboard wireframe
- [x] Build the attendance summary endpoint
- [x] Warn the student when a module is below its threshold

---

### US-10 — Profile and settings
**Priority:** Could have | **Status:** Not started | **Trello:** [Design user profile page](https://trello.com/c/apA5hNpe), [Design settings page](https://trello.com/c/QlwJZ1NB)

> **As a** user
> **I want** to view my profile and change basic settings
> **so that** my details are correct.

**Tasks**

- [ ] Design profile and settings screens
- [ ] Build the profile endpoint

---

### US-11 — Lecturer class management (added during development)
**Priority:** Should have | **Status:** Done

> **As a** lecturer
> **I want** to manage my modules, restart a session, schedule extra classes and correct attendance by hand
> **so that** I can run real classes without asking an administrator for help.

**Tasks**

- [x] Create, edit and delete modules
- [x] Restart a session
- [x] Schedule ad-hoc classes without a timetable
- [x] Manually override a student's attendance

---

### US-12 — Admin dashboard (added during development)
**Priority:** Should have | **Status:** Done

> **As an** administrator
> **I want** to manage user accounts and see activity across the system
> **so that** I can support students and lecturers without editing the database directly.

**Tasks**

- [x] Build account management (create, edit, deactivate users)
- [x] Show activity tracking per user
- [x] Add a secure first-admin setup with a shared setup code
- [x] Write a user guide for the dashboard

---

## Reflection (STAR)

**Situation**
Our early Trello cards were written as team actions, such as "Determine who will use the system" or "Identify what the QR system will do". They described what we had to figure out, but not what a user actually needed.

**Task**
As Product Owner, I needed user stories clear enough to build from and test against, and a way to decide what had to be in the first working version.

**Action**
We rewrote the key Sprint 4 cards as user stories in the "As a / I want / so that" format, starting in August and refining them in October. I gave each story acceptance criteria and broke it into tasks across database, API, frontend and testing. When I built the system, I worked through the "Must have" stories first. Testing with real lecturer and admin accounts showed gaps the original stories missed, so I added two new stories for lecturer class management and an admin dashboard.

**Result**
All seven "Must have" stories are delivered in the deployed system, including the rotating QR code and duplicate check-in prevention. Writing acceptance criteria first made testing straightforward: I checked each feature against them. I also learned that stories change once real users touch the system. US-11 and US-12 did not exist in the plan, and I left the data retention policy, report export and profile pages for a later release. A good story describes value for a user, the tasks describe how to deliver it, and the backlog has to stay open to new stories.
