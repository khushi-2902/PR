import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function Summary() {

  const { id } = useParams();
  const [mode, setMode] = useState("student");
  const [result, setResult] = useState("");

  const generateSummary = async () => {
    const res = await API.post("/ai/summary", {
      monumentId: id,
      mode: mode
    });

    setResult(res.data.summary);
  };

  return (
    <div>
      <h1>Quick Summary</h1>

      <select onChange={(e) => setMode(e.target.value)}>
        <option value="student">Student Mode</option>
        <option value="tourist">Tourist Mode</option>
        <option value="exam">Exam Mode</option>
      </select>

      <button onClick={generateSummary}>
        Generate Summary
      </button>

      <p>{result}</p>
    </div>
  );
}

export default Summary;