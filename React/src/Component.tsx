import { useState } from "react";
import { useSubscription } from "react-stomp-hooks";

function Component() {
  const [lastMessage, setLastMessage] = useState("No message received yet");

  // JSON.parse(message.body) if needed
  useSubscription("/topic/rooms", (message) => setLastMessage(message.body));

  return <div>Last Message: {lastMessage}</div>;
}

export default Component;
