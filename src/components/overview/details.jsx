/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useCallback } from 'react';
// helpers
import DropDown from '../helpers/dropDown';
import OverallStarRating from '../helpers/OverallStarRating';
// import Styles from '../helpers/styles';
// import StylesGrid from '../helpers/stylesGrid';

// variables
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
// temp quantity
const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// TODO!!!!! modify styles, q, sizes to use the data gathered from styles route

const Details = (focus) => { // focus.product and focus.styles and focus.changePhoto
  const { styles } = focus;
  const { product } = focus;
  // const { changePhoto } = focus; // needs to be passed to style grid...

  // TODO; make these dynamic...
  const [size, SizeDropdown] = DropDown('Select Size', '', '', sizes);
  const [q, QDrop] = DropDown('Select Quantity', '', '', quantity);


  // STATES
  const [styleGrid, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({}); // styles[0]);
  const [current, setCurrent] = useState(product);


  // EFFECTS
  // styles
  useEffect(() => {
    setStyles(styles);
  }, [focus]);
  // initialize currentstyle to the first one in collection
  useEffect(() => {
    setCurrentStyle(styles[0]);
  }, [focus]);
  // current product
  useEffect(() => {
    setCurrent(product);
  }, [focus.product]);

  // FUNCTIONS
  // pass down to details to return the currently selected style. useEffect???
  // console.log({newValue});
  // useEffect(() => {
  //   setPhotos(newValue);
  // }, [handleStyleChange]);
  // console.log({photos});



  // const handleChange= (event) => {
  //   changePhoto(event);
  //   useEffect(() => {
  //     setCurrentStyle(event);
  //   });
  // };

  // EVENT HANDLERS
  const changeStyle = (event) => {
    const newFocus = event.item;
    // console.log({newFocus});
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
        {currentStyle.name}
        {/* <StylesGrid
          styles={styles}
          onChange={(value) => handleChange(value)}
        /> */}
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
};

export default Details;

// useEffect(() => {
//   setCurrentStyle(changePhoto);
// }, [focus.changePhoto]);

// FUNCTIONS/LISTENERS
// do we need to declare changePhoto here?

// const [newStyle, NewStyleGrid] = Styles2(focus.styles.results, focus.styles.results[0]);
// const setCurrent =
// pass style state back up to parent
// focus.setPhotos(newStyle);
// useEffect(() => {
//   focus.setPhotos(newStyle);
// });

// const callback = () => {
//   styleCallback.setPhotos(newStyle);
// };
// styleCallback.setPhotos(newStyle);
// const [photos, setPhotos] = focus.setPhotos(newStyle);

// const details = () => (