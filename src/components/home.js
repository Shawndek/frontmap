import React, { useState } from "react";
import Searchbar from "./Searchbar";
import Sidebar from "./sidebar";

const Home = () => {
  const [data, setData] = useState();

  function changeData(data) {
    setData(data);
  }

  return (
    <div class="row">
      <div class="col">
        <Searchbar changeData={changeData}/>
        <div class="row">
          <div class="col-3">
            <Sidebar />
          </div>
          <div class="col">Map</div>
          <div class="col">Map</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
