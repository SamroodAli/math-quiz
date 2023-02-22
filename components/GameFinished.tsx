import Link from "next/link";

export const GameFinished = () => {
  return (
    <div>
      <p>Oops, You lost</p>
      <Link href="/">Start a new game</Link>
    </div>
  );
};
