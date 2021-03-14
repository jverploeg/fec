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
  const startPhoto = styles[0].photos;

  // STATES
  const [current, setCurrent] = useState({}); // current product
  const [styleData, setStyleData] = useState([]); // array of styles
  const [photos, setPhotos] = useState(startPhoto); // change photos on style selection

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
      <section className="hero is-grey-dark is-large justify-content-center">
        <div className="overview-container">
          <div className="tile is-ancestor has-text-centered is-12">
            <div className="tile">
              <div className="tile is-parent is-7">
                <Image
                  current={photos}
                />
              </div>
              <div className="tile is-parent is-5 fixed-container">
                <div className="tile is-child box">
                  <Details
                    onChange={(value) => handleStyleChange(value)}
                    styles={styles}
                    product={product}
                    reviews={reviews}
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
