import { useTranslation } from 'react-i18next';
import { cx } from '@/utils/classNames';
import styles from '@/styles/LanguageSwitcher.module.scss';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles['language-switcher']}>
      <button
        onClick={() => changeLanguage('en')}
        className={cx(styles['lang-btn'], i18n.language === 'en' && styles.active)}
        aria-pressed={i18n.language === 'en'}
        aria-label={t('language.english')}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={cx(styles['lang-btn'], i18n.language === 'es' && styles.active)}
        aria-pressed={i18n.language === 'es'}
        aria-label={t('language.spanish')}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
