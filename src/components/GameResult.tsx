import { useTranslation } from 'react-i18next';
import { GameChoice, GamePhase, GameResult } from '@/types/game';
import ChoiceIcon from './icons/ChoiceIcon';
import { cx } from '@/utils/classNames';
import styles from '@/styles/GameResult.module.scss';

type GameResultComponentProps = {
  phase: GamePhase;
  playerChoice: GameChoice | null;
  gameResult: GameResult | null;
};

const Spinner: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    className={styles.spinner}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.6}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M12 3a9 9 0 1 1-6.36 2.64" />
  </svg>
);

const WinIcon: React.FC = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M8 12.5l2.5 2.5L16 9.5" />
  </svg>
);

const LoseIcon: React.FC = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M9 9l6 6M15 9l-6 6" />
  </svg>
);

const DrawIcon: React.FC = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M8 10h8M8 14h8" />
  </svg>
);

type ChoiceBoxProps = {
  label: string;
  choice: GameChoice | null;
  showPlaceholder: boolean;
  showSpinner: boolean;
  mirrored: boolean;
};

const ChoiceBox: React.FC<ChoiceBoxProps> = ({ label, choice, showPlaceholder, showSpinner, mirrored }) => {
  const { t } = useTranslation();

  return (
    <div className={cx(styles.choice, choice && styles[`choice-${choice}`])}>
      <span className={styles['choice-label']}>{label}</span>
      {showPlaceholder && (
        <span className={styles.placeholder} aria-hidden="true">
          ?
        </span>
      )}
      {showSpinner && <Spinner size={30} />}
      {choice && <ChoiceIcon choice={choice} size={34} mirrored={mirrored} />}
      <span className={styles['choice-name']}>{choice ? t(`game.buttons.${choice}`) : ''}</span>
    </div>
  );
};

const GameResultComponent: React.FC<GameResultComponentProps> = ({ phase, playerChoice, gameResult }) => {
  const { t } = useTranslation();
  const computerChoice = phase === 'result' ? gameResult?.computerChoice ?? null : null;

  return (
    <div className={cx(styles['game-result'], phase === 'thinking' && styles.animating)}>
      <h2 className={styles.title}>{t('game.result.title')}</h2>

      <div className={styles.choices}>
        <ChoiceBox
          label={t('game.result.you')}
          choice={playerChoice}
          showPlaceholder={phase === 'idle'}
          showSpinner={false}
          mirrored={false}
        />
        <div className={styles.vs} aria-hidden="true">
          VS
        </div>
        <ChoiceBox
          label={t('game.result.computer')}
          choice={computerChoice}
          showPlaceholder={phase === 'idle'}
          showSpinner={phase === 'thinking'}
          mirrored
        />
      </div>

      <div aria-live="polite" aria-atomic="true">
        {phase === 'idle' && <div className={cx(styles.result, styles.idle)}>{t('game.result.idle')}</div>}
        {phase === 'thinking' && (
          <div className={cx(styles.result, styles.thinking)}>
            <Spinner size={20} />
            {t('game.result.thinking')}
          </div>
        )}
        {phase === 'result' && gameResult && (
          <div className={cx(styles.result, styles[gameResult.result])}>
            {gameResult.result === 'win' && <WinIcon />}
            {gameResult.result === 'lose' && <LoseIcon />}
            {gameResult.result === 'draw' && <DrawIcon />}
            <span className={styles['result-text']}>
              <span>{gameResult.message}</span>
              {gameResult.explanation && <span className={styles.explanation}>{gameResult.explanation}</span>}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameResultComponent;
