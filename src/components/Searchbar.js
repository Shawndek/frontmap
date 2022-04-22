import React, { useState, useEffect } from 'react';
import Map from './Map';
import '../styles/searchbar.css';
import axios from 'axios';

export default function Searchbar({ changeData }) {
  const [userInput, setUserInput] = useState('');

  function fetchData() {
    axios(`http://crossover-2.herokuapp.com/search/${userInput}`)
      .then((res) => {
        if (res) changeData(res.data);
      })
      .catch((error) => console.log('Error: ', error));
  }
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <>
      <div className='nav'>
        <div className='search'>
          <div className='searchbar'>
            <input
              type='text'
              placeholder='Search for a place...'
              onChange={(e) => handleChange(e)}
            />
            <button className='search-button' onClick={handleSubmit}>
              Search
            </button>
          </div>
        </div>
        <div className='header'>
          <h1>CrossoverMap</h1>
        </div>
      </div>
    </>
  );
}
