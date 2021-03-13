/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Image from './image';
import Details from './details';

// COMPONENT
const ProductOverview = (focus) => {
  // PROPS
  const { styles } = focus; // current product style data
  const { product } = focus; // current product
  const { reviews } = focus; // current reviews for product -> get count
  let startPhoto = focus.styles[0].photos;

  // STATES
  const [current, setCurrent] = useState({}); // current product
  const [styleData, setStyleData] = useState([]); // array of styles
  const [photos, setPhotos] = useState(startPhoto); // change photos on style selection

  // update state conditionally
  // if (startPhoto !== photos) setPhotos(startPhoto);

  // EFFECTS rerender state on prop change
  // set current product from props
  useEffect(() => {
    setCurrent(product);
  }, [focus]);

  // set style data from props
  useEffect(() => {
    setStyleData(styles);
  }, [focus]);

  // initialize current photo view to be from first style in collection
  useEffect(() => {
    setPhotos(startPhoto); // array of objects
  }, []);

  // Change photos on style selection in details
  // need to pass setPhotos back up...
  const handleStyleChange = (newValue) => {
    setPhotos(newValue.photos);
  };

  // DOM
  return (
    <div>
      <section className="hero is-grey-dark is-large">
        <div className="container is-fluid">
          <div className="tile is-ancestor has-text-centered is-12">
            <div className="tile">
            {/* <div className="tile is-12"> */}
              <div className="tile is-parent is-6 fixed-container">
                <div className="tile is-child box is-vertical-center">
                  <Image
                    current={photos}
                  />
                </div>
              </div>
              <div className="tile is-parent is-6 fixed-container">
                <div className="tile is-child box is-vertical-center">
                  <Details
                    onChange={(value) => handleStyleChange(value)}
                    styles={styles}
                    product={product}
                    reviews={reviews}
                    // add reviews for review count
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
