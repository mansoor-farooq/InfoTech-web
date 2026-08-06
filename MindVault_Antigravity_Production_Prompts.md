# MindVault — Production Roadmap & Antigravity Agent Prompts
### Stack: Next.js + Node.js + Dexie(IndexedDB) + JWT Auth + Admin Panel
### Purpose: Copy-paste ready agent tasks for Google Antigravity (or any agentic coding tool)

---

## 0. Context Brief (paste this once at the start of your Antigravity session)

```
Project: MindVault — offline-first personal finance + memory app.

Existing architecture (do not break these patterns, extend them):
- Local-first: Dexie/IndexedDB stores everything instantly, works fully offline
- Sync: SyncService.ts pushes records modified since lastSyncAt to /api/sync
- Every local record has a UUID `syncId`, stored on backend as `frontend_id` — this is how
  we avoid ID collisions across devices. ALWAYS follow this pattern for any new entity.
- Auth: JWT via jwtAuth.js protects all /api/sync routes. Offline registration silently
  authenticates via /api/auth/sync-login once internet returns.
- Admin: adminAuth.js strictly isolates ADMIN/SUPER_ADMIN roles from normal users.
  All admin actions are logged to the `admin_logs` table.
- UI: Next.js frontend uses a glassmorphism design system (see app/page.tsx) — any new
  screen must visually match this aesthetic, not look like a bolted-on feature.
- Licensing: users have PRO / LIFETIME / FREE status, managed from Admin Panel.

Every feature you build must be PRODUCTION GRADE — see Section 6 (Production Standards)
for the checklist that applies to all work, not just this feature.
```

---

## 1. CRITICAL FIX FIRST — Trash / Soft-Delete System

> ⚠️ This must be done before any new feature. Right now, deleting a Note/Ledger/Udhaar/Bill
> permanently destroys data — this breaks the core trust principle of the app.

### Agent Prompt
```
Implement a full soft-delete (Trash) system across the entire MindVault app — Notes,
LedgerEntries, Udhaar, and Bills.

Requirements:
1. Add `is_deleted` (boolean, default false) and `deleted_at` (nullable timestamp) to
   every relevant table (local Dexie schema AND backend DB schema + migration).
2. Update SyncService.ts so soft-deletes sync like any other update (do NOT physically
   delete rows during sync — sync the is_deleted flag).
3. Replace every "Delete" action in the UI with a confirmation dialog, then set
   is_deleted = true, deleted_at = now() — never a hard DELETE from the UI layer.
4. Build a Trash screen (accessible from main nav) listing all soft-deleted items across
   all types, grouped by type, each with "Restore" and "Delete Forever" actions.
   "Delete Forever" requires a second confirmation ("This cannot be undone").
5. Add a background job (cron on backend, or scheduled check on app load) that
   permanently deletes items where deleted_at is older than 30 days.
6. Write tests: soft-delete sets flag correctly, restore clears it, sync propagates the
   flag correctly across two simulated devices, auto-purge only removes items past 30 days.
7. Update Admin Panel: admins should be able to see a user's trashed items for support
   purposes (read-only), logged to admin_logs if they restore something on a user's behalf.

Do NOT remove the underlying hard-delete capability entirely — keep one internal/admin-only
method for GDPR-style "erase my data" requests, but it must never be reachable from normal
user flows.
```

---

## 2. Tier 1 — Mass Adoption Features

### 2.1 Dukaan / Shop Khata Mode

**Why:** Turns MindVault from a personal app into a small-business tool — opens a much
bigger market (shopkeepers, not just individuals).

