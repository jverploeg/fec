import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

// COMPONENT
const RatingSlider = (props) => {
  // variables
  const reviewsMetaObj = props.product.reviewsMeta.characteristics;
  const reviewsMetaKeys = Object.keys(reviewsMetaObj);

  return (
    <>

    {reviewsMetaKeys.map((key) => {
      const ratingParam = reviewsMetaObj[key];
      const tempValue = ratingParam.value;
      const roundedValue = Math.round(tempValue).toFixed(0);

      let styleTag = '';
      if (roundedValue == 1 ) {
        styleTag = 'rating-1'
      } else if (roundedValue == 2 ) {
        styleTag = 'rating-2'
      } else if (roundedValue == 3 ) {
        styleTag = 'rating-3'
      } else if (roundedValue == 4 ) {
        styleTag = 'rating-4'
      } else if (roundedValue == 5 ) {
        styleTag = 'rating-5'
      }

      let scaleParams = [];
      if (key === 'Comfort' || key === 'Quality') {
        scaleParams = ['worst', 'poor', 'average', 'better', 'great'];
      } else if (key === 'Fit' || key === 'Length') {
        scaleParams = ['too small', 'tight', 'snug', 'loose', 'too big'];
      }

      return (
        <div className="tile is-parent is-vertical">
          <div className="tile is-parent pb-0 mb-0">
            <p className="has-text-primary is-size-5 pb-0 mb-0">{key}</p>
          </div>
          <div className="tile is-child rating-container-1 pb-0 mb-0">
              <IoMdArrowDropdown
                className={`arrow rating-container-2 pt-0 mb-0 ${styleTag}`}
                size={25}
                color="black"
              />
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              <div className="box has-background-grey-dark py-2"></div>
            </div>
          </div>
          <div className="tile is-parent pb-5">
            <div className="tile is-child">
              <div className="level">
                {scaleParams.map((param) => {
                  return (
                    <div className="level-item">
                      <span className="has-text-primary is-size-7">{param}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    })}

    </>
  );
};

// EXPORTS
export default RatingSlider;
