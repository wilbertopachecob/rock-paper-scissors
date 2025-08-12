import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { GameChoice, GameResult } from '@/types/game';

interface GameResultComponentProps {
  gameResult: GameResult;
  isAnimating: boolean;
}

const GameResultComponent: React.FC<GameResultComponentProps> = ({ gameResult, isAnimating }) => {

    const getChoiceIcon = (choice: GameChoice) => {
        switch (choice) {
          case GameChoice.ROCK: return faHandRock;
          case GameChoice.PAPER: return faHandPaper;
          case GameChoice.SCISSORS: return faHandScissors;
        }
      };
  return (
    <div className={`game-result ${isAnimating ? 'animating' : ''}`}>
          <h3>Game Result</h3>
          <div className="choices">
            <div className={`choice player-choice ${gameResult.playerChoice.toLowerCase()}`}>
              <span>Your choice:</span>
              <FontAwesomeIcon icon={getChoiceIcon(gameResult.playerChoice)} />
              <span>{gameResult.playerChoice}</span>
            </div>
            <div className={`choice computer-choice ${gameResult.computerChoice.toLowerCase()}`}>
              <span>Computer choice:</span>
              <FontAwesomeIcon icon={getChoiceIcon(gameResult.computerChoice)} />
              <span>{gameResult.computerChoice}</span>
            </div>
          </div>
          <div className={`result ${gameResult.result}`}>
            {gameResult.message}
          </div>
        </div>
  )
}

export default GameResultComponent