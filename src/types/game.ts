export enum GameChoice {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors'
}

export enum GameResultType {
  WIN = 'win',
  LOSE = 'lose',
  DRAW = 'draw'
}

export type GamePhase = 'idle' | 'thinking' | 'result';

export type GameResult = {
  playerChoice: GameChoice;
  computerChoice: GameChoice;
  result: GameResultType;
  message: string;
  explanation: string;
};
