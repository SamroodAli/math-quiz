import { GameQuestion } from "@/components/GameQuestion";
import { GameReady } from "@/components/GameReady";
import { GameCreated } from "@/components/GameCreated";
import { useGameMachine } from "@/hooks/useGameMachine";
import { useGameSSE } from "@/hooks/useGameSSE";
import { GameStates } from "@/state/gameMachine";
import { GameFinished } from "@/components/GameFinished";
import { GameWon } from "@/components/GameWon";

export const GameState = () => {
  useGameSSE();

  const { current } = useGameMachine();

  switch (current) {
    case GameStates.CREATED: {
      return <GameCreated />;
    }
    case GameStates.READY: {
      return <GameReady />;
    }

    case GameStates.QUESTION: {
      return <GameQuestion />;
    }

    case GameStates.LOST: {
      return <GameFinished />;
    }

    case GameStates.WON: {
      return <GameWon />;
    }
  }

  return <div>Invalid game state</div>;
};
