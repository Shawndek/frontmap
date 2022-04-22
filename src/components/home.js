import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Sidebar from "./sidebar";
import Mapa from "./Map";

const Home = () => {
  const [data, setData] = useState([]);

  function changeData(value) {
    setData(value);
  }

  console.log("DATA:", data);

  return (
<<<<<<< HEAD
    <div className="row">
      <div className="col">
        <Searchbar />
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col">
=======
    <div className='row'>
      <div className='col'>
        <Searchbar changeData={changeData} />
        <div className='row'>
          <div className='col-3'>
            <Sidebar />
          </div>
          <div className='col'>
>>>>>>> e5036dd3de629c8777a6187cc3235c19a1c7997e
            <Mapa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
