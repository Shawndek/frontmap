import React from "react";
import Sidebar from "./sidebar";
import Mapa from "./Map";

const home = () => {
  return (
    <div class="row">
      <div class="col">
        Navbar
        <div class="row">
          <div class="col-3">
            <Sidebar />
          </div>
          <div class="col">
            <Mapa />
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
