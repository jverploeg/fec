/* eslint-disable no-console */
import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import Image from './image';
import Details from './details';

// COMPONENT
const ProductOverview = (focus) => {
  // PROPS
  const { styles } = focus; // current product style data
  const { product } = focus; // current product
  const startPhoto = focus.styles[0].photos;
  // console.log({styles});

  // STATES
  const [current, setCurrent] = useState({}); // current product
  const [styleData, setStyleData] = useState([]); // array of styles
  const [currentStyle, setCurrentStyle] = useState({}); // initialize view with first style NEED?
  const [photos, setPhotos] = useState([]); // change photos on style selection

  // EFFECTS rerender state on prop change
  // set current product from props
  useEffect(() => {
    setCurrent(product);
  }, [focus]);

  // set style data from props
  useEffect(() => {
    setStyleData(styles);
  }, [focus]);

  // set current style to be shared between details and image
  useEffect(() => {
    setCurrentStyle(styles[0]);
  }, [focus]);

  // initialize current photo view to be from first style in collection
  useEffect(() => {
    // console.log(startPhoto);
    setPhotos(startPhoto); // array of objects
  }, [focus]);

  // Change photos on style selection in details
  // need to pass setPhotos back up...
  const handleStyleChange = (newValue) => {
    setPhotos(newValue);
  };
  // rerender on change... TODO: combine these/refine
  // useEffect(() => {
  //   setPhotos(photos);
  // }, [photos]);

  return (
    <div>
      <section className="hero is-grey-dark is-fullheight">
        <div className="container is-fluid is-maxwidth">
          <div className="tile is-ancestor has-text-centered is-12">
            <div className="tile is-12">
              <div className="tile is-parent is-6">
                <div className="tile is-child box is-vertical-center">
                  <Image styles={styles} start={startPhoto} current={photos} />
                </div>
              </div>
              <div className="tile is-parent is-6">
                <div className="tile is-child box is-vertical-center">
                  <Details
                    onChange={(value) => handleStyleChange(value)}
                    styles={styles}
                    product={product}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section space" />
    </div>
  );
};

// EXPORT
export default ProductOverview;
