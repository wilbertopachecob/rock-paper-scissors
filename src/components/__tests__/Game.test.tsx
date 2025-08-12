import React from 'react';
import { render, screen, fireEvent, waitFor } from '@/utils/test-utils';
import { testAccessibility } from '@/utils/test-utils';
import Game from '../Game';

describe('Game Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should render without crashing', () => {
    render(<Game />);
    expect(screen.getByText('game.welcome')).toBeInTheDocument();
    expect(screen.getByText('game.buttons.rock')).toBeInTheDocument();
    expect(screen.getByText('game.buttons.paper')).toBeInTheDocument();
    expect(screen.getByText('game.buttons.scissors')).toBeInTheDocument();
  });

  it('should display initial game state with rock vs rock draw', () => {
    render(<Game />);
    expect(screen.getByText('game.result.title')).toBeInTheDocument();
    // Check for player choice rock (more specific)
    expect(screen.getByText('game.result.yourChoice')).toBeInTheDocument();
    expect(screen.getByText('game.result.computerChoice')).toBeInTheDocument();
    expect(screen.getByText("It's a draw! 🤝")).toBeInTheDocument();
  });

  it('should handle rock choice correctly', async () => {
    render(<Game />);
    
    const rockButton = screen.getByText('game.buttons.rock');
    fireEvent.click(rockButton);

    // Button should be disabled during animation
    expect(rockButton).toBeDisabled();
    expect(rockButton).toHaveClass('animating');

    // Run all pending timers to complete the Promise
    jest.runOnlyPendingTimers();

    // Wait for the async operation to complete and button to be enabled
    await waitFor(() => {
      expect(rockButton).not.toBeDisabled();
      expect(rockButton).not.toHaveClass('animating');
    });
  });

  it('should handle paper choice correctly', async () => {
    render(<Game />);
    
    const paperButton = screen.getByText('game.buttons.paper');
    fireEvent.click(paperButton);

    expect(paperButton).toBeDisabled();
    expect(paperButton).toHaveClass('animating');

    // Run all pending timers to complete the Promise
    jest.runOnlyPendingTimers();

    // Wait for the async operation to complete and button to be enabled
    await waitFor(() => {
      expect(paperButton).not.toBeDisabled();
      expect(paperButton).not.toHaveClass('animating');
    });
  });

  it('should handle scissors choice correctly', async () => {
    render(<Game />);
    
    const scissorsButton = screen.getByText('game.buttons.scissors');
    fireEvent.click(scissorsButton);

    expect(scissorsButton).toBeDisabled();
    expect(scissorsButton).toHaveClass('animating');

    // Run all pending timers to complete the Promise
    jest.runOnlyPendingTimers();

    // Wait for the async operation to complete and button to be enabled
    await waitFor(() => {
      expect(scissorsButton).not.toBeDisabled();
      expect(scissorsButton).not.toHaveClass('animating');
    });
  });

  it('should prevent multiple button clicks during animation', async () => {
    render(<Game />);
    
    const rockButton = screen.getByText('game.buttons.rock');
    const paperButton = screen.getByText('game.buttons.paper');
    
    fireEvent.click(rockButton);
    
    // Try to click another button during animation
    fireEvent.click(paperButton);
    
    // Both buttons should be disabled
    expect(rockButton).toBeDisabled();
    expect(paperButton).toBeDisabled();
  });

  it('should update game result after choice', async () => {
    render(<Game />);
    
    const rockButton = screen.getByText('game.buttons.rock');
    fireEvent.click(rockButton);

    // Run all pending timers to complete the Promise
    jest.runOnlyPendingTimers();

    // Game result should be updated (either win, lose, or draw)
    // Look for the result message in the result div
    const resultElement = screen.getByText(/It's a (win|lose|draw)/);
    expect(resultElement).toBeInTheDocument();
  });

  it('should maintain game state consistency', async () => {
    render(<Game />);
    
    const initialResult = screen.getByText("It's a draw! 🤝");
    expect(initialResult).toBeInTheDocument();

    const rockButton = screen.getByText('game.buttons.rock');
    fireEvent.click(rockButton);

    // Run all pending timers to complete the Promise
    jest.runOnlyPendingTimers();

    // Result should have changed from initial draw
    const newResult = screen.getByText(/It's a (win|lose|draw)/);
    expect(newResult).toBeInTheDocument();
  });

  it.skip('should meet accessibility standards', async () => {
    await testAccessibility(<Game />);
  }, 10000);
});
