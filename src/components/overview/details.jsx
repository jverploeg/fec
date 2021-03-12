/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useCallback } from 'react';

import DropDown from '../helpers/sizeQ';
import OverallStarRating from '../helpers/OverallStarRating';


const Details = (focus) => { // focus.product and focus.styles and focus.changePhoto
  const { styles } = focus;
  const { product } = focus;

  // STATES
  const [styleGrid, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({}); // styles[0]);
  const [current, setCurrent] = useState(product);

  // EFFECTS
  // styles
  useEffect(() => {
    setStyles(styles);
  }, [focus.styles]);

  // initialize currentstyle to the first one in collection
  useEffect(() => {
    setCurrentStyle(styles[0]);
  }, [focus.styles]);
  // current product
  useEffect(() => {
    setCurrent(product);
  }, [focus.product]);

  // EVENT HANDLERS
  // on style change
  const changeStyle = (event) => {
    const newFocus = event.item;
    setCurrentStyle(newFocus);
    focus.onChange(newFocus);
  };

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
          {/* {TODO: determine if price discounted} */}
          {currentStyle.original_price}
        </div>
      </div>
      <div className="column slogan">
        <div className="column is-italic has-text-weight-semibold">
          <strong>{current.slogan}</strong>
        </div>
      </div>
      <div className="column description">
        <article>{current.description}</article>
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
      </div>
      <div className="column is-italic has-text-weight-semibold">
        {currentStyle.name}
      </div>
      <div>
        <div className="columns">
          {styles && styles.map((item) => (
            <div className="column" key={item.style_id}>
              <figure
                className="image is-64x64"
                key={item.style_id}
                value={item}
                // onClick={() => handleChange({ item })}
              >
                <img
                  className="is-rounded is-focused"
                  src={item.photos[0].thumbnail_url}
                  alt=""
                  onClick={() => changeStyle({ item })}
                />
                <strong>{item.name}</strong>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <section className="section space" />
      <div>
        {!!currentStyle && <DropDown style={currentStyle} />}
      </div>
    </div>
  );
};

export default Details;
/* <div className="columns">
  <div className="column cart">
    <button type="button">Add to Bag +</button>
  </div>
  <div className="column favorite">
    <button type="button">
      <a href="#related">Favorite</a>
    </button>
  </div>
</div> */
