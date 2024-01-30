import { useState } from "react";
import { useSubscription } from "react-stomp-hooks";

function Component() {
  const [rooms, setRooms] = useState<object[]>(); // Declare Room interface

  useSubscription("/topic/rooms", (message) =>
    setRooms(JSON.parse(message.body))
  );

  return (
    <>
      <h2>Rooms</h2>
      <ul>
        {rooms?.map((room, index) => (
          <li key={index}>{JSON.stringify(room)}</li>
        ))}
      </ul>
    </>
  );
}

export default Component;
