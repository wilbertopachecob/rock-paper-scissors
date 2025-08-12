import React from 'react';
import { render, screen, fireEvent } from '@/utils/test-utils';
import { testAccessibility } from '@/utils/test-utils';
import LanguageSwitcher from '../LanguageSwitcher';

// Mock react-i18next
const mockChangeLanguage = jest.fn();
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
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
    expect(screen.getByText('🇺🇸 English')).toBeInTheDocument();
    expect(screen.getByText('🇪🇸 Español')).toBeInTheDocument();
  });

  it('should have English button with correct text and flag', () => {
    render(<LanguageSwitcher />);
    const englishButton = screen.getByText('🇺🇸 English');
    expect(englishButton).toBeInTheDocument();
    expect(englishButton).toHaveTextContent('🇺🇸 English');
  });

  it('should have Spanish button with correct text and flag', () => {
    render(<LanguageSwitcher />);
    const spanishButton = screen.getByText('🇪🇸 Español');
    expect(spanishButton).toBeInTheDocument();
    expect(spanishButton).toHaveTextContent('🇪🇸 Español');
  });

  it('should call changeLanguage with "en" when English button is clicked', () => {
    render(<LanguageSwitcher />);
    const englishButton = screen.getByText('🇺🇸 English');
    
    fireEvent.click(englishButton);
    
    expect(mockChangeLanguage).toHaveBeenCalledWith('en');
    expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
  });

  it('should call changeLanguage with "es" when Spanish button is clicked', () => {
    render(<LanguageSwitcher />);
    const spanishButton = screen.getByText('🇪🇸 Español');
    
    fireEvent.click(spanishButton);
    
    expect(mockChangeLanguage).toHaveBeenCalledWith('es');
    expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
  });

  it('should have clickable buttons', () => {
    render(<LanguageSwitcher />);
    const englishButton = screen.getByText('🇺🇸 English');
    const spanishButton = screen.getByText('🇪🇸 Español');
    
    expect(englishButton).toBeEnabled();
    expect(spanishButton).toBeEnabled();
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
