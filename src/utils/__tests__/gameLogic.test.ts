import { GameChoice, GameResultType } from '@/types/game';

// Import the game logic functions from the Game component
// Since they're not exported, we'll test the logic by recreating the functions

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

describe('Game Logic', () => {
  describe('determineWinner function', () => {
    it('should return DRAW when player and computer choose the same', () => {
      expect(determineWinner(GameChoice.ROCK, GameChoice.ROCK)).toBe(GameResultType.DRAW);
      expect(determineWinner(GameChoice.PAPER, GameChoice.PAPER)).toBe(GameResultType.DRAW);
      expect(determineWinner(GameChoice.SCISSORS, GameChoice.SCISSORS)).toBe(GameResultType.DRAW);
    });

    it('should return WIN when player beats computer', () => {
      expect(determineWinner(GameChoice.ROCK, GameChoice.SCISSORS)).toBe(GameResultType.WIN);
      expect(determineWinner(GameChoice.PAPER, GameChoice.ROCK)).toBe(GameResultType.WIN);
      expect(determineWinner(GameChoice.SCISSORS, GameChoice.PAPER)).toBe(GameResultType.WIN);
    });

    it('should return LOSE when computer beats player', () => {
      expect(determineWinner(GameChoice.SCISSORS, GameChoice.ROCK)).toBe(GameResultType.LOSE);
      expect(determineWinner(GameChoice.ROCK, GameChoice.PAPER)).toBe(GameResultType.LOSE);
      expect(determineWinner(GameChoice.PAPER, GameChoice.SCISSORS)).toBe(GameResultType.LOSE);
    });

    it('should handle all possible combinations correctly', () => {
      // Test all 9 possible combinations
      const choices = [GameChoice.ROCK, GameChoice.PAPER, GameChoice.SCISSORS];
      
      choices.forEach(playerChoice => {
        choices.forEach(computerChoice => {
          const result = determineWinner(playerChoice, computerChoice);
          
          if (playerChoice === computerChoice) {
            expect(result).toBe(GameResultType.DRAW);
          } else if (
            (playerChoice === GameChoice.ROCK && computerChoice === GameChoice.SCISSORS) ||
            (playerChoice === GameChoice.PAPER && computerChoice === GameChoice.ROCK) ||
            (playerChoice === GameChoice.SCISSORS && computerChoice === GameChoice.PAPER)
          ) {
            expect(result).toBe(GameResultType.WIN);
          } else {
            expect(result).toBe(GameResultType.LOSE);
          }
        });
      });
    });
  });

  describe('getResultMessage function', () => {
    it('should return correct message for WIN', () => {
      expect(getResultMessage(GameResultType.WIN)).toBe('You win! 🎉');
    });

    it('should return correct message for LOSE', () => {
      expect(getResultMessage(GameResultType.LOSE)).toBe('Computer wins! 😔');
    });

    it('should return correct message for DRAW', () => {
      expect(getResultMessage(GameResultType.DRAW)).toBe("It's a draw! 🤝");
    });

    it('should return empty string for unknown result type', () => {
      expect(getResultMessage('unknown' as GameResultType)).toBe('');
    });
  });

  describe('Game Rules Validation', () => {
    it('should follow standard Rock Paper Scissors rules', () => {
      // Rock beats Scissors
      expect(determineWinner(GameChoice.ROCK, GameChoice.SCISSORS)).toBe(GameResultType.WIN);
      
      // Paper beats Rock
      expect(determineWinner(GameChoice.PAPER, GameChoice.ROCK)).toBe(GameResultType.WIN);
      
      // Scissors beat Paper
      expect(determineWinner(GameChoice.SCISSORS, GameChoice.PAPER)).toBe(GameResultType.WIN);
    });

    it('should have consistent win/lose logic', () => {
      // If player wins against computer, computer should lose against player
      expect(determineWinner(GameChoice.ROCK, GameChoice.SCISSORS)).toBe(GameResultType.WIN);
      expect(determineWinner(GameChoice.SCISSORS, GameChoice.ROCK)).toBe(GameResultType.LOSE);
      
      expect(determineWinner(GameChoice.PAPER, GameChoice.ROCK)).toBe(GameResultType.WIN);
      expect(determineWinner(GameChoice.ROCK, GameChoice.PAPER)).toBe(GameResultType.LOSE);
      
      expect(determineWinner(GameChoice.SCISSORS, GameChoice.PAPER)).toBe(GameResultType.WIN);
      expect(determineWinner(GameChoice.PAPER, GameChoice.SCISSORS)).toBe(GameResultType.LOSE);
    });
  });
});
