import Link from "next/link";

export const GameWon = () => {
  return (
    <div>
      <p>Yay, you won</p>
      <Link href="/">Create a new game</Link>
    </div>
  );
};
