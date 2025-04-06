import { Routes, Route, useLocation } from "react-router";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import About from "./pages/About";
import Tour from "./pages/Tour";
import Music from "./pages/Music";
import Videos from "./pages/Videos.js";
import "./styles/stylesheet.scss";

function App() {
  const location = useLocation();
  const removeNav = location.pathname === "/";

  return (
    <div className="app">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
