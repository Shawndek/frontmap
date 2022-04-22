import React from 'react'
import Sidebar from './sidebar'

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
             Map
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default home
