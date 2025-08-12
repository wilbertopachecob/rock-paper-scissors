import React from 'react';
import { render, screen } from '@/utils/test-utils';
import { testAccessibility } from '@/utils/test-utils';
import GameResultComponent from '../GameResult';
import { GameChoice, GameResultType } from '@/types/game';

const mockGameResult = {
  playerChoice: GameChoice.ROCK,
  computerChoice: GameChoice.PAPER,
  result: GameResultType.LOSE,
  message: 'Computer wins! 😔'
};

const mockDrawResult = {
  playerChoice: GameChoice.ROCK,
  computerChoice: GameChoice.ROCK,
  result: GameResultType.DRAW,
  message: "It's a draw! 🤝"
};

describe('GameResult Component', () => {
  it('should render without crashing', () => {
    render(<GameResultComponent gameResult={mockGameResult} isAnimating={false} />);
    expect(screen.getByText('game.result.title')).toBeInTheDocument();
  });

  it('should display player choice correctly', () => {
    render(<GameResultComponent gameResult={mockGameResult} isAnimating={false} />);
    expect(screen.getByText('game.result.yourChoice')).toBeInTheDocument();
    expect(screen.getByText('rock')).toBeInTheDocument();
  });

  it('should display computer choice correctly', () => {
    render(<GameResultComponent gameResult={mockGameResult} isAnimating={false} />);
    expect(screen.getByText('game.result.computerChoice')).toBeInTheDocument();
    expect(screen.getByText('paper')).toBeInTheDocument();
  });

  it('should display lose result correctly', () => {
    render(<GameResultComponent gameResult={mockGameResult} isAnimating={false} />);
    expect(screen.getByText('Computer wins! 😔')).toBeInTheDocument();
  });

  it('should display draw result correctly', () => {
    render(<GameResultComponent gameResult={mockDrawResult} isAnimating={false} />);
    expect(screen.getByText("It's a draw! 🤝")).toBeInTheDocument();
  });

  it('should apply animating class when isAnimating is true', () => {
    render(<GameResultComponent gameResult={mockGameResult} isAnimating={true} />);
    const gameResultElement = screen.getByText('game.result.title').closest('div');
    expect(gameResultElement).toHaveClass('animating');
  });

  it('should not apply animating class when isAnimating is false', () => {
    render(<GameResultComponent gameResult={mockGameResult} isAnimating={false} />);
    const gameResultElement = screen.getByText('game.result.title').closest('div');
    expect(gameResultElement).not.toHaveClass('animating');
  });

  it('should display different game choices correctly', () => {
    const paperScissorsResult = {
      playerChoice: GameChoice.PAPER,
      computerChoice: GameChoice.SCISSORS,
      result: GameResultType.LOSE,
      message: 'Computer wins! 😔'
    };

    render(<GameResultComponent gameResult={paperScissorsResult} isAnimating={false} />);
    expect(screen.getByText('paper')).toBeInTheDocument();
    expect(screen.getByText('scissors')).toBeInTheDocument();
  });

  it('should meet accessibility standards', async () => {
    await testAccessibility(<GameResultComponent gameResult={mockGameResult} isAnimating={false} />);
  });

  it('should meet accessibility standards when animating', async () => {
    await testAccessibility(<GameResultComponent gameResult={mockGameResult} isAnimating={true} />);
  });
});
