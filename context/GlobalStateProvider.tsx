import React, { createContext, FC, ReactNode } from "react";
import { useInterpret } from "@xstate/react";
import { gameMachine } from "@/state/gameMachine";

export const GlobalStateContext = createContext<any>({});

interface Props {
  children: ReactNode;
}

export const GlobalStateProvider: FC<Props> = ({ children }) => {
  const gameService = useInterpret(gameMachine);

  return (
    <GlobalStateContext.Provider value={{ gameService }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
