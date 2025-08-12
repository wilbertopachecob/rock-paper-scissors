import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { GameChoice, GameResult } from '@/types/game';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/GameResult.module.scss';

type GameResultComponentProps = {
  gameResult: GameResult;
  isAnimating: boolean;
};

const GameResultComponent: React.FC<GameResultComponentProps> = ({ gameResult, isAnimating }) => {
  const { t } = useTranslation();

  const getChoiceIcon = (choice: GameChoice) => {
    switch (choice) {
      case GameChoice.ROCK: return faHandRock;
      case GameChoice.PAPER: return faHandPaper;
      case GameChoice.SCISSORS: return faHandScissors;
    }
  };

  return (
    <div className={`${styles['game-result']} ${isAnimating ? styles.animating : ''}`}>
      <h3>{t('game.result.title')}</h3>
      <div className={styles.choices}>
        <div className={`${styles.choice} ${styles['player-choice']} ${styles[gameResult.playerChoice.toLowerCase()]}`}>
          <span>{t('game.result.yourChoice')}</span>
          <FontAwesomeIcon icon={getChoiceIcon(gameResult.playerChoice)} />
          <span>{gameResult.playerChoice}</span>
        </div>
        <div className={`${styles.choice} ${styles['computer-choice']} ${styles[gameResult.computerChoice.toLowerCase()]}`}>
          <span>{t('game.result.computerChoice')}</span>
          <FontAwesomeIcon icon={getChoiceIcon(gameResult.computerChoice)} />
          <span>{gameResult.computerChoice}</span>
        </div>
      </div>
      <div className={`${styles.result} ${styles[gameResult.result]}`}>
        {gameResult.message}
      </div>
    </div>
  );
};

export default GameResultComponent