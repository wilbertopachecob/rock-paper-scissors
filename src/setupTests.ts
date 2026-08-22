import '@testing-library/jest-dom/vitest';
import { expect, vi } from 'vitest';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
      changeLanguage: vi.fn(),
    },
  }),
}));

vi.mock('@fortawesome/react-fontawesome', async () => {
  const React = await import('react');
  return {
    FontAwesomeIcon: ({ icon }: { icon: string | { iconName: string } | [string, string] }) => {
      let iconName = '';
      if (typeof icon === 'object' && icon !== null && 'iconName' in icon) {
        iconName = icon.iconName;
      } else if (typeof icon === 'string') {
        iconName = icon;
      } else if (Array.isArray(icon)) {
        iconName = icon[1] || '';
      }
      return React.createElement('span', { 'data-testid': 'icon' }, iconName);
    },
  };
});

vi.mock('@/styles/App.module.scss', () => ({
  default: {
    App: 'App',
    'App-header': 'App-header',
  },
}));

vi.mock('@/styles/Game.module.scss', () => ({
  default: {
    game: 'game',
    'game-buttons': 'game-buttons',
    animating: 'animating',
  },
}));

vi.mock('@/styles/GameResult.module.scss', () => ({
  default: {
    'game-result': 'game-result',
    choices: 'choices',
    choice: 'choice',
    'player-choice': 'player-choice',
    'computer-choice': 'computer-choice',
    result: 'result',
    win: 'win',
    lose: 'lose',
    draw: 'draw',
    animating: 'animating',
  },
}));

vi.mock('@/styles/LanguageSwitcher.module.scss', () => ({
  default: {
    'language-switcher': 'language-switcher',
    'lang-btn': 'lang-btn',
    active: 'active',
  },
}));
