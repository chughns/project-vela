@AGENTS.md

# Project Vela

A trip-planning service that helps people fund their dream vacations with
credit card points.

**The flow:** user submits a dream-trip intake form → pays $199 via Stripe →
receives a personalized 6–12 month plan to earn the required points using
strategic credit card applications and spending.

## Tech stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Database & auth:** Supabase _(not yet wired up)_
- **Payments:** Stripe _(not yet wired up)_
- **Email:** Resend _(not yet wired up)_
- **Hosting:** Vercel

## Routes

- `/` — landing page (hero + how it works)
- `/intake` — placeholder for the trip intake form
- `/dashboard` — placeholder for the user's plan dashboard
- `/example-plan` — placeholder showing what a finished plan looks like

## Working with Nick

Nick is building this solo on weekends and is **not a developer** — this is
his first time shipping code. When working in this repo:

- Walk through changes step by step in plain English.
- Don't chain commands silently — explain what each one does and why.
- When there's a decision point, recommend one option with the tradeoff.
- Stay scoped to the current weekend's goal. Don't sprawl into Stripe / auth /
  rules-engine work until the foundation is solid.

## Current status

**Weekend 1 — foundation only.** Goal: a deployed public URL on Vercel with
the landing page and placeholder routes. No real database, no payments, no
real auth yet.
