import { pushGameActionAPI } from "@/api/game";
import { useGameId } from "@/hooks/useGameId";
import { useGameMachine } from "@/hooks/useGameMachine";
import { GameActions } from "@/state/gameMachine";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const GameCreated = () => {
  const [url, setUrl] = useState(window.location.href);
  const { query, isReady } = useRouter();

  const gameId = useGameId();

  // game created
  useEffect(() => {
    console.log(isReady, query.gameId, query);
    if (query.action) return;
    if (!isReady) return;

    if (query.action) return;

    setUrl(`${url}?action=${GameActions.JOIN}`);
  }, [query.gameId, query.action, isReady]);

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
