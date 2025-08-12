import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { GameChoice, GameResult, GameResultType } from '@/types/game';
import { useState } from 'react';
import GameResultComponent from './GameResult';

const Game: React.FC = () => {
  const [gameResult, setGameResult] = useState<GameResult>({
    playerChoice: GameChoice.ROCK,
    computerChoice: GameChoice.ROCK,
    result: GameResultType.DRAW,
    message: "It's a draw! 🤝"
  });
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handlePlayerChoice = async (choice: GameChoice) => {
    setIsAnimating(true);
    
    // Simulate animation delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const computerChoice = getRandomChoice();
    const result = determineWinner(choice, computerChoice);
    const message = getResultMessage(result);
    
    setGameResult({
      playerChoice: choice,
      computerChoice,
      result,
      message
    });
    
    setIsAnimating(false);
  };

  return (
    <div className="game">
      <p>Welcome to your Rock Paper Scissors game!</p>
      <GameResultComponent gameResult={gameResult} isAnimating={isAnimating} />
      <div className="game-buttons">
        <button 
          onClick={() => handlePlayerChoice(GameChoice.ROCK)}
          disabled={isAnimating}
          className={isAnimating ? 'animating' : ''}
        >
          <FontAwesomeIcon icon={faHandRock} />
          Rock
        </button>
        <button 
          onClick={() => handlePlayerChoice(GameChoice.PAPER)}
          disabled={isAnimating}
          className={isAnimating ? 'animating' : ''}
        >
          <FontAwesomeIcon icon={faHandPaper} />
          Paper
        </button>
        <button 
          onClick={() => handlePlayerChoice(GameChoice.SCISSORS)}
          disabled={isAnimating}
          className={isAnimating ? 'animating' : ''}
        >
          <FontAwesomeIcon icon={faHandScissors} />
          Scissors
        </button>
      </div>
    </div>
  );
};

export default Game;
