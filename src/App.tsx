import "./index.css";

import { Footer, NavBar } from "./components";
import { LandingPage, LearnMore } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:id" element={<LearnMore />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
