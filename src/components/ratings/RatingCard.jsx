import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import OverallStarRating from '../helpers/OverallStarRating';
import RatingSlider from './RatingSlider';
import { ProductContext } from '../context/product-context.js'

// COMPONENT
const RatingCard = (props) => {
  // variables
  const currentProduct = props.product;
  const allReviews = props.reviews;
  const { aveRating, percentRecommended, ratingsBreakdown } = props.product;

  const { total, max, numOfFiveStars, numOfFourStars, numOfThreeStars, numOfTwoStars, numOfOneStars } = ratingsBreakdown;


  // state
  const [listedReviews, setListedReviews] = useState([]);

  // functions
  const handleClick = () => {
    // setFilter(params); // params are filter criteria for all reviews. Can specify # of stars.
    allReviews.filter((review) => {

    })
  };

  return (
    <div id="rating-card" className="box has-background-light">
      <div className="tile is-ancestor is-vertical">

        {/* TITLE */}
        <div className="tile is-parent pb-1 mb-1">
          <h1 className="has-text-primary is-size-4">RATINGS & REVIEWS</h1>
        </div>

        {/* AVERAGE RATING AND STAR BAR */}
        <div className="tile is-child pt-1 mt-1">
          <div className="container has-text-centered">
            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  <h1 className="title is-1">{aveRating}</h1>
                </div>
                <div className="level-item pb-4">
                  <OverallStarRating product={currentProduct} />
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* PERCENTAGE OF POSITIVE RECOMMENDATIONS */}
        <div className="tile is-child">
          <p className="has-text-link is-size-7">{percentRecommended}% of {total} reviews recommend this product</p>
        </div>

        {/* VISUAL REPRESENTATION OF RATINGS */}
        <div className="tile is-parent">
          <h4 className="title is-5 has-text-primary">Rating Breakdown</h4>
        </div>
        <div className="tile is-parent is-vertical">

          <div className="tile is-parent">
            <div className="tile is-child">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <p className="has-text-primary pr-2">5 stars</p>
                  </div>
                </div>
                <div className="level-item">
                  <progress className="progress is-success is-small" value={numOfFiveStars} max={total}>5 stars</progress>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <p className="has-text-primary is-size-7 pl-2">{numOfFiveStars}</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <p className="has-text-primary pr-2">4 stars</p>
                  </div>
                </div>
                <div className="level-item">
                  <progress className="progress is-success is-small" value={numOfFourStars} max={total}>4 stars</progress>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <p className="has-text-primary is-size-7 pl-2">{numOfFourStars}</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <p className="has-text-primary pr-2">3 stars</p>
                  </div>
                </div>
                <div className="level-item">
                  <progress className="progress is-success is-small" value={numOfThreeStars} max={total}>3 stars</progress>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <p className="has-text-primary is-size-7 pl-2">{numOfThreeStars}</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <p className="has-text-primary pr-2">2 stars</p>
                  </div>
                </div>
                <div className="level-item">
                  <progress className="progress is-success is-small" value={numOfTwoStars} max={total}>2 stars</progress>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <p className="has-text-primary is-size-7 pl-2">{numOfTwoStars}</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <p className="has-text-primary pr-2">1 star</p>
                  </div>
                </div>
                <div className="level-item">
                  <progress className="progress is-success is-small" value={numOfOneStars} max={total}>1 star</progress>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <p className="has-text-primary is-size-7 pl-2">{numOfOneStars}</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>

        </div>
        <div className="tile is-child"></div>

        {/* FIT AND COMFORT RATINGS */}
        <RatingSlider product={currentProduct} />

      </div>
    </div>
  );
};

// EXPORTS
export default RatingCard;
