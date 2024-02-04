import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Row } from "react-bootstrap";

function App() {
  const [backendData, setBackendData] = useState({ coinData: [] });

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="app-container">
        <Row>
          <h1 className="p-3 text-white">Trending cryptos</h1>
        </Row>
        {typeof backendData.coinData === "undefined" ? (
          <p className="text-white">Loading...</p>
        ) : (
          backendData.coinData.map((coin, i) => (
            <div key={i} className="coin-container">
              <h1 className="text-white">{coin.name}</h1>
              <img src={coin.image} alt={coin.name} />
              <h3 style={{ color: "white" }}>${coin.current_price}</h3>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
