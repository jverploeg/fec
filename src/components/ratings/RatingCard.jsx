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
          <div className="tile is-child">
            <h1 className="title is-2">RATINGS & REVIEWS</h1>
          </div>

          {/* AVERAGE RATING AND STAR BAR */}
          <div className="tile is-child">
            <div className="container has-text-centered">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <h1 className="title is-1">{aveRating}</h1>
                  </div>
                  <div className="level-item">
                    <OverallStarRating product={currentProduct} />
                  </div>
                </div>
              </nav>
            </div>
          </div>

          {/* PERCENTAGE OF POSITIVE RECOMMENDATIONS */}
          <div className="tile is-child">
            <p className="has-text-link">{percentRecommended}% of {total} reviews recommend this product</p>
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
          <div className="tile is-parent is-vertical">
            <article className="tile is-child">
              <p className="has-text-primary is-size-4">Fit</p>
            </article>
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
