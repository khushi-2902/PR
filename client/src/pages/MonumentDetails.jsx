import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";

function MonumentDetails() {

  const { id } = useParams();

  const [monument, setMonument] = useState(null);

  useEffect(() => {

    const fetchMonument = async () => {

      const res = await API.get("/monuments");

      const found = res.data.find((m) => m._id === id);

      setMonument(found);

    };

    fetchMonument();

  }, [id]);

  if (!monument) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>

      <h1>{monument.name}</h1>

      <p><b>State:</b> {monument.state}</p>

      <p><b>Era:</b> {monument.era}</p>

      <p><b>Built By:</b> {monument.builtBy}</p>

      <p><b>Year:</b> {monument.year}</p>

      <p><b>Description:</b> {monument.description}</p>

      <hr />

      <h2>AI Features</h2>

      <div style={{ marginTop: "20px" }}>

        <Link to={`/explain/${id}`}>
          <button>
            Explain with AI
          </button>
        </Link>

        <Link to={`/quiz/${id}`}>
          <button style={{ marginLeft: "10px" }}>
            Generate Quiz
          </button>
        </Link>

        <Link to={`/summary/${id}`}>
          <button style={{ marginLeft: "10px" }}>
            Quick Summary
          </button>
        </Link>

        <h2>About</h2>
<p>{monument.about}</p>

<h2>History</h2>
<p>{monument.history}</p>

<h2>Architecture</h2>
<p>{monument.architecture}</p>

<h2>Cultural Significance</h2>
<p>{monument.culturalSignificance}</p>

<h2>Highlights</h2>
<ul>
  {monument.highlights?.map((h, i) => (
    <li key={i}>{h}</li>
  ))}
</ul>

<h2>Interesting Facts</h2>
<ul>
  {monument.facts?.map((f, i) => (
    <li key={i}>{f}</li>
  ))}
</ul>

      </div>

    </div>
  );
}

export default MonumentDetails;