import React, {useState} from 'react';
import  '../styles/searchbar.css';
import data from '../MOCK_DATA.json';

export default function Searchbar() {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

  return (
    <>
      <div className="nav">
        <div className="search">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search for a place..."
              onChange={handleChange}
            />
          </div>
          {data
            .filter((place) => {
              if (search === "") {
                return place;
              } else if (
                place.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return place;
              }
            })
            .map((place) => (
              <div>
                <h1>{place.name}</h1>
              </div>
            ))}
        </div>
        <div className="header">
          <h1>CrossoverMap</h1>
        </div>
      </div>
    </>
  );
}
