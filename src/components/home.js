import React from 'react'
import Searchbar from './Searchbar';
import Sidebar from './sidebar'

const home = () => {
  return (
    <div class="row">
      <div class="col">
        <Searchbar />
        <div class="row">
          <div class="col">
            <Sidebar />
          </div>
          <div class="col">Map</div>
        </div>
      </div>
    </div>
  );
}

export default home
