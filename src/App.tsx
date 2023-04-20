import "./index.css";

import { LandingPage, LearnMore } from "./pages";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

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
