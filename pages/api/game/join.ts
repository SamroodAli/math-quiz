import { GameActions, GameStates, pushGameAction } from "@/state/gameMachine";
import { pusher } from "@/util/pusher";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const gameId = req.body.gameId;

  pushGameAction(gameId, GameActions.JOIN);

  return res.status(200).json({ message: "Successful" });
}
