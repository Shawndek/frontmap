import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Sidebar from './sidebar';
import Mapa from './Map';

const Home = () => {
  const [data, setData] = useState(false);

  function changeData(value) {
    setData(value);
  }

  console.log('DATA:', data);

console.log(data)
  return (
    <div className='row'>
      <div className='col'>
        <Searchbar changeData={changeData} />
        <div className='row-9'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col'>
            <Mapa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
