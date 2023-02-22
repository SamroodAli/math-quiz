import { createGameState } from "@/state/gameMachine";

export const activeGames: Record<
  string,
  ReturnType<typeof createGameState>
> = {};
