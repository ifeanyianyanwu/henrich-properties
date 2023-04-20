import "./index.css";

import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import LearnMore from "./pages/LearnMore/LearnMore";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:id" element={<LearnMore />} />
      </Routes>
    </div>
  );
}

export default App;
