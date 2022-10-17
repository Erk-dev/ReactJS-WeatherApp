import React, { useState } from "react";
import keys from "./keys";
import "./App.css";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function App() {
  const dataBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(0, 15);
    return date;
  };

  const [query, setQuery] = useState("");
  const [weather, setWether] = useState({});
  const search = (e) => {
    if (e.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((results) => {
          setQuery("");
          setWether(results);
          console.log(results);
        })
    }
  }

  return (
    <div className="App">
      <main>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-bar" 
            onChange={(e) => setQuery(e.target.value)} 
            value={query} 
            onKeyPress={search} 
          />
        </div>
        <div>
          <div className="location-container">
            <div className="location">Bangkok, Thailand</div>
            <div className="date"> Mon Oct 17 2022 </div>
          </div>
          <div className="weather-container">
            <div className="temperature"> 30°C </div>
            <div className="weather">Clouds</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
