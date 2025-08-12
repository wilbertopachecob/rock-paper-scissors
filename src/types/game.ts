export enum GameChoice {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors'
}

export interface GameResult {
  playerChoice: GameChoice;
  computerChoice: GameChoice;
  result: 'win' | 'lose' | 'draw';
  message: string;
}
