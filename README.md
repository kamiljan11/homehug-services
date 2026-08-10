# QuickFix — Handyman Services, Reykjavík

**Live:** [quickfix.is](https://quickfix.is) · **Status:** production · **Built by** [Kamil Jan](https://kamiljan.com)

Brand and marketing site for a Reykjavík handyman service aimed at the Polish community in
Iceland. Trilingual (English / Polish / Icelandic), because the customer and the tradesperson
often do not share a first language.

The lead product is **Deposit Saver**: when you move out of a rented flat, small damage —
scuffed parquet, a cracked wall, a broken cabinet hinge — quietly costs you your deposit. You
buy a package, someone turns up and fixes all of it. The site also sells IKEA assembly and
general small repairs.

Brand, copy and the full sales flow were shipped in 72 hours.

## What it does

- **Trilingual marketing site** (EN / PL / IS) with service pages
- **Deposit Saver landing page** — the packaged offer, priced and explained
- **Before/after gallery**
- **Floating WhatsApp contact**, because that is where the customers actually are
- **Privacy policy** page

## Stack

React + TypeScript · Vite · React Router · Tailwind CSS · Playwright for E2E · hosted on
Lovable. No database — this is a marketing site; enquiries go to WhatsApp.

## Running locally

```bash
npm install
npm run dev
```

```bash
npm run lint
npm run build
npx playwright test
```

## How security is handled

Small site, short list — but the same rules apply:

- No secrets in the repo, and nothing privileged to leak: there is no backend and no database.
- Every push runs build, lint, typecheck, Playwright E2E, Semgrep and a Gitleaks secret scan.
  A pre-commit hook blocks credential-shaped strings.
- No customer data anywhere in the repo.

## Related

A short non-technical write-up lives in
[quickfix-iceland](https://github.com/kamiljan11/quickfix-iceland).

## Licence

Proprietary. Published for reference, not for reuse.
