import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBotLanding from "./screens/ChatBotLanding/ChatBotLanding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatBotLanding />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
