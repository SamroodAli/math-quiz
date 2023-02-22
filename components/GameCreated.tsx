import { pushGameActionAPI } from "@/api/game";
import { useGameId } from "@/hooks/useGameId";
import { useGameMachine } from "@/hooks/useGameMachine";
import { GameActions } from "@/state/gameMachine";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const GameCreated = () => {
  const [url, setUrl] = useState("");
  const { query } = useRouter();

  const router = useRouter();
  const { send } = useGameMachine();
  const gameId = useGameId();

  // game created
  useEffect(() => {
    setUrl(`${window.location.href}?action=${GameActions.JOIN}`);
  }, [query.gameId]);

  // if someone joined
  useEffect(() => {
    if (router.query.action === GameActions.JOIN) {
      pushGameActionAPI({ gameId, action: GameActions.JOIN });
    }
  }, [router.query.action, send, gameId]);

  return (
    <div>
      <p>Waiting for others to join</p>
      <p>Invite others to join</p>
      <br />
      {url}
    </div>
  );
};
