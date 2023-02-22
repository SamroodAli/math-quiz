import { pusher } from "@/util/pusher";
import { createMachine, interpret } from "xstate";

export enum GameStates {
  CREATED = "CREATED",
  READY = "READY",
  QUESTION = "QUESTION",
  FINISHED = "FINISHED",
}

export enum GameActions {
  JOIN = "JOIN",
  START = "START",
  ANSWER = "ANSWER",
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
        [GameActions.ANSWER]: {
          target: GameStates.FINISHED,
        },
      },
    },
  },
});

export const pushGameAction = (gameId: string, action: GameActions) => {
  pusher.trigger(`game_${gameId}`, "event", { action });
};
