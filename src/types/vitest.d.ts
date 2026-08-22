/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />

import 'vitest';

declare module 'vitest' {
  interface Assertion<T = unknown> {
    toHaveNoViolations(): T;
  }
}
