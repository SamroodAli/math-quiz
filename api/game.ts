import { GameActions } from "@/state/gameMachine";
import axios from "axios";

interface GamePayload {
  gameId: string;
  action: GameActions;
}

export const pushGameActionAPI = async (payload: GamePayload) => {
  const { data } = await axios.post("/api/game/push", payload);
  return data;
};
