# Design System

The UI follows a **neobrutalist** visual language: bold flat colors, thick
black borders, hard offset shadows (no blur, no gradients, no glassmorphism),
and a bold display font paired with a clean grotesque body font. It replaced
an earlier purple-gradient/glassmorphism look.

All values live as CSS custom properties in [`src/styles/tokens.scss`](src/styles/tokens.scss),
scoped to `:root`. Components consume them with `var(--token-name)` inside
their `.module.scss` files — no component hardcodes a color, size, or shadow.
[`src/styles/global.scss`](src/styles/global.scss) applies the tokens to page-level
resets (background, focus rings, selection color, reduced-motion).

## Color

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `oklch(19% 0.02 265)` | Primary text, borders, shadows |
| `--color-ink-soft` | `oklch(38% 0.02 265)` | Secondary/muted text |
| `--color-cream` | `oklch(96% 0.014 85)` | Page background |
| `--color-surface` | `oklch(99% 0.004 90)` | Card/panel background |
| `--color-neutral-box` | `oklch(94% 0.01 85)` | Unrevealed choice box |
| `--color-rock` | `oklch(74% 0.14 255)` | Rock accent |
| `--color-paper` | `oklch(80% 0.15 350)` | Paper accent |
| `--color-scissors` | `oklch(88% 0.14 95)` | Scissors accent |
| `--color-win` | `oklch(48% 0.15 145)` | Win banner |
| `--color-lose` | `oklch(50% 0.19 25)` | Lose banner |
| `--color-draw` | `oklch(46% 0.15 70)` | Draw banner |

The three choice colors share the same lightness/chroma family and only vary
in hue, so they read as one consistent set. The three outcome colors are
deliberately darker so white banner text stays legible (WCAG AA).

## Typography

- `--font-display`: `'Archivo Black'` — the game title only.
- `--font-body`: `'Space Grotesk'` — everything else (labels, buttons, results).
- A `--font-size-*` scale from `xs` (0.75rem) to `display` (a `clamp()` for the
  responsive title) covers every text size in the app; no component writes a
  raw `rem`/`px` font size.
- `--letter-spacing-*` tokens cover normal, label, and eyebrow text tracking.

Both faces are loaded via Google Fonts in [`public/index.html`](public/index.html).

## Spacing, radius, borders, shadows

- `--space-hairline` plus `--space-1` … `--space-8` (2px–32px) — all
  padding/gap values.
- `--radius-sm` … `--radius-xl`, plus `--radius-pill` for circular badges.
- `--border-width-sm` (3px) / `--border-width-md` (4px) — the two border
  weights used throughout.
- `--layout-*`, `--control-*`, `--choice-*`, and `--size-*` tokens define fixed
  panel widths, button dimensions, choice-card dimensions, and badge sizes.
- `--shadow-sm/md/lg`: hard, non-blurred offset shadows (`Npx Npx 0 var(--color-ink)`),
  the signature neobrutalist shadow. `--shadow-none` is used for the
  "pressed in" active state, where the shadow visually collapses as the
  element translates into it.

## Motion

- `--duration-fast` (150ms) for hover/active button transitions.
- `--duration-spin` (900ms) for the "computer is thinking" spinner.
- `--offset-hover-*` and `--offset-press-*` keep lift/press translations tokenized.
- Every animation is disabled under `@media (prefers-reduced-motion: reduce)`,
  applied globally in `global.scss`.

## Background pattern

`--pattern-dot-image` / `--pattern-dot-size` draw the subtle dot grid behind
the page content. It's applied on `.App` (the actual visible page surface) in
`App.module.scss`, not just on `body` — `.App` is a full-height, opaque
element, so a pattern set only on `body` would be invisible underneath it.

## Icons

Rock/Paper/Scissors are hand-drawn inline SVGs in
[`src/components/icons/ChoiceIcon.tsx`](src/components/icons/ChoiceIcon.tsx) — no
icon font/library dependency. The scissors icon is intentionally directional
(palm on the left, blades opening to the right); pass `mirrored` to flip it
with `scaleX(-1)`. The result panel always shows the player's icon un-mirrored
and the computer's mirrored, so both hands visually "face" each other across
the VS badge. `mirrored` is harmless on rock/paper since those shapes are
roughly symmetric.

## Adding a new color/size

1. Add the token to `tokens.scss` (never hardcode a value in a `.module.scss`
   file).
2. Reference it with `var(--token-name)` where needed.
3. If it's a new choice or outcome color, keep the same lightness/chroma
   family as its siblings (see the table above) so the palette stays coherent.
