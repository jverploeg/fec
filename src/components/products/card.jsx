import React, { useState, useEffect } from 'react';
import ProductImages from './ProductImages.jsx';
import Images from './Images.jsx';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
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
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
        </div>
      </div>
    </div>
  );
}
export default Card;