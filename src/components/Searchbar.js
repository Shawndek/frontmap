import React, { useState, useEffect } from "react";
import Map from "./Map";
import "../styles/searchbar.css";

export default function Searchbar({changeData, data}) {
  const [userInput, setUserInput] = useState("");

useEffect(() => {
  fetch(`https://crossover-2.herokuapp.com/search/${userInput}`)
        .then(response => response.json())
        .then(data => setUserInput(data))
        .catch(error => console.log('Error: ', error))}, [userInput]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeData(fetch(userInput).data);
  };

  return (
    <>
      <div className="nav">
        <div className="search">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search for a place..."
              onChange={(e) => handleChange(e)}
            />
            <button className="search-button" onClick={handleSubmit}>Search</button>
          </div>
          {data.map((place) => (
              <Map 
              key={place.id}
              name={place.name}
              />
            ))}
        </div>
        <div className="header">
          <h1>CrossoverMap</h1>
        </div>
      </div>
    </>
  );
}
