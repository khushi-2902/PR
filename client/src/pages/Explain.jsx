import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function Explain() {

  const { id } = useParams();

  const [mode, setMode] = useState("student");
  const [result, setResult] = useState("");

  const generateExplanation = async () => {

    const res = await API.post("/ai/explain", {
      monumentId: id,
      mode: mode
    });

    setResult(res.data.explanation);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>AI Explanation</h1>

      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="student">Student Mode</option>
        <option value="tourist">Tourist Mode</option>
        <option value="exam">Exam Mode</option>
      </select>

      <button
        onClick={generateExplanation}
        style={{ marginLeft: "10px" }}
      >
        Generate
      </button>

      <hr />

      <p>{result}</p>

    </div>
  );
}

export default Explain;