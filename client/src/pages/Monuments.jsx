import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

import tajmahal from "../images/tajmahal.jpg";
import qutubminar from "../images/qutubminar.jpg";
import redfort from "../images/redfort.jpg";
import konark from "../images/konark.jpg";
import hampi from "../images/hampi.jpg";

const imageMap = {
  "Taj Mahal": tajmahal,
  "Qutub Minar": qutubminar,
  "Red Fort": redfort,
  "Konark Sun Temple": konark,
  "Hampi": hampi
};

function Monuments() {

  const [monuments, setMonuments] = useState([]);

  useEffect(() => {
    const fetchMonuments = async () => {
      const res = await API.get("/monuments");
      setMonuments(res.data);
    };

    fetchMonuments();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Indian Monuments
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px"
        }}
      >
        {monuments.map((monument) => (
          <Link
            key={monument._id}
            to={`/monument/${monument._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                width: "260px",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                backgroundColor: "white"
              }}
            >
              <img
                src={imageMap[monument.name]}
                alt={monument.name}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "15px", textAlign: "center" }}>
                <h3>{monument.name}</h3>
                <p style={{ color: "#666" }}>{monument.state}</p>
                <p style={{ fontSize: "14px", color: "#888" }}>{monument.era}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Monuments;