import { pushGameActionAPI } from "@/api/game";
import { useGameId } from "@/hooks/useGameId";
import { useGameMachine } from "@/hooks/useGameMachine";
import { GameActions } from "@/state/gameMachine";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const GameCreated = () => {
  const [url, setUrl] = useState("");
  const { query, isReady } = useRouter();

  const gameId = useGameId();

  // game created
  useEffect(() => {
    if (!isReady) return;

    console.log(isReady, query.action);
    setUrl(`${window.location.href}?action=${GameActions.JOIN}`);
  }, [query.action, query.gameId, isReady]);

  // if someone joined
  useEffect(() => {
    if (!isReady) return;

    if (query.action === GameActions.JOIN) {
      pushGameActionAPI({ gameId, action: GameActions.JOIN });
    }
  }, [query.action, gameId, isReady]);

  return (
    <div>
      <p>Waiting for others to join</p>
      <p>Invite others to join</p>
      <br />
      {url}
    </div>
  );
};
