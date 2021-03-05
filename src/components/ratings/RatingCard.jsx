import React, { useState } from 'react';
import OverallStarRating from '../helpers/OverallStarRating';
import { IoMdArrowDropdown } from 'react-icons/Io';

// COMPONENT
const RatingCard = (props) => {
  const currentProduct = props.product;
  const { aveRating, percentRecommended, ratingsBreakdown, reviewsMeta } = props.product;

  const { total, max, numOfFiveStars, numOfFourStars, numOfThreeStars, numOfTwoStars, numOfOneStars } = ratingsBreakdown;

  const { Fit, Length, Comfort, Quality  } = reviewsMeta;
  const { fitRating } = Fit;
  const { lengthRating } = Length;
  const { qualityRating } = Quality;

  return (
      <div className="tile is-ancestor is-vertical">

        {/* TITLE */}
        <div className="tile">
          <h2 className="subtitle">RATINGS & REVIEWS</h2>
        </div>

        {/* AVERAGE RATING AND STAR BAR */}
        <div className="tile is-parent">
          <div className="tile is-child"><h1 className="title">{aveRating}</h1></div>
          <div className="tile is-child"><OverallStarRating product={currentProduct}/></div>
          <div className="tile is-child is-3"></div>
        </div>

        {/* PERCENTAGE OF POSITIVE RECOMMENDATIONS */}
        <div className="tile">
          <p>{percentRecommended}% of reviews recommend this product</p>
        </div>

        {/* VISUAL REPRESENTATION OF RATINGS */}
        <div className="tile is-parent">
          <div className="tile is-child"><p>5 stars</p></div>
          <div className="tile is-child">
            <progress class="progress is-primary is-small" value={numOfFiveStars} max={max}>5 stars</progress>
          </div>
        </div>
        <div className="tile">
          <div className="tile"><p>4 stars</p></div>
          <span>
            <progress class="progress is-primary is-small" value={numOfFourStars} max={max}>4 stars</progress>
          </span>
        </div>
        <div className="tile">
          <div className="tile"><p>3 stars</p></div>
          <span>
            <progress class="progress is-primary is-small" value={numOfThreeStars} max={max}>3 stars</progress>
          </span>
        </div>
        <div className="tile">
          <div className="tile"><p>2 stars</p></div>
          <span>
            <progress class="progress is-primary is-small" value={numOfTwoStars} max={max}>2 stars</progress>
          </span>
        </div>
        <div className="tile">
          <div className="tile"><p>1 star</p></div>
          <span>
            <progress className="progress is-primary is-small" value={numOfOneStars} max={max}>1 star</progress>
          </span>
        </div>

        {/* FIT AND COMFORT RATINGS */}
        <div className="tile is-parent is-vertical">
          <div className="tile"><p>Fit</p></div>
          <div className="tile is-child is-grey-dark box">
            <IoMdArrowDropdown
              className="arrow"
              size={30}
              color="is-primary"
            />
          </div>
            <div className="tile is-link"></div>
        </div>

      </div>
  );
};

// EXPORTS
export default RatingCard;
