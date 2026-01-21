import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pictures from "./pages/Pictures";
import Stats from "./pages/Stats";
import Question from "./pages/Question";
import Success from "./pages/Success";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pictures" element={<Pictures />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
