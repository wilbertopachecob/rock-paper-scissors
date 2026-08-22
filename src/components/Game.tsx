import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GameChoice, GamePhase, GameResult, GameResultType } from '@/types/game';
import GameResultComponent from './GameResult';
import ChoiceIcon from './icons/ChoiceIcon';
import { cx } from '@/utils/classNames';
import styles from '@/styles/Game.module.scss';

const THINKING_DURATION_MS = 1500;

const explanationKeyFor = (winner: GameChoice, loser: GameChoice): string => {
  if (winner === GameChoice.ROCK && loser === GameChoice.SCISSORS) return 'game.result.explain.rockScissors';
  if (winner === GameChoice.PAPER && loser === GameChoice.ROCK) return 'game.result.explain.paperRock';
  if (winner === GameChoice.SCISSORS && loser === GameChoice.PAPER) return 'game.result.explain.scissorsPaper';
  return '';
};

const Game: React.FC = () => {
  const { t } = useTranslation();
  const [phase, setPhase] = useState<GamePhase>('idle');
  const [playerChoice, setPlayerChoice] = useState<GameChoice | null>(null);
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

  const handlePlayerChoice = async (choice: GameChoice) => {
    if (phase === 'thinking') return;

    setPhase('thinking');
    setPlayerChoice(choice);

    await new Promise((resolve) => setTimeout(resolve, THINKING_DURATION_MS));

    const computerChoice = getRandomChoice();
    const result = determineWinner(choice, computerChoice);
    const message = t(`game.result.${result}`);

    const winner = result === GameResultType.WIN ? choice : result === GameResultType.LOSE ? computerChoice : null;
    const loser = result === GameResultType.WIN ? computerChoice : result === GameResultType.LOSE ? choice : null;
    const explanation = winner && loser ? t(explanationKeyFor(winner, loser)) : '';

    setGameResult({ playerChoice: choice, computerChoice, result, message, explanation });
    setPhase('result');
  };

  const isThinking = phase === 'thinking';

  return (
    <div className={styles.game}>
      <p>{t('game.welcome')}</p>
      <GameResultComponent phase={phase} playerChoice={playerChoice} gameResult={gameResult} />
      <div className={styles['game-buttons']}>
        <button
          onClick={() => handlePlayerChoice(GameChoice.ROCK)}
          disabled={isThinking}
          className={cx(styles.rock, isThinking && styles.animating)}
        >
          <ChoiceIcon choice={GameChoice.ROCK} size={30} />
          {t('game.buttons.rock')}
        </button>
        <button
          onClick={() => handlePlayerChoice(GameChoice.PAPER)}
          disabled={isThinking}
          className={cx(styles.paper, isThinking && styles.animating)}
        >
          <ChoiceIcon choice={GameChoice.PAPER} size={30} />
          {t('game.buttons.paper')}
        </button>
        <button
          onClick={() => handlePlayerChoice(GameChoice.SCISSORS)}
          disabled={isThinking}
          className={cx(styles.scissors, isThinking && styles.animating)}
        >
          <ChoiceIcon choice={GameChoice.SCISSORS} size={30} />
          {t('game.buttons.scissors')}
        </button>
      </div>
    </div>
  );
};

export default Game;
