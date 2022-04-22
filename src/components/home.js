import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Sidebar from './sidebar';
import Map from './Map';

const Home = () => {
  const [data, setData] = useState([]);

  function changeData(value) {
    setData(value);
  }

  console.log('DATA:', data);

  return (
    <div className='row'>
      <div className='col'>
        <Searchbar changeData={changeData} />
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col'>
            <Map data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
