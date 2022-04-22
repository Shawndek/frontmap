import React, {useState} from 'react';
// import SearchbarStyle from '../styles/searchbar.css';
import data from '../MOCK_DATA.json';

export default function Searchbar() {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

  return (
    <>
    <div>
        <input type="text" placeholder="Search..." onChange={handleChange}/>
        {data.filter((place) => {
            if (search === "") {
                return place
            } else if (place.name.toLowerCase().includes(search.toLowerCase()))
            {
                return place
            }
        }).map((place) => (
            <div>
                <h1>{place.name}</h1>
            </div>)
        )}
    </div>
      <h1>CrossoverMap</h1>
    </>
  );
}
