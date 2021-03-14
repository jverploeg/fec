import React, { useState, useEffect } from 'react';
import Images from './Images';
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
          <span id='prod-cat'>{ props.product.category }</span>
          <br />
          <strong>{ props.product.description.substring(0,30) }</strong>
        </div>

        <div className="content">
          <span id='prod-price'>{ props.product.default_price }</span>
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
