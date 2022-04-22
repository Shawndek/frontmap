import React from "react";
import { data } from "../App";

const Sidebar = () => {

  return (
<div class="list-group w-100">
  <a href="#" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-start">
      <h5 class="mb-1">{data.name}</h5>
    </div>
    <img class="d-flex w-100 justify-content-start" src={data.img} alt={data.name}/>
   <p class="mb-1"> {data.description}
   <a href={data.wikiLink}>Learn more </a></p>
    <small><p></p><p>{data.adress.zipcode} {data.adress.city}</p>
    <p>{data.adress.street}</p>
    <p>{data.adress.region}</p></small>
    
  </a>
  
</div>

   )};

export default Sidebar;
