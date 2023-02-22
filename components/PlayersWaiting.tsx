import { GameActions } from "@/state/gameMachine";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const PlayersWaiting = () => {
  const [url, setUrl] = useState("");
  const { query } = useRouter();

  useEffect(() => {
    setUrl(`${window.location.href}?action=${GameActions.JOIN}`);
  }, [query.gameId]);

  return (
    <div>
      <p>Invite others to join</p>
      <br />
      {url}
    </div>
  );
};
