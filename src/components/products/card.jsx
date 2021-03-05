import React, { useState, useEffect } from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
        </figure>
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