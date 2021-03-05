import React, { useState } from 'react';
// helpers
import DropDown from '../helpers/dropDown';
import OverallStarRating from '../helpers/OverallStarRating';

// variables
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

function Details(focus) { // focus.product
  // stuff and states
  const [size, SizeDropdown] = DropDown('Select Size', '', '', sizes);
  // const [rating, useRating] = OverallStarRating(focus);
  const current = focus.product;

  return (
    <div>
      <div className="column star">
        Ratings and Reviews
        <OverallStarRating product={current} />
        <a className="review-link" href="#ratings">Read all [#] Reviews</a>
      </div>
      <div className="column details">
        {current.name}
      </div>
      <div className="column price">
        Price  $
        {current.default_price}
      </div>
      <div className="column styles">
        Style
        <div className="columns">
          <div className="column">
            <button type="button" className="button is-rounded is-link">X</button>
          </div>
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
          <div className="column">
            <button type="button" className="button is-rounded is-link" />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-two-thirds size">
          <SizeDropdown />
        </div>
        <div className="column quantity">
          <button type="button">Quantity</button>
        </div>
      </div>

      <div className="columns">
        <div className="column is-three-quarters cart">
          <button type="button">Add to Bag +</button>
        </div>
        <div className="column favorite">
          <button type="button">Star</button>
        </div>
      </div>
    </div>
  );
}

export default Details;
/* <div className="dropdown">
<div className="dropdown-trigger">
  <button type="button" className="button">
    <span>Select Size</span>
  </button>
</div>
<div className="dropdown-menu">
  <div className="dropdown-content">
    <div className="dropdown-content">
      <li className="dropdown-item">
        XS
      </li>
      <li className="dropdown-item">
        S
      </li>
      <li className="dropdown-item">
        M
      </li>
      <li className="dropdown-item">
        L
      </li>
      <li className="dropdown-item">
        XL
      </li>
    </div>
  </div>
</div>
</div> */
