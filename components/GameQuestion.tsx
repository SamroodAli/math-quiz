import { answerQuestionAPI } from "@/api/game";
import { FormEventHandler, useState } from "react";

export const GameQuestion = () => {
  const [answer, setAnswer] = useState("");

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await answerQuestionAPI({ answer });
  };

  return (
    <div>
      <p>What is 1 + 1 ?</p>
      <form>
        <input value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </form>
    </div>
  );
};
