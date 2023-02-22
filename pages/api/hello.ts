// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pusher } from "@/util/pusher";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  pusher.trigger("channel", "message", "What is 1 + 1");

  res.status(200).json({ message: "Hello world" });
}
