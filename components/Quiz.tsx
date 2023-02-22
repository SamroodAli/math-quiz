import { FormEventHandler, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";

export const Quiz = () => {
  const router = useRouter();

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const gameId = uuid();
    router.push(`/game/${gameId}`);
  };

  return (
    <>
      <h1>Welcome to Math quiz game</h1>

      <form onSubmit={onSubmit}>
        <button type="submit">Create a new game</button>
      </form>
    </>
  );
};