```
Build a "Shop Khata" mode as an extension of the existing Udhaar system, production grade.

Data model (new table `shop_customers`, extending existing Udhaar pattern with syncId):
- id, syncId (UUID), userId (FK), customerName, phoneNumber (optional),
  openingBalance, currentBalance, createdAt, updatedAt, isDeleted, deletedAt

New table `shop_transactions`:
- id, syncId, customerId (FK), type (CREDIT_GIVEN / PAYMENT_RECEIVED),
  amount, note, transactionDate, createdAt

Features:
1. "Switch to Shop Mode" toggle in Settings — unlocks a dedicated Shop dashboard
2. Customer list screen — search, sort by balance owed (highest first), photo/avatar
3. Customer detail screen — full transaction history (like a running ledger), running
   balance shown after each transaction (classic khata-book style)
4. Quick-add transaction: amount + type (gave credit / received payment) + optional note
5. Daily summary: total credit given today, total received today, net change
6. Printable/shareable statement per customer (generate as PDF, downloadable)
7. This must sync through the SAME SyncService.ts pipeline as everything else — extend
   the sync payload builder to include shop_customers and shop_transactions

Security: shop data is scoped strictly to userId — verify on every backend route that
the requesting user owns the customer record before allowing read/write (prevent IDOR).
```

### 2.2 WhatsApp / SMS Udhaar Reminders

```
Build an automated reminder system for Udhaar and Shop Khata dues, production grade.

Backend:
1. New table `reminder_queue`: id, userId, udhaarId/shopCustomerId, channel (WHATSAPP/SMS),
   scheduledFor, status (PENDING/SENT/FAILED), createdAt
2. Integrate WhatsApp Business API (or Twilio WhatsApp API as a starting integration) and
   an SMS gateway (e.g. Twilio SMS) as pluggable providers behind a common interface
   `NotificationProvider` so we can swap providers later without touching business logic
3. Cron job (node-cron or backend scheduler) that runs every 15 minutes, finds PENDING
   reminders due now, sends them, updates status, retries failed sends up to 3 times
   with exponential backoff, logs failures for admin visibility

Frontend:
4. In Udhaar/Shop customer detail: "Set Reminder" button — pick date + channel
5. Message template editable by user, with variables like {name}, {amount}, {dueDate}
6. Show reminder history per person (sent/pending/failed) with resend option

Compliance & Safety:
7. Require explicit opt-in before sending WhatsApp/SMS to a phone number the user adds
   (store consent timestamp) — do not auto-message numbers without consent on record
8. Rate-limit: max reminders per person per day (default 1) to avoid spam/harassment complaints
9. All provider API keys in environment variables, never hardcoded; add error handling
   for provider downtime that doesn't crash the queue processor

Write tests for: reminder scheduling, retry/backoff logic, consent gating, rate limiting.
```

### 2.3 Bill Splitting (Splitwise-style)

```
Build a bill-splitting feature, production grade, designed for viral growth (non-users
can be added by phone number and get an invite link).

Data model:
- `groups` (id, syncId, name, createdBy, createdAt)
- `group_members` (id, groupId, userId nullable, invitedPhone nullable, invitedName,
  joinedAt nullable) — invitedPhone/invitedName used when the person hasn't installed
  the app yet
- `split_expenses` (id, syncId, groupId, paidByUserId, amount, description, category,
  splitType [EQUAL/EXACT/PERCENTAGE], createdAt)
- `split_shares` (id, expenseId, memberId, shareAmount, isSettled)

Features:
1. Create group, add members by phone number (existing MindVault users auto-link;
   others get an SMS/WhatsApp invite link that deep-links into the app/install page)
2. Add expense to group → choose split type → app calculates shares automatically
3. Group balance summary: "who owes whom" simplified (debt simplification algorithm —
   minimize number of transactions needed to settle the whole group)
4. Settle up flow: mark a share as paid, optionally log it as an Udhaar entry too
5. Push notification / in-app notification when someone adds an expense to your group

This is a growth feature — the invite link flow must be frictionless: tapping it on a
phone without the app installed should go to app store / PWA install, then land the
person directly into the group they were invited to (deferred deep linking).

Security: verify group membership on every read/write; a user should never be able to
see or modify a group's expenses without being a member.
```

### 2.4 Referral System

