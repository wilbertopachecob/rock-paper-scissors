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

vi.mock('@/styles/App.module.scss', () => ({
  default: {
    App: 'App',
    'App-header': 'App-header',
    'top-bar': 'top-bar',
  },
}));

vi.mock('@/styles/Game.module.scss', () => ({
  default: {
    game: 'game',
    'game-buttons': 'game-buttons',
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
    animating: 'animating',
  },
}));

vi.mock('@/styles/GameResult.module.scss', () => ({
  default: {
    'game-result': 'game-result',
    title: 'title',
    choices: 'choices',
    choice: 'choice',
    'choice-rock': 'choice-rock',
    'choice-paper': 'choice-paper',
    'choice-scissors': 'choice-scissors',
    'choice-label': 'choice-label',
    'choice-name': 'choice-name',
    placeholder: 'placeholder',
    spinner: 'spinner',
    vs: 'vs',
    result: 'result',
    idle: 'idle',
    thinking: 'thinking',
    win: 'win',
    lose: 'lose',
    draw: 'draw',
    'result-text': 'result-text',
    explanation: 'explanation',
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
