import { pushGameAction } from "@/state/gameMachine";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const gameId = req.body.gameId;
  const action = req.body.action;

  await pushGameAction(gameId, action);

  return res.status(200).json({ message: "Successful" });
}
