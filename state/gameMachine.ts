import { createMachine, interpret } from "xstate";

export enum GameStates {
  PLAYERS_WAITING = "PLAYERS_WAITING",
  READY = "READY",
  QUESTION = "QUESTION",
}

export enum GameActions {
  JOIN = "JOIN",
  START = "START",
}

export const gameMachine = createMachine({
  initial: GameStates.PLAYERS_WAITING,
  states: {
    [GameStates.PLAYERS_WAITING]: {
      on: {
        [GameActions.JOIN]: {
          target: GameStates.READY,
        },
      },
    },
    [GameStates.READY]: {
      on: {
        [GameActions.START]: {
          target: GameStates.QUESTION,
        },
      },
    },
    [GameStates.QUESTION]: {},
  },
});

export const createGameState = () => {
  return interpret(gameMachine);
};
