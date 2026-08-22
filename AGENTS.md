# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

A small React 19 + TypeScript Rock Paper Scissors game, bundled with Parcel.
No backend — everything is client-side state in `src/components/Game.tsx`.

## Commands

```bash
npm run dev          # start Parcel dev server at http://localhost:1234
npm run build        # production build to dist/
npm run type-check   # tsc --noEmit
npm run lint         # eslint src --ext .ts,.tsx
npm run lint:fix
npm test             # vitest run
npm run test:watch
npm run test:coverage
```

Run `type-check`, `lint`, and `test` before considering a change done —
CI-equivalent gates for this repo. Coverage thresholds (80% branches/functions/
lines/statements) are enforced in `vitest.config.ts`.

## Architecture

- `src/App.tsx` — top-level layout (language switcher + title + `Game`).
- `src/components/Game.tsx` — game state machine (`idle` → `thinking` →
  `result`) and win/lose/draw logic.
- `src/components/GameResult.tsx` — presentational result panel; renders
  whatever `phase`/`playerChoice`/`gameResult` it's given, no logic of its own.
- `src/components/icons/ChoiceIcon.tsx` — the hand-drawn rock/paper/scissors
  SVGs (see DESIGN.md for the mirroring convention).
- `src/i18n/` — `react-i18next` setup; `locales/en.json` and `locales/es.json`
  must always have the same key shape.
- `src/styles/tokens.scss` — design tokens (colors, type scale, spacing,
  radius, shadows, motion). **Never hardcode a color or size in a
  `.module.scss` file** — add or reuse a token instead. See `DESIGN.md`.
- `src/types/game.ts` — `GameChoice`, `GameResultType`, `GamePhase`, `GameResult`.

## Conventions

- **Styling**: one `.module.scss` per component, imported as `styles` and
  accessed via `styles['kebab-key']` for hyphenated names or `styles.camel`
  otherwise. No inline `style=` attributes except for genuinely per-instance
  dynamic values that can't be expressed as a class (there are currently none
  in this codebase — prefer a modifier class first).
- **Translations**: every user-facing string goes through `t('game....')` /
  `t('language....')`, never hardcoded. Add new keys to both `en.json` and
  `es.json` in the same commit.
- **Icons**: inline SVG components under `src/components/icons/`, not an icon
  font/library. Keep them stroke- or fill-based on a consistent viewBox grid.
- **State**: `Game.tsx` owns the game state machine; child components stay
  presentational (props in, JSX out).
- **Accessibility**: this app is tested with `jest-axe`
  (`testAccessibility` in `src/utils/test-utils.tsx`). Any new interactive
  element needs: a real `<button>`, visible focus state (inherited from the
  global `button:focus-visible` rule — don't suppress it), and no
  color-only signaling (pair color with text/icon). The result panel's
  live region (`aria-live="polite"`) should keep wrapping only the outcome
  banner, not the whole choices row, or screen readers will over-announce
  icon churn.
- **Tests**: `react-i18next` and every `*.module.scss` are globally mocked in
  `src/setupTests.ts` (the mocked `t()` returns the key itself). When you add
  a class name to a `.module.scss` file that a test needs to assert on
  (`toHaveClass`, etc.), add the matching key to that file's mock object too,
  or the test will see `undefined` for that class.
- **No animation without an escape hatch**: any new CSS animation/transition
  needs a `@media (prefers-reduced-motion: reduce)` override (see
  `global.scss` for the blanket rule, and `Game.module.scss`/
  `GameResult.module.scss` for per-animation overrides).

## Design system

Full rationale and token reference: [`DESIGN.md`](DESIGN.md).
