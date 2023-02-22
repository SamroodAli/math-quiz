import { activeGames } from "@/database";
import { createGameState } from "@/state/gameMachine";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const gameId = req.body.gameId;

  activeGames[gameId] = createGameState();

  return res.status(200).json({ message: "Successful" });
}
