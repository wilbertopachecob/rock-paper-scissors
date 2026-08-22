import React from 'react';
import { vi } from 'vitest';
import { render, screen, fireEvent } from '@/utils/test-utils';
import { testAccessibility } from '@/utils/test-utils';
import LanguageSwitcher from '../LanguageSwitcher';

const { mockChangeLanguage } = vi.hoisted(() => ({
  mockChangeLanguage: vi.fn(),
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
      changeLanguage: mockChangeLanguage,
    },
  }),
}));

describe('LanguageSwitcher Component', () => {
  beforeEach(() => {
    mockChangeLanguage.mockClear();
  });

  it('should render without crashing', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('ES')).toBeInTheDocument();
  });

  it('should mark the active language as pressed', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText('EN')).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('ES')).toHaveAttribute('aria-pressed', 'false');
  });

  it('should label each button with its full language name', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByLabelText('language.english')).toBeInTheDocument();
    expect(screen.getByLabelText('language.spanish')).toBeInTheDocument();
  });

  it('should call changeLanguage with "en" when the English button is clicked', () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByText('EN'));

    expect(mockChangeLanguage).toHaveBeenCalledWith('en');
    expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
  });

  it('should call changeLanguage with "es" when the Spanish button is clicked', () => {
    render(<LanguageSwitcher />);

    fireEvent.click(screen.getByText('ES'));

    expect(mockChangeLanguage).toHaveBeenCalledWith('es');
    expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
  });

  it('should have clickable buttons', () => {
    render(<LanguageSwitcher />);

    expect(screen.getByText('EN')).toBeEnabled();
    expect(screen.getByText('ES')).toBeEnabled();
  });

  it('should meet accessibility standards', async () => {
    await testAccessibility(<LanguageSwitcher />);
  });

  it('should have proper button roles', () => {
    render(<LanguageSwitcher />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});
