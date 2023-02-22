import { GameState } from "@/components/GameState";
import { useEffect } from "react";

export default function GamePage() {
  useEffect(() => {});

  return (
    <div>
      <h1>Welcome to your game</h1>
      <GameState />
    </div>
  );
}
