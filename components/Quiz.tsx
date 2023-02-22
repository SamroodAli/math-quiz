import { useEffect, useState } from "react";
import Pusher from "pusher-js";

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
});

export const Quiz = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const channel = pusher.subscribe("channel");

    channel.bind("message", (message: string) => {
      setMessages([...messages, message.toString()]);
    });

    return () => {
      pusher.unsubscribe("channel");
    };
  });
  return (
    <div>
      {messages.map((message) => (
        <p key={message}>{message}</p>
      ))}
    </div>
  );
};
