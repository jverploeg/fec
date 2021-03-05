import React, { useState } from 'react';
// helpers
import DropDown from '../helpers/dropDown';
import OverallStarRating from '../helpers/OverallStarRating';
import Styles from '../helpers/styles';

// variables
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
// temp style array
const styles = ['⛷️', '🛶', '🏀', '🏈', '⚾', '⚽', '🏒', '🎣'];

function Details(focus) { // focus.product
  // stuff and states
  const [size, SizeDropdown] = DropDown('Select Size', '', '', sizes);
  const [style, StyleGrid] = Styles(styles, styles[0]);
  // const [rating, useRating] = OverallStarRating(focus);
  const current = focus.product;

  return (
    <div>
      <div className="columns star">
        <div className="column">
          <strong>Ratings and Reviews</strong>
        </div>
        <div className="column">
          <OverallStarRating product={current} />
        </div>
        <div className="column">
          <a className="review-link" href="#ratings">Read all [#] Reviews</a>
        </div>
      </div>
      <div className="columns category">
        <div className="column is-one-third size">
          <strong>Category</strong>
        </div>
        <div className="column is-one-third size">
          {current.category}
        </div>
      </div>
      <div className="columns details">
        <div className="column is-one-third size">
          <strong>Product</strong>
        </div>
        <div className="column is-one-third size">
          {current.name}
        </div>
      </div>
      <div className="columns price">
        <div className="column is-one-third size">
          <strong>Price</strong>
        </div>
        <div className="column is-one-third size">
          ${current.default_price}
        </div>
      </div>
      <div className="column styles">
        <strong>Style</strong>
        <StyleGrid />
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
/* <div className="columns">
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
</div> */
