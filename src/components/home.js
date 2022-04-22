import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Sidebar from './sidebar';
import Mapa from './Map';

const Home = () => {
  const [data, setData] = useState([]);

  function changeData(data) {
    setData(data);
  }

  return (
    <div class='row'>
      <div class='col'>
        <Searchbar changeData={changeData} />
        <div class='row'>
          <div class='col-3'>
            <Sidebar />
          </div>
          <div class='col'>
            <Mapa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
