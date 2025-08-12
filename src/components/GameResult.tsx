import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { GameChoice, GameResult } from '@/types/game';
import { useTranslation } from 'react-i18next';

interface GameResultComponentProps {
  gameResult: GameResult;
  isAnimating: boolean;
}

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
    <div className={`game-result ${isAnimating ? 'animating' : ''}`}>
      <h3>{t('game.result.title')}</h3>
      <div className="choices">
        <div className={`choice player-choice ${gameResult.playerChoice.toLowerCase()}`}>
          <span>{t('game.result.yourChoice')}</span>
          <FontAwesomeIcon icon={getChoiceIcon(gameResult.playerChoice)} />
          <span>{gameResult.playerChoice}</span>
        </div>
        <div className={`choice computer-choice ${gameResult.computerChoice.toLowerCase()}`}>
          <span>{t('game.result.computerChoice')}</span>
          <FontAwesomeIcon icon={getChoiceIcon(gameResult.computerChoice)} />
          <span>{gameResult.computerChoice}</span>
        </div>
      </div>
      <div className={`result ${gameResult.result}`}>
        {gameResult.message}
      </div>
    </div>
  );
};

export default GameResultComponent