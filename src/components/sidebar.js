import React from 'react';
import { mockData } from '../App';

const Sidebar = ({ data }) => {
  if (!data) {
    return (
      <div className='list-group w-100'>
        <div className='list-group-item list-group-item-action'
          aria-current='true'>
        <a href={mockData.wikiLink} >
          <div className='d-flex w-100 justify-content-start'>
            <h5 className='mb-1'>{mockData.name}</h5>
          </div>
          <img
            className='d-flex w-100 justify-content-start'
            src={mockData.img}
            alt={mockData.name}
          /></a>
          <p className='mb-1'>
            {mockData.description}
          </p>
          <small>
            <p></p>
            <p>
              {mockData.adress.zipcode} {mockData.adress.city}
            </p>
            <p>{mockData.adress.street}</p>
            <p>{mockData.adress.region}</p>
          </small>
        </div>
      </div>
    );
  } else {
    return (
      <div className='list-group w-100'>
        <div className='list-group-item list-group-item-action'
          aria-current='true'>
        <a href={data.wikiLink}
          className='list-group-item list-group-item-action'
          aria-current='true'
        >
          <div className='d-flex w-100 justify-content-start'>
            <h5 className='mb-1'>{data.name}</h5>
          </div>
          <img
            className='d-flex w-100 justify-content-start'
            src={data.img}
            alt={data.name}
          /></a>
          <p className='mb-1'>
            {data.description}
          </p>
          <small>
            <p></p>
            <p>
              {data.adress.zipcode} {data.adress.city}
            </p>
            <p>{data.adress.street}</p>
            <p>{data.adress.region}</p>
          </small>
        </div>
      </div>
    );
  }
};

export default Sidebar;
