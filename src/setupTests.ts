import React from 'react';
import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';

// Mock i18n for tests
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
      changeLanguage: jest.fn(),
    },
  }),
}));

// Mock FontAwesome icons
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon }: { icon: any }) => {
    // Handle different icon types: string, array, or object
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
}));

// Mock SCSS modules
jest.mock('@/styles/App.module.scss', () => ({
  App: 'App',
  'App-header': 'App-header',
}));

jest.mock('@/styles/Game.module.scss', () => ({
  game: 'game',
  'game-buttons': 'game-buttons',
  animating: 'animating',
}));

jest.mock('@/styles/GameResult.module.scss', () => ({
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
}));

jest.mock('@/styles/LanguageSwitcher.module.scss', () => ({
  'language-switcher': 'language-switcher',
  'lang-btn': 'lang-btn',
  active: 'active',
}));
