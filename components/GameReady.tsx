import { startGameAPI } from "@/api/game";
import { useGameId } from "@/hooks/useGameId";
import { useGameMachine } from "@/hooks/useGameMachine";
import { FormEventHandler } from "react";

export const GameReady = () => {
  const gameId = useGameId();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await startGameAPI({ gameId });
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
