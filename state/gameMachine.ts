import { pusher } from "@/util/pusher";
import { createMachine, interpret } from "xstate";

export enum GameStates {
  CREATED = "CREATED",
  READY = "READY",
  QUESTION = "QUESTION",
  LOST = "FINISHED",
  WON = "WON",
}

export enum GameActions {
  JOIN = "JOIN",
  START = "START",
  LOSE = "LOSE",
  WIN = "WIN",
}

export const gameMachine = createMachine({
  initial: GameStates.CREATED,
  context: {},
  predictableActionArguments: true,
  states: {
    [GameStates.CREATED]: {
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
    [GameStates.QUESTION]: {
      on: {
        [GameActions.LOSE]: {
          target: GameStates.LOST,
        },
        [GameActions.WIN]: {
          target: GameStates.WON,
        },
      },
    },
    [GameStates.LOST]: {},
    [GameStates.WON]: {},
  },
});

export const pushGameAction = (gameId: string, action: GameActions) => {
  return pusher.trigger(`game_${gameId}`, "event", { action });
};
