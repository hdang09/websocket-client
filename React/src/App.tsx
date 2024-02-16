import { StompSessionProvider } from "react-stomp-hooks";
import Component from "./Component";

//* REMEMBER to add "var global = window;" in index.html

const App = () => {
  return (
    <StompSessionProvider url="http://localhost:8080/ws-bingo">
      <Component />
    </StompSessionProvider>
  );
};

export default App;
