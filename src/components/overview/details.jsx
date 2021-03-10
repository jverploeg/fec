import React, { useState, useEffect, useCallback } from 'react';
// helpers
import DropDown from '../helpers/dropDown';
import OverallStarRating from '../helpers/OverallStarRating';
// import Styles from '../helpers/styles';
import Styles2 from '../helpers/styles2';

// variables
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
// temp quantity
const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// TODO!!!!! modify styles, q, sizes to use the data gathered from styles route

function Details(focus) { // focus.product and focus.styles
  const [size, SizeDropdown] = DropDown('Select Size', '', '', sizes);
  // const [style, StyleGrid] = Styles(styles, styles[0]);
  const [q, QDrop] = DropDown('Select Quantity', '', '', quantity);

  const [newStyle, NewStyleGrid] = Styles2(focus.styles.results, focus.styles.results[0]);

  const [current, setCurrent] = useState(focus.product);

  // const setCurrent =
  // pass style state back up to parent
  // focus.setPhotos(newStyle);

  useEffect(() => {
    focus.setPhotos(newStyle);
  });

  // const callback = () => {
  //   styleCallback.setPhotos(newStyle);
  // };
  // styleCallback.setPhotos(newStyle);
  // const [photos, setPhotos] = focus.setPhotos(newStyle);

  // const details = () => (
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
          $
          {newStyle.original_price}
        </div>
      </div>
      <div className="column slogan">
        <div className="column is-italic has-text-weight-semibold">
          <strong>{current.slogan}</strong>
        </div>
      </div>
      <div className="column description">
        <article>{focus.product.description}</article>
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
      {/* <section className="section space" /> */}
      <div className="column styles">
        <strong>Styles</strong>
        {newStyle.name}
        <NewStyleGrid />
      </div>
      {/* <section className="section space" /> */}
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
  // return [details, focus.setPhotos(newStyle)];
}

export default Details;
