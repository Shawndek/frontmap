import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import Sidebar from "./sidebar";
import Mapa from "./Map";
import axios from "axios";

const Home = () => {  
  const [data, setData] = useState();

    
function changeData(data) {
    setData(data);
  }


console.log(data)
  return (
    <div className="row">
      
      <div className="col">
        <Searchbar />
        <div className="row">
          <div className="col-3">
             <Sidebar data={data}/>
          </div>          
          <div className="col">
             <Mapa data={data}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
