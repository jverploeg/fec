import React, { useState, useEffect } from 'react';
import Images from './Images.jsx';
import { MdStar } from 'react-icons/md';
// test

const Card = (props) => {
  console.log('More Images: ', props.moreImages);
  return (
    <div className="card">
      <div className="card-image">
          <Images theImages={props.moreImages} />
      </div>

      <div className="card-content">
        <div className="content">
          <span>{ props.product.category }</span>
          <br />
          <strong>{ props.product.description.substring(0,30) }</strong>
        </div>

        <div className="content">
          <span>{ props.product.default_price }</span>
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
