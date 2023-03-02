import { pushGameActionAPI } from "@/api/game";
import { useGameId } from "@/hooks/useGameId";
import { GameActions } from "@/state/gameMachine";
import { FormEventHandler } from "react";

export const GameReady = () => {
  const gameId = useGameId();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await pushGameActionAPI({ gameId, action: GameActions.START });
  };

  return (
    <div>
      <p>A player has joined</p>
      <form onSubmit={onSubmit}>
        <button type="submit">Start game</button>
      </form>
    </div>
  );
};
