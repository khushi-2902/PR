import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import "./Monuments.css";

import tajmahal from "./images/tajmahal.jpeg";
import qutubminar from "./images/qutubMinar.jpeg";
import redfort from "./images/delhiFort.jpg";
import konark from "./images/konarkTemple.jpg";
import hampi from "./images/hampi.jpg";

function Monuments() {
  const [monuments, setMonuments] = useState([]);

  // Search + Filters
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get("/monuments");
      setMonuments(res.data);
    };
    fetchData();
  }, []);

  // Image Mapping
  const imageMap = {
    "Taj Mahal": tajmahal,
    "Qutub Minar": qutubminar,
    "Red Fort": redfort,
    "Konark Sun Temple": konark,
    "Hampi": hampi,
  };

  //  FILTER LOGIC
  const filteredMonuments = monuments.filter((m) => {
    return (
      m.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedState === "" || m.state === selectedState) &&
      (selectedCategory === "" || m.category === selectedCategory)
    );
  });

  return (
    <div className="container">
      <h1 className="title">Explore Indian Heritage</h1>

      {/* FILTER UI */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search monuments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setSelectedState(e.target.value)}>
          <option value="">All States</option>
          <option value="Delhi">Delhi</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Odisha">Odisha</option>
          <option value="Karnataka">Karnataka</option>
        </select>

        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Types</option>
          <option value="Fort">Fort</option>
          <option value="Temple">Temple</option>
          <option value="Mausoleum">Mausoleum</option>
          <option value="Tower">Tower</option>
        </select>
      </div>

      {/*GRID*/}
      <div className="grid">
        {filteredMonuments.map((m) => (
          <Link to={`/monument/${m._id}`} key={m._id}>
            <div className="card">
              <img src={imageMap[m.name]} alt={m.name} />

              <div className="overlay">
                <h2>{m.name}</h2>
                <p>{m.state}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Monuments;