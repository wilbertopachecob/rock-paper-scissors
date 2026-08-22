declare module 'jest-axe' {
  import type { AxeResults, RunOptions } from 'axe-core';

  export function axe(
    html: Element | Document,
    options?: RunOptions
  ): Promise<AxeResults>;

  export const toHaveNoViolations: {
    toHaveNoViolations(): { pass: boolean; message(): string };
  };
}
