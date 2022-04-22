import React from 'react'
import Sidebar from './sidebar'

const home = () => {
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
  )
}

export default home
