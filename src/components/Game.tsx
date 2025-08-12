import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import { GameChoice, GameResult, GameResultType } from '@/types/game';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import GameResultComponent from './GameResult';
import styles from '@/styles/Game.module.scss';

const Game: React.FC = () => {
  const { t } = useTranslation();
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
      case GameResultType.WIN: return t('game.result.win');
      case GameResultType.LOSE: return t('game.result.lose');
      case GameResultType.DRAW: return t('game.result.draw');
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
    <div className={styles.game}>
      <p>{t('game.welcome')}</p>
      <GameResultComponent gameResult={gameResult} isAnimating={isAnimating} />
      <div className={styles['game-buttons']}>
        <button 
          onClick={() => handlePlayerChoice(GameChoice.ROCK)}
          disabled={isAnimating}
          className={isAnimating ? styles.animating : ''}
        >
          <FontAwesomeIcon icon={faHandRock} />
          {t('game.buttons.rock')}
        </button>
        <button 
          onClick={() => handlePlayerChoice(GameChoice.PAPER)}
          disabled={isAnimating}
          className={isAnimating ? styles.animating : ''}
        >
          <FontAwesomeIcon icon={faHandPaper} />
          {t('game.buttons.paper')}
        </button>
        <button 
          onClick={() => handlePlayerChoice(GameChoice.SCISSORS)}
          disabled={isAnimating}
          className={isAnimating ? styles.animating : ''}
        >
          <FontAwesomeIcon icon={faHandScissors} />
          {t('game.buttons.scissors')}
        </button>
      </div>
    </div>
  );
};

export default Game;
