import { BrowserRouter, Routes, Route } from "react-router-dom";
import Monuments from "./pages/Monuments.jsx";
import MonumentDetails from "./pages/MonumentDetails.jsx";
import Explain from "./pages/Explain.jsx";
import Quiz from "./pages/Quiz.jsx";
import Summary from "./pages/summary.jsx";
import "./App.css";
import "./pages/Monuments.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Monuments />} />
        <Route path="/monument/:id" element={<MonumentDetails />} />
        <Route path="/explain/:id" element={<Explain />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/summary/:id" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;