import { GlobalStateContext } from "@/context/GlobalStateProvider";
import { useSelector } from "@xstate/react";
import { useContext } from "react";

export const useGameMachine = () => {
  const globalServices = useContext(GlobalStateContext);

  const current = useSelector(
    globalServices.gameService,
    (state: any) => state.value
  );

  console.log(current);

  const { send } = globalServices.gameService;

  return { current, send };
};
