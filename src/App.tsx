import { StompSessionProvider } from "react-stomp-hooks";
import Component from "./Component";

const App = () => {
  return (
    <StompSessionProvider url="http://localhost:8080/ws-bingo">
      <Component />
    </StompSessionProvider>
  );
};

export default App;
