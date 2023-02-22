import { joinGameAPI } from "@/api/game";
import { useGameId } from "@/hooks/useGameId";
import { FormEventHandler } from "react";

export const GameReady = () => {
  const gameId = useGameId();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await joinGameAPI({ gameId });
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
