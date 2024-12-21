import React from "react";
import data from "./data.json";
import "./App.css";

const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts/";

function App() {
  return (
    <div className="container">
      <h1>Desserts</h1>
      {data.map((item, index) => (
        <div key={index}>
          <img src={`${BASE_URL}${item.images.desktop}`} alt={item.name} />
        </div>
      ))}
    </div>
  );
}

export default App;
