import Game from '@/components/Game';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/App.module.scss';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <LanguageSwitcher />
        <h1>{t('game.title')}</h1>
        <Game />
      </header>
    </div>
  );
};

export default App;
