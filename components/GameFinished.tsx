import Link from "next/link";

export const GameFinished = () => {
  return (
    <div>
      <p>Game finished.</p>
      <Link href="/">Start a new game</Link>
    </div>
  );
};
