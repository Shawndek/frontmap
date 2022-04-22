<<<<<<< HEAD
import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Sidebar from './sidebar';
import Map from './Map';
=======
import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Sidebar from "./sidebar";
import Mapa from "./Map";
>>>>>>> 5a1bd53ed4d6f7c9df6505f6521517cb7eddc2dc

const Home = () => {
  const [data, setData] = useState(false);

  function changeData(value) {
    setData(value);
  }

  console.log("DATA:", data);

  return (
    <div className="row">
      <div className="col">
        <Searchbar changeData={changeData} />
<<<<<<< HEAD
        <div className='row-9'>
          <div className='col-3'>
            <Sidebar data={data} />
          </div>
          <div className='col'>
            <Map data={data} />
=======
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col">
            <Mapa />
>>>>>>> 5a1bd53ed4d6f7c9df6505f6521517cb7eddc2dc
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
