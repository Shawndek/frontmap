import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Sidebar from './Sidebar';
import Mapa from './Map';

const Home = () => {
  const [data, setData] = useState(false);

  function changeData(value) {
    setData(value);
  }
  return (
    <div className='row'>
      <div className='col'>
        <Searchbar changeData={changeData} />
        <div className='row'>
          <div className='col-3'>
            <Sidebar data={data}/>
          </div>
          <div className='col'>
            <Mapa data={data}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
