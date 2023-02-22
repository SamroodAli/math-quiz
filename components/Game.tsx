import React, { useState, useEffect } from "react";
import SimplePeer from "simple-peer";

export const Game = () => {
  const [peerId, setPeerId] = useState("");
  const [peers, setPeers] = useState<SimplePeer.Instance[]>([]);
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    // create a new peer
    const peer = new SimplePeer({ initiator: true });

    // when the peer is ready, display its ID and create the URL
    peer.on("signal", (data: any) => {
      setPeerId(JSON.stringify(data));
      setUrl(
        window.location.origin +
          "/join/" +
          encodeURIComponent(JSON.stringify(data))
      );
    });

    // when the peer receives data, handle it
    peer.on("data", handleData);

    // add the peer to the list of peers
    setPeers([...peers, peer]);

    return () => {
      // when the component unmounts, destroy the peer
      peer.destroy();
      setPeers(peers.filter((p) => p !== peer));
    };
  }, []);

  function handleData(data: any) {
    const message = data.toString();
    console.log(message);
  }

  function send(message: string) {
    peers.forEach((peer) => {
      peer.send(message);
    });
  }

  function startGame() {
    // create a new peer
    const peer = new SimplePeer({ initiator: true });

    // when the peer is ready, display its ID and create the URL
    peer.on("signal", (data: any) => {
      setPeerId(JSON.stringify(data));
      setUrl(
        window.location.origin +
          "/join/" +
          encodeURIComponent(JSON.stringify(data))
      );
    });

    // when the peer receives data, handle it
    peer.on("data", handleData);

    // add the peer to the list of peers
    setPeers([...peers, peer]);
  }

  return (
    <div>
      <h1>My Peer ID: {peerId}</h1>
      <p>Share this URL with your friends:</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
      <br />
      <button onClick={startGame}>Start Game</button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => send(message)}>Send</button>
    </div>
  );
};
