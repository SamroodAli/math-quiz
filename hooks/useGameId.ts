import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useGameId = () => {
  const router = useRouter();
  const [gameId, setGameId] = useState<string | null>(null);

  useEffect(() => {
    if (!router.isReady) return;

    if (router.query.gameId) {
      setGameId(router.query.gameId as string);
    }
  }, [router.isReady, router.query.gameId]);

  return gameId;
};
