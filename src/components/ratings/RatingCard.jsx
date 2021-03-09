import React, { useState } from 'react';
import OverallStarRating from '../helpers/OverallStarRating';
import { IoMdArrowDropdown } from 'react-icons/Io';
import { ProductContext } from '../context/product-context.js'

// import {ThemeContext} from './theme-context';

// function ThemeTogglerButton() {
//   // The Theme Toggler Button receives not only the theme
//   // but also a toggleTheme function from the context
//   return (
//     <ThemeContext.Consumer>
//       {({theme, toggleTheme}) => (
//         <button
//           onClick={toggleTheme}
//           style={{backgroundColor: theme.background}}>
//           Toggle Theme
//         </button>
//       )}
//     </ThemeContext.Consumer>
//   );
// }

// COMPONENT
const RatingCard = (props) => {
  // variables
  const currentProduct = props.product;
  const { aveRating, percentRecommended, ratingsBreakdown, reviewsMeta } = props.product;

  // console.log({ratingsBreakdown});
  const { total, max, numOfFiveStars, numOfFourStars, numOfThreeStars, numOfTwoStars, numOfOneStars } = ratingsBreakdown;

  const { Fit, Length, Comfort, Quality  } = reviewsMeta;
  const { fitRating } = Fit;
  const { lengthRating } = Length;
  const { qualityRating } = Quality;

  const allReviews = props.reviews;
  // console.log({ allReviews });

  // state
  const [listedReviews, setListedReviews] = useState([]);

  // functions
  const handleClick = () => {
    // setFilter(params); // params are filter criteria for all reviews. Can specify # of stars.
    allReviews.filter((review) => {

    })
  };

  return (
      <div className="box has-background-light">
        <div className="tile is-ancestor is-vertical">

          {/* TITLE */}
          <div className="tile">
            <h1 className="title is-3">RATINGS & REVIEWS</h1>
          </div>

          {/* AVERAGE RATING AND STAR BAR */}
          <nav className="level has-text-centered">
            <div className="level-left has-text-centered">
              <div className="tile is-parent is-pulled-left has-text-centered">
                <div className="tile is-child is-pulled-left"><h1 className="title">{aveRating}</h1></div>
                <div className="tile is-child is-pulled-left has-text-centered"><OverallStarRating product={currentProduct}/></div>
              </div>
            </div>
          </nav>

          {/* PERCENTAGE OF POSITIVE RECOMMENDATIONS */}
          <div className="tile">
            <h6 className="subtitle is-6">{percentRecommended}% of {total} reviews recommend this product</h6>
          </div>

          {/* VISUAL REPRESENTATION OF RATINGS */}
          <div className="tile">
            <h4 className="subtitle">Rating Breakdown</h4>
          </div>
          <div className="tile is-vertical">

            <div className="tile is-parent">
              <div className="tile is-child is-3"><p>5 stars</p></div>
              <div className="tile is-child is-8">
                <progress class="progress is-success is-small" value={numOfFiveStars} max={total}>5 stars</progress>
              </div>
              <div className="tile is-child is-1"><h6 className="subtitle is-6 is-pulled-right">{numOfFiveStars}</h6></div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child is-3"><p>4 stars</p></div>
              <div className="tile is-child is-8">
                <progress class="progress is-success is-small" value={numOfFourStars} max={total}>4 stars</progress>
              </div>
              <div className="tile is-child is-1"><h6 className="subtitle is-6 is-pulled-right">{numOfFourStars}</h6></div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child is-3"><p>3 stars</p></div>
              <div className="tile is-child is-8">
                <progress class="progress is-success is-small" value={numOfThreeStars} max={total}>3 stars</progress>
              </div>
              <div className="tile is-child is-1"><h6 className="subtitle is-6 is-pulled-right">{numOfThreeStars}</h6></div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child is-3"><p>2 stars</p></div>
              <div className="tile is-child is-8">
                <progress class="progress is-success is-small" value={numOfTwoStars} max={total}>2 stars</progress>
              </div>
              <div className="tile is-child is-1"><h6 className="subtitle is-6 is-pulled-right">{numOfTwoStars}</h6></div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child is-3"><p>1 star</p></div>
              <div className="tile is-child is-8">
                <progress className="progress is-success is-small is-pulled-right" value={numOfOneStars} max={total}>1 star</progress>
              </div>
              <div className="tile is-child is-1"><h6 className="subtitle is-6 is-pulled-right">{numOfOneStars}</h6></div>
            </div>

          </div>

          {/* FIT AND COMFORT RATINGS */}
          <div className="tile is-parent is-vertical">
            <article className="tile is-child"><p>Fit</p></article>
            <article className="tile is-grey-dark is-small">
              <IoMdArrowDropdown
                className="arrow"
                size={30}
                color="is-primary"
              />
            </article>
              <div className="tile is-link"></div>
          </div>

        </div>
      </div>
  );
};

// EXPORTS
export default RatingCard;
