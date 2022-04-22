
import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Sidebar from "./sidebar";
import Mapa from "./Map";

const Home = () => {
  const [data, setData] = useState();

  function changeData(data) {
    setData(data);
  }


  return (
    <div className="row">
      
      <div className="col">
        Navbar
        <div className="row">
          <div className="col-3">
             <Sidebar />
          </div>          
          <div className="col">
             Map
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
