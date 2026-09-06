# Quality backlog

## Dependency audit — restored + fixed (2026-09-05, correction)

A previous pass on this branch **removed** the "Dependency audit (high+)" step from
`.github/workflows/quality.yml` after `npm audit --audit-level=high` started failing on a
transitive `browserslist` high-severity advisory. That was a gate removal, not a fix, and has
been reverted: the step is back in `quality.yml`, in the same position as the shared template
(`~/.claude/templates/repo/.github/workflows/quality.yml`).

The actual advisory is now fixed with `npm audit fix` (non-breaking, `package-lock.json` only —
`package.json` ranges untouched):

- `browserslist` `4.25.1` -> `4.28.9` — resolves
  [GHSA-c83g-rgw3-j3cx](https://github.com/advisories/GHSA-c83g-rgw3-j3cx) (unbounded memory
  growth) and [GHSA-73wf-gq98-2v4g](https://github.com/advisories/GHSA-73wf-gq98-2v4g)
  (crash / prototype write via untrusted `browserslist-stats.json`). This was the high-severity
  finding blocking `--audit-level=high`.
- `postcss-selector-parser` `6.1.2` -> `6.1.4` — resolves
  [GHSA-w9m9-85wc-3x92](https://github.com/advisories/GHSA-w9m9-85wc-3x92) (ReDoS via uncontrolled
  AST recursion), low severity.
- `@humanfs/node` `0.16.6` -> `0.16.8` — resolves
  [GHSA-p498-v437-472g](https://github.com/advisories/GHSA-p498-v437-472g) (recursive copy follows
  symlinks out of source tree), moderate severity, dev-only dependency.

**Verified locally after the fix:** `npm audit --audit-level=high` exit 0, `npm run lint` (0
errors, 9 pre-existing `react-refresh/only-export-components` warnings — unchanged from before),
`tsc -b` exit 0, `npm test -- --run` 1/1 passed, `npm run build` exit 0.

**Remaining, below the `--audit-level=high` threshold so not currently blocking CI — needs a
human decision, left in place rather than silently fixed:**

- `react-router` `6.0.0 - 7.17.0` / `react-router-dom` (same range) — moderate,
  [GHSA-wrjc-x8rr-h8h6](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6) (open redirect) +
  [GHSA-337j-9hxr-rhxg](https://github.com/advisories/GHSA-337j-9hxr-rhxg) (SSR hydration
  constructor injection). Fix requires `npm audit fix --force`, which bumps `react-router-dom` to
  `7.18.3` — a major-line jump outside the current `package.json` range, out of scope for this
  patch/minor-only correction. **Action for Kamil:** decide whether to bump `react-router-dom`
  across the fleet (same Lovable `vite_react_shadcn_ts` scaffold affects the other client repos
  in this batch too) in a dedicated PR with a routing smoke-test pass.
