import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { GameChoice, GameResult as GameResultType } from '../types/game';
import { useState } from 'react';
import GameResult from './GameResult';

const Game: React.FC = () => {
  const [gameResult, setGameResult] = useState<GameResultType | null>(null);

  const getRandomChoice = (): GameChoice => {
    const choices = Object.values(GameChoice);
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (player: GameChoice, computer: GameChoice): 'win' | 'lose' | 'draw' => {
    if (player === computer) return 'draw';
    
    if (
      (player === GameChoice.ROCK && computer === GameChoice.SCISSORS) ||
      (player === GameChoice.PAPER && computer === GameChoice.ROCK) ||
      (player === GameChoice.SCISSORS && computer === GameChoice.PAPER)
    ) {
      return 'win';
    }
    
    return 'lose';
  };

  const getResultMessage = (result: 'win' | 'lose' | 'draw'): string => {
    switch (result) {
      case 'win': return 'You win! 🎉';
      case 'lose': return 'Computer wins! 😔';
      case 'draw': return "It's a draw! 🤝";
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

  const getChoiceIcon = (choice: GameChoice) => {
    switch (choice) {
      case GameChoice.ROCK: return faHandRock;
      case GameChoice.PAPER: return faHandPaper;
      case GameChoice.SCISSORS: return faHandScissors;
      default: return faHandRock;
    }
  };
  return (
    <div className="game">
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
      <p>Welcome to your Rock Paper Scissors game!</p>
      
      {gameResult && <GameResult gameResult={gameResult} />}
    </div>
  );
};

export default Game;
