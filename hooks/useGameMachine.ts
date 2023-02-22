import { gameMachine } from "@/state/gameMachine";
import { useMachine } from "@xstate/react";

export const useGameMachine = () => {
  const [current, send] = useMachine(gameMachine);

  return { current, send };
};
