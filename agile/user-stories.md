---
title: User Stories and Tasks — QAMS
---

# User Stories and Tasks — QAMS

[Back to Agile evidence](index.md)

## Evidence

User stories follow the format **As a** [user], **I want** [goal], **so that** [benefit]. Each story has acceptance criteria and is broken into tasks. Stories US-01 to US-06 are written on the Sprint 4 cards of our Trello board; US-07 to US-10 come from the remaining Product Backlog.

**Priority key (MoSCoW):** Must have, Should have, Could have.

---

### US-01 — Secure role-based login
**Priority:** Must have | **Trello:** [Design the actual structure of the system](https://trello.com/c/T3KxyL3H)

> **As a** system user (Student, Lecturer, Admin)
> **I want** to log in securely with my institutional credentials
> **so that** I can access features specific to my assigned role.

**Acceptance criteria**

- Given valid credentials, the user is logged in and sent to the dashboard for their role
- Given invalid credentials, an error is shown and no session is created
- A student cannot open lecturer or admin pages

**Tasks**

- [ ] Design login page wireframe
- [ ] Create `User` table with role column (STUDENT, LECTURER, ADMIN)
- [ ] Build `POST /api/auth/login` endpoint that returns a JWT
- [ ] Build Vue login form and store the token
- [ ] Add route guards per role
- [ ] Write tests for valid, invalid and wrong-role logins

---

### US-02 — Rotating QR code for a class session
**Priority:** Must have | **Trello:** [Identify what the QR system will do](https://trello.com/c/ZfJoExhM)

> **As a** lecturer
> **I want** the system to generate dynamic, short-lived QR codes for my active class session
> **so that** I can display a code that keeps refreshing and students cannot share screenshots.

**Acceptance criteria**

- Starting a session shows a QR code on the lecturer's screen
- The code refreshes automatically on a fixed interval
- A token older than its validity window is rejected

**Tasks**

- [ ] Create `Session` and `QRToken` tables
- [ ] Generate signed, time-limited tokens on the server (ZXing)
- [ ] Build `POST /api/sessions` (start) and `GET /api/sessions/{id}/qr` (current code)
- [ ] Build lecturer "present" screen that polls for a new code
- [ ] Test token expiry

---

### US-03 — Prevent duplicate check-ins
**Priority:** Must have | **Trello:** [Decide the QR system will track attendance](https://trello.com/c/lGXowKl7)

> **As the** system
> **I want** to prevent duplicate check-ins for the same student in a single session
> **so that** attendance metrics stay accurate and cannot be manipulated.

**Acceptance criteria**

- A student's first valid scan in a session creates one attendance record
- A second scan in the same session returns "already checked in" and creates nothing

**Tasks**

- [ ] Add a unique constraint on (`student_id`, `session_id`) in `AttendanceRecord`
- [ ] Handle the constraint error in the check-in service
- [ ] Return a clear message to the student
- [ ] Test double-scan and concurrent-scan cases

---

### US-04 — Validate every API request
**Priority:** Must have | **Trello:** [Determine who will use the system](https://trello.com/c/QYU3AU9U)

> **As the** system
> **I want** to validate incoming API requests against the user's JWT and assigned role
> **so that** unauthorised access attempts are blocked automatically.

**Acceptance criteria**

- Requests without a valid token return 401
- Requests with a valid token but the wrong role return 403

**Tasks**

- [ ] Configure Spring Security JWT filter
- [ ] Annotate endpoints with role rules
- [ ] Test 401 and 403 responses

---

### US-05 — Data retention policy
**Priority:** Should have | **Trello:** [Determine what data needs to be stored](https://trello.com/c/QDjDVh6H)

> **As a** database administrator
> **I want** to set data lifecycle and retention policies for historical attendance records
> **so that** the database stays fast across academic terms without losing data needed for compliance.

**Acceptance criteria**

- Only data needed for attendance is stored (POPIA minimisation)
- Records older than the agreed retention period are archived

**Tasks**

- [ ] List every field to store and justify it
- [ ] Set the retention period (Product Owner decision)
- [ ] Design archive table or job

---

### US-06 — Attendance reports and export
**Priority:** Should have | **Trello:** [Determine what features are required by the QR system](https://trello.com/c/4hq7WZnH)

> **As an** administrator
> **I want** to generate attendance reports and export official class registers (CSV/PDF)
> **so that** compliance, course attendance policies and audit trails are easy to maintain.

**Acceptance criteria**

- Admin can filter by course, class and date range
- Export produces a CSV and a PDF with the same data

**Tasks**

- [ ] Design records page wireframe
- [ ] Build report query endpoint
- [ ] Add CSV and PDF export
- [ ] Test export against known data

---

### US-07 — Scan to check in
**Priority:** Must have | **Trello:** [Design scan page](https://trello.com/c/dG9Pvwze), [System should verify code](https://trello.com/c/wV8iHjcH)

> **As a** student
> **I want** to scan the QR code on screen with my phone
> **so that** my attendance is recorded in seconds without a paper register.

**Acceptance criteria**

- The scan page opens the phone camera
- A valid, unexpired code records attendance against the logged-in student

**Tasks**

- [ ] Design scan page wireframe
- [ ] Add camera scanning (vue-qrcode-reader)
- [ ] Build `POST /api/checkins` that verifies the token
- [ ] Update the database after verification

---

### US-08 — Check-in confirmation
**Priority:** Must have | **Trello:** [User should receive confirmation](https://trello.com/c/Hzd7sxqp)

> **As a** student
> **I want** to see a confirmation after I scan
> **so that** I know my attendance was recorded.

**Tasks**

- [ ] Show success, late and error states on the scan page
- [ ] Return check-in time and status from the API

---

### US-09 — Attendance dashboard
**Priority:** Should have | **Trello:** [Design dashboard](https://trello.com/c/AzIRmygc)

> **As a** student
> **I want** to see my attendance percentage per module
> **so that** I can fix it before I drop below the minimum.

**Tasks**

- [ ] Design dashboard wireframe
- [ ] Build attendance percentage endpoint
- [ ] Show a warning when close to the threshold

---

### US-10 — Profile and settings
**Priority:** Could have | **Trello:** [Design user profile page](https://trello.com/c/apA5hNpe), [Design settings page](https://trello.com/c/QlwJZ1NB)

> **As a** user
> **I want** to view my profile and change basic settings
> **so that** my details are correct.

**Tasks**

- [ ] Design profile and settings wireframes
- [ ] Build profile endpoint

---

## Reflection (STAR)

**Situation**

Early in the project our Trello cards were written as team actions, such as "Determine who will use the system" or "Identify what the QR system will do". They described what we had to figure out, but not what the user actually needed.

**Task**

We needed to turn the business case into proper user stories that a developer could build and a tester could check.

**Action**

We rewrote the key Sprint 4 cards as user stories using the "As a / I want / so that" format, starting in August and refining them in October, covering students, lecturers, administrators and the system itself. For this portfolio I added acceptance criteria and broke each story into tasks across database, API, frontend and testing.

**Result**

Writing stories this way made it obvious which features were core, such as login, rotating QR codes and duplicate prevention, and which could wait, such as profile settings. Breaking stories into tasks also showed hidden work, for example that duplicate prevention needs a database constraint, not just a check in code. I learned that a good story describes value for a user, while the tasks describe how we deliver it.
