import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { GameChoice, GameResult as GameResultType } from '../types/game';

const GameResult: React.FC<{ gameResult: GameResultType }> = ({ gameResult }) => {

    const getChoiceIcon = (choice: GameChoice) => {
        switch (choice) {
          case GameChoice.ROCK: return faHandRock;
          case GameChoice.PAPER: return faHandPaper;
          case GameChoice.SCISSORS: return faHandScissors;
        }
      };
  return (
    <div className="game-result">
          <h3>Game Result</h3>
          <div className="choices">
            <div className="choice">
              <span>Your choice:</span>
              <FontAwesomeIcon icon={getChoiceIcon(gameResult.playerChoice)} />
              <span>{gameResult.playerChoice}</span>
            </div>
            <div className="choice">
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

export default GameResult