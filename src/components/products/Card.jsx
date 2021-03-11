import React, { useState, useEffect } from 'react';
import Images from './Images.jsx';
import { MdStar } from 'react-icons/md';
// test

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image">
          <Images theImages={props.moreImages} />
      </div>

      <div className="card-content">
        <div className="content">
          <span>Category</span>
          <br />
          <strong>Expanded Product Name with Extra Text</strong>
        </div>

        <div className="content">
          <span>$123</span>
          <br />
          <MdStar size={20} color='grey'/>
          <MdStar size={20} color='grey'/>
          <MdStar size={20} color='grey'/>
          <MdStar size={20} color='grey'/>
          <MdStar size={20} color='grey'/>
        </div>
      </div>
    </div>
  );
}
export default Card;
