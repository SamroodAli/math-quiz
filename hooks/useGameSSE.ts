import { useGameId } from "@/hooks/useGameId";
import { useGameMachine } from "@/hooks/useGameMachine";
import Pusher from "pusher-js";
import { useEffect } from "react";

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
});

export const useGameSSE = () => {
  const { send } = useGameMachine();

  const gameId = useGameId();

  useEffect(() => {
    if (!gameId) return;

    const channelName = `game_${gameId}`;

    const channel = pusher.subscribe(channelName);

    channel.bind("event", ({ action }: { action: string }) => {
      send(action);
    });

    return () => {
      pusher.unsubscribe(channelName);
    };
  }, [gameId, send]);
};
