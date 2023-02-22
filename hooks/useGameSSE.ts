import { useRouter } from "next/router";
import Pusher from "pusher-js";
import { useEffect } from "react";

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
});

export const useGameSSE = () => {
  const router = useRouter();

  useEffect(() => {
    const gameId = router.query.gameId;

    const channelName = `game/${gameId}`;

    const channel = pusher.subscribe(channelName);

    channel.bind("event", ({ state }: { state: string }) => {
      console.log(state);
    });

    return () => {
      pusher.unsubscribe(channelName);
    };
  });
};