```
Build a referral/invite system that rewards both sides, using the existing PRO/LIFETIME
licensing infrastructure.

Backend:
1. Add `referralCode` (unique, auto-generated on signup) and `referredBy` (nullable FK)
   to users table
2. New table `referral_rewards`: id, referrerId, referredUserId, rewardType
   (e.g. "1_MONTH_PRO"), status (PENDING/GRANTED), grantedAt
3. Reward trigger logic: when a referred user completes signup AND remains active for
   7 days (anti-abuse — prevents fake-account farming), grant reward to referrer via
   the existing admin license-upgrade code path (reuse it, don't duplicate logic)
4. Admin Panel: new "Referrals" tab showing top referrers, pending/granted rewards,
   and a manual override to grant/revoke a reward (logged to admin_logs)

Frontend:
5. "Invite Friends" screen: shareable link/code, WhatsApp/SMS share buttons, referral
   count + rewards earned so far, clear messaging on what both sides get
6. New-user signup flow: accept ?ref=CODE param or manual code entry, store referredBy

Abuse Prevention:
7. One referral code use per new device/phone number (basic fraud gate)
8. Reward granted only after the 7-day active-usage condition — write a scheduled job
   that checks this condition and grants pending rewards
```

---

## 3. Tier 2 — Retention Features

### 3.1 Budget Limits + Alerts
```
Add per-category monthly budget limits to the Ledger module, production grade.

- New table `budgets`: id, syncId, userId, category, monthlyLimit, month (YYYY-MM), createdAt
- Settings screen: set/edit limit per category
- Real-time check on every new expense: if category spend crosses 80%/100% of limit,
  show an in-app toast/banner AND queue a push notification
- Budget overview widget on dashboard: progress bar per category (green/yellow/red)
- Must work fully offline (calculate against local Dexie data) and sync normally
```

### 3.2 Multi-Wallet / Accounts
```
Add multiple accounts (Cash, Bank, JazzCash, EasyPaisa, etc.) to the Ledger, production grade.

- New table `accounts`: id, syncId, userId, name, type (CASH/BANK/MOBILE_WALLET),
  currentBalance, isDefault, createdAt
- Every LedgerEntry gets an `accountId` FK (nullable for backward compatibility with
  existing entries — migration must handle old data by assigning a default "Cash" account)
- Account switcher on Ledger screen; per-account balance and transaction history
- Transfer-between-accounts feature (creates a linked debit+credit pair, not a normal entry)
- Update all existing balance-calculation logic to be account-aware — audit every place
  "total balance" is computed and make sure multi-account math is correct
```

### 3.3 Savings / Financial Goals
```
Add savings goals to the app, production grade.

- New table `savings_goals`: id, syncId, userId, title, targetAmount, currentAmount,
  targetDate (nullable), createdAt, isDeleted, deletedAt (soft-delete pattern, see Section 1)
- "Add to Goal" action — either manual entry or auto-link from a Ledger income entry tagged
  as "Savings"
- Goal card with progress bar, days remaining, suggested monthly contribution to hit target
- Celebrate goal completion (confetti/animation moment — small delight detail, not just
  a plain checkmark)
```

### 3.4 Auto Weekly/Monthly Insights
```
Build an automated insights feature, production grade.

- Backend or on-device job (runs weekly) that compares this period vs previous period per
  category, flags the biggest % changes ("Food spending up 20% this week")
- Insight card feed on dashboard, 2-4 insights at a time, dismissible
- Must handle sparse-data users gracefully (new users with <2 weeks of data should not
  get broken/misleading insights — show a "not enough data yet" state instead)
```

### 3.5 Daily Logging Streaks
```
Add a gamified daily-logging streak (same concept as Study Mode streaks planned earlier),
production grade.

- Track `lastActivityDate` and `currentStreak`/`longestStreak` per user
- Streak increments once per calendar day on first note/ledger/udhaar entry, resets if a
  day is missed (grace: allow one "streak freeze" per month as a retention lever)
- Streak badge on dashboard; milestone notifications (7/30/100 days)
```

---

## 4. Tier 3 — Reach Expansion

### 4.1 Urdu Script UI Toggle
```
Add a language toggle: Roman Urdu / English / Urdu (Nastaliq script), production grade.

- Use next-i18next (or equivalent) for full i18n, not ad-hoc string replacement
- RTL layout support for Urdu script mode — audit every screen for RTL-breaking layouts
  (icons, alignment, number formatting must still be LTR for currency figures)
- Persist language choice locally and sync to user profile
```

