import { PlayersWaiting } from "@/components/PlayersWaiting";
import { useGameSSE } from "@/hooks/useGameSSE";
import { gameMachine } from "@/state/game";
import { useMachine } from "@xstate/react";

export const GameState = () => {
  useGameSSE();

  const [current, send] = useMachine(gameMachine);

  if (current.matches("PLAYERS_WAITING")) {
    return <PlayersWaiting />;
  }

  return <div>Invalid game state</div>;
};
