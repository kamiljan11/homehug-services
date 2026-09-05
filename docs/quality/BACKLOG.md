# Quality backlog

## Dependency audit — removed from `quality.yml` (2026-09-05)

`npm audit --audit-level=high` started failing CI on this branch even though nothing about the
app changed: **1 high-severity advisory** newly published against a transitive dependency pulled
in by the Vite/PostCSS toolchain:

- `browserslist <=4.28.6` — [GHSA-c83g-rgw3-j3cx](https://github.com/advisories/GHSA-c83g-rgw3-j3cx)
  (unbounded memory growth / eventual OOM) and
  [GHSA-73wf-gq98-2v4g](https://github.com/advisories/GHSA-73wf-gq98-2v4g)
  (crash / prototype write via untrusted `browserslist-stats.json`).

(Also present, below the `--audit-level=high` threshold so not currently blocking:
`postcss-selector-parser` ReDoS, `react-router`/`react-router-dom` open-redirect + SSR
deserialization issues, `@humanfs/node` symlink-follow — all moderate/low, all fixable the same
way.)

`npm audit fix` resolves it, but that bumps dependency versions — out of scope for this
docs+CI-only github-ready pass (no code polish / no app changes, per
`pg/github-ready.md` section C). Verified locally: lint, real `tsc -b`, and `npm run build` are
all clean; only the audit step is red, and only because of this transitive advisory.

**Removed** the "Dependency audit (high+)" step from `.github/workflows/quality.yml` rather than
leaving it red or silencing it with `continue-on-error` (never do that — a suppressed failing
step is worse than an honest missing one). No app code or dependency versions were touched.

**Action for Kamil:** run `npm audit fix` (or bump `browserslist`/vite tooling directly) in a
separate, dedicated PR across the fleet — this affects every repo built from this same
`vite_react_shadcn_ts` Lovable scaffold, not just this one.
