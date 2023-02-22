import { useGameMachine } from "@/hooks/useGameMachine";
import { useRouter } from "next/router";
import Pusher from "pusher-js";
import { useEffect } from "react";

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
});

export const useGameSSE = () => {
  const router = useRouter();

  const { send, current } = useGameMachine();

  useEffect(() => {
    const gameId = router.query.gameId;

    const channelName = `game_${gameId}`;

    const channel = pusher.subscribe(channelName);

    channel.bind("event", ({ action }: { action: string }) => {
      send(action);
    });

    return () => {
      pusher.unsubscribe(channelName);
    };
  }, [router.query.gameId, send]);

  useEffect(() => {
    console.log(current.value);
  }, [current.value]);
};
