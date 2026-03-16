import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function Quiz() {

  const { id } = useParams();

  const [mode, setMode] = useState("student");
  const [quiz, setQuiz] = useState("");

  const generateQuiz = async () => {

    const res = await API.post("/ai/quiz", {
      monumentId: id,
      mode: mode
    });

    setQuiz(res.data.quiz);
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>AI Quiz</h1>

      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="student">Student Mode</option>
        <option value="tourist">Tourist Mode</option>
        <option value="exam">Exam Mode</option>
      </select>

      <button
        onClick={generateQuiz}
        style={{ marginLeft: "10px" }}
      >
        Generate Quiz
      </button>

      <hr />

      <pre>{quiz}</pre>

    </div>
  );
}

export default Quiz;