### 4.2 Simple Invoice Generator
```
Build a basic invoice generator for freelancers/small business users, production grade.

- New table `invoices`: id, syncId, userId, clientName, items (JSON: description, qty,
  rate), taxPercent, discount, dueDate, status (DRAFT/SENT/PAID), createdAt
- Invoice builder UI, live preview, PDF export (server-side generation, e.g. via
  puppeteer or a PDF library — must render correctly with Urdu/English content)
- Shareable link + "Mark as Paid" (optionally auto-creates a Ledger income entry)
```

### 4.3 Multi-Currency Support
```
Add multi-currency support, production grade.

- Add `currency` (ISO code) to LedgerEntry and Account
- Fetch exchange rates from a reliable API (cache daily, don't call on every request)
- Dashboard totals convert everything to the user's chosen "home currency" for summary
  views while preserving original currency on individual entries
- Handle API failure gracefully (fall back to last cached rate, show a staleness warning)
```

### 4.4 Voice-Based Expense Entry
```
Extend the existing voice/AI categorization pipeline to support ledger entries, production grade.

- User says "Ali ko 500 diye" → speech-to-text → parse amount + person/category using the
  existing AI categorization service → pre-fill a LedgerEntry or Udhaar form for confirmation
  (never auto-submit without user confirming — AI assists, doesn't decide)
- Handle ambiguous parses by asking a clarifying follow-up rather than guessing silently
- Must work in both Urdu and English speech input
```

---

## 5. Production-Grade Standards (apply to EVERY feature above)

Paste this alongside any feature prompt so the agent holds itself to this bar:

```
Every feature must meet this bar before being considered done:

SECURITY
- All backend routes verify JWT and check resource ownership (no IDOR — a user must
  never read/write another user's data by guessing an ID)
- All user input validated and sanitized server-side (never trust client-side validation
  alone)
- No secrets/API keys in code — environment variables only
- Rate-limit any endpoint that sends external messages (SMS/WhatsApp/email)

DATA INTEGRITY
- Soft-delete pattern (Section 1) used for anything user-created — never a hard delete
  from a normal user action
- Every new entity follows the syncId/UUID pattern and integrates with SyncService.ts
- Database migrations are reversible and tested against existing data (no feature should
  break users who already have data in the old schema)

RELIABILITY
- Works fully offline where the feature logically allows it; syncs cleanly when back online
- Graceful error states for every network call (loading, error, empty, and success states
  — no feature ships with only the "happy path" built)
- Background jobs (cron, schedulers) have retry logic and don't crash the whole process
  on a single failure

TESTING
- Unit tests for business logic (calculations, split algorithms, streak logic, etc.)
- Integration test for at least one full flow per feature (create → sync → verify)

UI/UX
- Matches the existing glassmorphism design system — no feature should look "bolted on"
- Responsive on mobile and desktop
- Loading skeletons, not blank screens, while data fetches
- Every destructive action has a confirmation step

OBSERVABILITY
- Meaningful error logging on the backend (not just console.log — structured logs)
- Admin-visible audit trail for anything an admin can trigger on a user's behalf
```

---

## 6. Suggested Execution Order

1. **Trash/Soft-Delete fix** (Section 1) — do this before anything else, it's a trust issue
2. **Dukaan/Shop Khata Mode** (2.1) — biggest new-market unlock
3. **WhatsApp/SMS Reminders** (2.2) — pairs naturally with Shop Khata, drives habitual use
4. **Bill Splitting** (2.3) — viral growth engine
5. **Referral System** (2.4) — now that there's something worth inviting people to
6. **Multi-Wallet + Budget Limits** (3.1, 3.2) — retention layer
7. **Savings Goals + Insights + Streaks** (3.3-3.5) — deepen engagement
8. Tier 3 items (Section 4) — as reach/expansion needs arise

---

*This document is written to be fed directly into Google Antigravity (or Claude Code /
Cursor) as a sequence of agent tasks. Run one feature at a time, review the agent's plan
before it executes, and re-paste the Section 0 context brief if starting a fresh session.*
