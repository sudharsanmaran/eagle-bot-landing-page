import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/landingPage/LandingPage";
import ContactPage from "./Pages/contact/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="contact/" element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
