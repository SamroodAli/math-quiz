import { pushGameActionAPI } from "@/api/game";
import { useGameId } from "@/hooks/useGameId";
import { GameActions } from "@/state/gameMachine";
import { FormEventHandler, useState } from "react";

export const GameQuestion = () => {
  const [answer, setAnswer] = useState("");

  const gameId = useGameId();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await pushGameActionAPI({ gameId, action: GameActions.ANSWER });
  };

  return (
    <div>
      <p>What is 1 + 1 ?</p>
      <form onSubmit={onSubmit}>
        <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </form>
    </div>
  );
};
