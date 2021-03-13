/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useCallback } from 'react';

import DropDown from '../helpers/sizeQ';
import OverallStarRating from '../helpers/OverallStarRating';


const Details = (focus) => { // focus.product and focus.styles and focus.changePhoto
  const { styles } = focus;
  const { product } = focus;
  const { reviews } = focus;


  // STATES
  const [styleGrid, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({}); // styles[0]);
  const [current, setCurrent] = useState(product);
  const [select, setButton] = useState(''); // sets the state for styling currentStyle

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

  // trying to get the default style to begin with the effect. not working
  // const start = document.getElementById('0');
  // useEffect(() => {
  //   if (start) {
  //     start.classList.toggle('selected');
  //     setButton(start);
  //     // console.log(select);
  //     // start.classList.toggle('selected');
  //   }
  // }, [focus]);


  const selected = (e) => {
    const target = e.currentTarget;
    // console.log({select});
    // console.log({target});
    // if nothing selected yet
    if (!select) {
      setButton(target);
      target.classList.toggle('selected');
    } else if (select !== target) {
      // toggle off old
      select.classList.toggle('selected');
      // update state
      setButton(target);
      // toggle new
      target.classList.toggle('selected');
    }
  };

  // EVENT HANDLERS
  // on style change
  const changeStyle = (event) => {
    const newFocus = event.item;
    setCurrentStyle(newFocus);
    focus.onChange(newFocus);
  };
  // check for data on prices/description
  let price = currentStyle.sale_price;
  let original = currentStyle.original_price;
  let strikethrough = false;
  if (price) { strikethrough = true; }
  if (!price) { price = currentStyle.original_price; }

  return (
    <div className="has-text-primary">
      <div className="columns star">
        <div className="column">
          <strong>Ratings and Reviews</strong>
        </div>
        <div className="column">
          <OverallStarRating product={current} />
        </div>
        <div className="column">
          <a className="review-link" href="#ratings">Read all {reviews} Reviews</a>
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
          <strong>$:   </strong>
          {price}
        </div>
        <div className="column is-one-third size">
          {strikethrough &&
            <s className="redStrike">{original}</s>
          }
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
      <div className="column is-italic has-text-weight-bold">
        {currentStyle.name}
      </div>
      <div>
        <div className="columns is-justify-content-center">
          <div className="level">
            {styles && styles.map((item, index) => (
              <div className="level-item">
                <div className="column">
                  <figure className="fixed-thumb" onClick={(e) => selected(e)}>
                    <img
                      className="thumb-image"
                      id={index}
                      src={item.photos[0].thumbnail_url}
                      alt=""
                      onClick={() => changeStyle({ item })}
                    />
                  </figure>
                </div>
              </div>
            ))}
          </div>
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
