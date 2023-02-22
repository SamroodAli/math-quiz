import { useRouter } from "next/router";

export const useGameId = () => {
  const router = useRouter();

  return router.query.gameId as string;
};
