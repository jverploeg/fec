import React, { useState } from 'react';
// helpers
import DropDown from '../helpers/dropDown';
import OverallStarRating from '../helpers/OverallStarRating';
import Styles from '../helpers/styles';

// variables
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
// temp style array
const styles = ['⛷️', '🛶', '🏀', '🏈', '⚾', '⚽', '🏒', '🎣'];
// temp quantity
const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// TODO!!!!! modify styles, q, sizes to use the data gathered from styles route

function Details(focus) { // focus.product
  // stuff and states
  const [size, SizeDropdown] = DropDown('Select Size', '', '', sizes);
  const [style, StyleGrid] = Styles(styles, styles[0]);
  const [q, QDrop] = DropDown('Select Quantity', '', '', quantity);

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
      <div className="columns overview">
        <div className="column is-one-third size">
          <strong>Product Overview</strong>
        </div>
        <div className="column">
          {current.slogan}
        </div>
      </div>
      <div className="columns share">
        <div className="column is-one-third size">
          <a href="https://www.facebook.com/">Facebook</a>
        </div>
        <div className="column is-one-third size">
          <a href="https://twitter.com/?lang=en">Twitter</a>
        </div>
        <div className="column is-one-third size">
          <a href="https://www.pinterest.com/">Pinterest</a>
        </div>
      </div>
      <div className="column styles">
        <strong>Style</strong>
        <StyleGrid />
      </div>
      <section className="section space" />
      <div className="columns">
        <div className="column size">
          <SizeDropdown />
        </div>
        <div className="column quantity">
          <QDrop />
        </div>
      </div>

      <div className="columns">
        <div className="column cart">
          <button type="button">Add to Bag +</button>
        </div>
        <div className="column favorite">
          <button type="button">
            <a href="#related">Favorite</a>
          </button>
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
