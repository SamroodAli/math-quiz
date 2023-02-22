import { GameQuestion } from "@/components/GameQuestion";
import { GameReady } from "@/components/GameReady";
import { PlayersWaiting } from "@/components/PlayersWaiting";
import { useGameMachine } from "@/hooks/useGameMachine";
import { useGameSSE } from "@/hooks/useGameSSE";
import { GameActions, GameStates } from "@/state/gameMachine";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const GameState = () => {
  useGameSSE();
  const router = useRouter();

  const { current, send } = useGameMachine();

  useEffect(() => {
    if (router.query.action === GameActions.JOIN) {
      send(GameActions.JOIN);
    }
  }, [router.query.action, send]);

  switch (current.value) {
    case GameStates.PLAYERS_WAITING: {
      return <PlayersWaiting />;
    }
    case GameStates.READY: {
      return <GameReady />;
    }

    case GameStates.QUESTION: {
      return <GameQuestion />;
    }
  }

  console.log(current.value);

  return <div>Invalid game state</div>;
};
