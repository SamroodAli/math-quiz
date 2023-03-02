import { pushGameActionAPI } from "@/api/game";
import { GameActions } from "@/state/gameMachine";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const GameCreated = () => {
  const [url, setUrl] = useState("");
  const { query, isReady } = useRouter();

  // game created
  useEffect(() => {
    if (!isReady) return;

    if (query.action && query.action === GameActions.JOIN) {
      setTimeout(() => {
        pushGameActionAPI({
          gameId: query.gameId as string,
          action: GameActions.JOIN,
        });
      }, 1000);
      return;
    }

    setUrl(`${window.location.href}?action=${GameActions.JOIN}`);
  }, [query.gameId, query.action, isReady]);

  return (
    <div>
      <p>Waiting for others to join</p>
      <p>Invite others to join</p>
      <br />
      {url}
    </div>
  );
};
