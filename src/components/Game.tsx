import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { GameChoice, GameResult, GameResultType } from '@/types/game';
import { useState } from 'react';
import GameResultComponent from './GameResult';

const Game: React.FC = () => {
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const getRandomChoice = (): GameChoice => {
    const choices = Object.values(GameChoice);
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (player: GameChoice, computer: GameChoice): GameResultType => {
    if (player === computer) return GameResultType.DRAW;
    
    if (
      (player === GameChoice.ROCK && computer === GameChoice.SCISSORS) ||
      (player === GameChoice.PAPER && computer === GameChoice.ROCK) ||
      (player === GameChoice.SCISSORS && computer === GameChoice.PAPER)
    ) {
      return GameResultType.WIN;
    }
    
    return GameResultType.LOSE;
  };

  const getResultMessage = (result: GameResultType): string => {
    switch (result) {
      case GameResultType.WIN: return 'You win! 🎉';
      case GameResultType.LOSE: return 'Computer wins! 😔';
      case GameResultType.DRAW: return "It's a draw! 🤝";
      default: return '';
    }
  };

  const handlePlayerChoice = (choice: GameChoice) => {
    const computerChoice = getRandomChoice();
    const result = determineWinner(choice, computerChoice);
    const message = getResultMessage(result);
    
    setGameResult({
      playerChoice: choice,
      computerChoice,
      result,
      message
    });
  };


  return (
    <div className="game">
      <p>Welcome to your Rock Paper Scissors game!</p>
      {gameResult && <GameResultComponent gameResult={gameResult} />}
      <div className="game-buttons">
        <button onClick={() => handlePlayerChoice(GameChoice.ROCK)}>
          <FontAwesomeIcon icon={faHandRock} />
          Rock
        </button>
        <button onClick={() => handlePlayerChoice(GameChoice.PAPER)}>
          <FontAwesomeIcon icon={faHandPaper} />
          Paper
        </button>
        <button onClick={() => handlePlayerChoice(GameChoice.SCISSORS)}>
          <FontAwesomeIcon icon={faHandScissors} />
          Scissors
        </button>
      </div>
    </div>
  );
};

export default Game;
