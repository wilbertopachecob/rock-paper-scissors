import React from 'react';
import { render, screen } from '@/utils/test-utils';
import { testAccessibility } from '@/utils/test-utils';
import GameResultComponent from '../GameResult';
import { GameChoice, GameResultType } from '@/types/game';

const loseResult = {
  playerChoice: GameChoice.ROCK,
  computerChoice: GameChoice.PAPER,
  result: GameResultType.LOSE,
  message: 'game.result.lose',
  explanation: 'game.result.explain.paperRock',
};

const drawResult = {
  playerChoice: GameChoice.ROCK,
  computerChoice: GameChoice.ROCK,
  result: GameResultType.DRAW,
  message: 'game.result.draw',
  explanation: '',
};

describe('GameResult Component', () => {
  it('should render without crashing', () => {
    render(<GameResultComponent phase="idle" playerChoice={null} gameResult={null} />);
    expect(screen.getByText('game.result.title')).toBeInTheDocument();
  });

  it('should show the idle prompt before a choice is made', () => {
    render(<GameResultComponent phase="idle" playerChoice={null} gameResult={null} />);
    expect(screen.getByText('game.result.idle')).toBeInTheDocument();
  });

  it('should show a thinking indicator while the computer decides', () => {
    render(<GameResultComponent phase="thinking" playerChoice={GameChoice.ROCK} gameResult={null} />);
    expect(screen.getByText('game.result.thinking')).toBeInTheDocument();
  });

  it('should reveal the player choice immediately while the computer is thinking', () => {
    render(<GameResultComponent phase="thinking" playerChoice={GameChoice.ROCK} gameResult={null} />);
    expect(screen.getAllByText('game.buttons.rock')).toHaveLength(1);
  });

  it('should display player and computer choices once resolved', () => {
    render(<GameResultComponent phase="result" playerChoice={GameChoice.ROCK} gameResult={loseResult} />);
    expect(screen.getByText('game.buttons.rock')).toBeInTheDocument();
    expect(screen.getByText('game.buttons.paper')).toBeInTheDocument();
  });

  it('should display the lose message and explanation', () => {
    render(<GameResultComponent phase="result" playerChoice={GameChoice.ROCK} gameResult={loseResult} />);
    expect(screen.getByText('game.result.lose')).toBeInTheDocument();
    expect(screen.getByText('game.result.explain.paperRock')).toBeInTheDocument();
  });

  it('should display the draw message without an explanation', () => {
    render(<GameResultComponent phase="result" playerChoice={GameChoice.ROCK} gameResult={drawResult} />);
    expect(screen.getByText('game.result.draw')).toBeInTheDocument();
    expect(screen.queryByText('game.result.explain.paperRock')).not.toBeInTheDocument();
  });

  it('should apply the animating class while thinking', () => {
    render(<GameResultComponent phase="thinking" playerChoice={GameChoice.ROCK} gameResult={null} />);
    const container = screen.getByText('game.result.title').closest('div');
    expect(container).toHaveClass('animating');
  });

  it('should not apply the animating class once resolved', () => {
    render(<GameResultComponent phase="result" playerChoice={GameChoice.ROCK} gameResult={loseResult} />);
    const container = screen.getByText('game.result.title').closest('div');
    expect(container).not.toHaveClass('animating');
  });

  it('should apply the outcome class to the result banner', () => {
    render(<GameResultComponent phase="result" playerChoice={GameChoice.ROCK} gameResult={loseResult} />);
    const banner = screen.getByText('game.result.lose').closest('div');
    expect(banner).toHaveClass('lose');
  });

  it('should meet accessibility standards in the idle state', async () => {
    await testAccessibility(<GameResultComponent phase="idle" playerChoice={null} gameResult={null} />);
  });

  it('should meet accessibility standards while thinking', async () => {
    await testAccessibility(<GameResultComponent phase="thinking" playerChoice={GameChoice.ROCK} gameResult={null} />);
  });

  it('should meet accessibility standards when resolved', async () => {
    await testAccessibility(<GameResultComponent phase="result" playerChoice={GameChoice.ROCK} gameResult={loseResult} />);
  });
});
