## Purpose
Short guidance for AI coding agents working in this Playwright automation repo. Focus on actionable, codebase-specific patterns, commands, and files to edit.

## Quick facts (what runs where)
- Tests live in `tests/` and are executed with Playwright Test (v1.56.x).
- The repository contains both JavaScript and TypeScript test files (e.g. `tests/example.spec.js`, `tests/test-1.spec.ts`).
- Test runner is configured in `playwright.config.js` (testDir: `./tests`, reporter: `html`, trace: `on-first-retry`).

## How to run tests (discoverable commands)
- Run the full suite: `npx playwright test`
- Run a single file: `npx playwright test tests/example.spec.js`
- Run for a specific browser/project: `npx playwright test --project=chromium`
- View the HTML report: open `playwright-report/index.html` or run `npx playwright show-report` after a test run.

Note: `package.json` currently has an empty `scripts` section; prefer using `npx playwright ...` unless you add scripts explicitly.

## Key patterns and conventions (codebase-specific)
- Tests use Playwright Test API and common helpers: `test`, `expect`, `page`, and `getByRole`. Follow patterns in `tests/example.spec.js` for locator and assertion styles.
- Config-driven behavior: `playwright.config.js` controls parallelism (`fullyParallel: true`), retries (enabled when `process.env.CI`), and reporter. Preserve these settings unless a clear reason exists.
- Mixed JS/TS: Accept both `.js` and `.ts` test files. There is no `tsconfig.json` in the repo; exercise caution when changing TypeScript-specific tooling.
- Artifacts folders present: `playwright-report/` (HTML report) and `test-results/` (test artifacts) — don't delete these; they store CI/reporting outputs.

## Files to touch for common tasks
- Add/modify tests: `tests/` (create `*.spec.js` or `*.spec.ts`). Example structure:
  - `test('description', async ({ page }) => { await page.goto(url); await expect(page).toHaveTitle(/.../); });`
- Change runner config: `playwright.config.js` (use `defineConfig` pattern already present).
- Dependency changes: `package.json` (note current `type: "commonjs"` while config and tests use `import`/`export` — avoid changing module type without validating runtime behavior).

## Integration points & external dependencies
- Playwright packages: `playwright`, `playwright-core`, `@playwright/test` (dev). Version pinning is in `package.json` (v1.56.x).
- No explicit webServer config in `playwright.config.js` — if tests require a local app, the webServer block should be added (example commented in config).

## Guidance for AI agents (do / don't)
- Do: make small, focused edits; run tests locally with `npx playwright test` to verify. Reference existing test files when adding new ones.
- Do: keep `playwright.config.js`'s observable behavior (reporter, trace, testDir, retries conditional on CI) unless the user asks to change test strategy.
- Don't: assume a TypeScript build pipeline exists (there's no `tsconfig.json` or npm scripts). If adding TypeScript support or changing `package.json`'s `type`, ask for CI/runner details or a quick test run.

## Examples (copyable snippets)
- Single test file run:
  - `npx playwright test tests/example.spec.js`
- Run only chromium tests:
  - `npx playwright test --project=chromium`

---
If any part of this file is unclear or you'd like me to expand examples (e.g., add preferred `package.json` scripts, a `tsconfig.json`, or CI steps), tell me which area to update.
