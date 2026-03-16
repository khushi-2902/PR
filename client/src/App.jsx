import { BrowserRouter, Routes, Route } from "react-router-dom";
import Monuments from "./pages/Monuments";
import MonumentDetails from "./pages/MonumentDetails";
import Explain from "./pages/Explain";
import Quiz from "./pages/Quiz";
import Summary from "./pages/Summary";

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