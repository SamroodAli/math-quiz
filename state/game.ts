import { createMachine } from "xstate";

export const gameMachine = createMachine({
  initial: "PLAYERS_WAITING",
  states: {
    PLAYERS_WAITING: {
      on: {
        JOIN: {
          target: "READY",
        },
      },
    },
    READY: {},
  },
});
