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

  return (
    <div className='row'>
      <div className='col'>
        <Searchbar changeData={changeData} />
        <div className='row-9'>
          <div className='col-3'>
            <Sidebar data={data} />
          </div>
          <div className='col' style={{ minHeight: '20rem' }}>
            <Mapa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
