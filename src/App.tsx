import "./index.css";

import { Footer, NavBar } from "./components";
import { LandingPage, LearnMore, NotFound } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:id" element={<LearnMore />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
