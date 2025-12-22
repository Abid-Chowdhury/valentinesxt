import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pictures from "./pages/Pictures";
import Stats from "./pages/Stats";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
