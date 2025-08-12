import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/LanguageSwitcher.module.scss';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles['language-switcher']}>
      <button
        onClick={() => changeLanguage('en')}
        className={`${styles['lang-btn']} ${i18n.language === 'en' ? styles.active : ''}`}
      >
        🇺🇸 English
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`${styles['lang-btn']} ${i18n.language === 'es' ? styles.active : ''}`}
      >
        🇪🇸 Español
      </button>
    </div>
  );
};

export default LanguageSwitcher;
