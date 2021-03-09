import React, { useState, useEffect } from 'react';
import OverallStarRating from '../helpers/OverallStarRating';
import NewReview from './NewReview';
import DropDown from '../helpers/dropDown';
import StickyNavBar from './StickyNavBar';
import RatingCard from './RatingCard';
import { FiArrowUpCircle } from 'react-icons/fi';
import { ProductContext } from '../context/product-context.js'
import ReviewList from './ReviewList';

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

// export default ThemeTogglerButton;

// COMPONENT
const RatingsReviews = (props) => {
  // variables
  const currentProduct = props.product;
  const allReviews = props.reviews;
  const initialReviews = allReviews.slice(0, 2);

  // state
  const [listedReviews, setListedReviews] = useState([]);
  const [displayedReviewIndex, setDisplayedReviewIndex] = useState(2);
  const [areAllReviewsListed, setAreAllReviewsListed] = useState(false);
  // console.log({ initialReviews });
  // console.log({ listedReviews });

  // sticky navbar handler
  useEffect(() => {
    const header = document.getElementById("navbar");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  useEffect(() => {
    setListedReviews(initialReviews);
  }, [props.reviews]);

  // Functions
  const addTwoReviews = () => {
    const tempReviews = listedReviews;
    if (allReviews.length - listedReviews.length <= 2) {
      setListedReviews(allReviews);
      setAreAllReviewsListed(true);
      // TODO remove 'more reviews' button
    } else {
      const reviewsToPush = allReviews.slice(displayedReviewIndex, displayedReviewIndex + 2);
      reviewsToPush.forEach((review) => tempReviews.push(review));
      setListedReviews(tempReviews);
      setDisplayedReviewIndex(displayedReviewIndex + 2);
    }
  };

  return (
  <section className="hero is-fullheight">

    <div id="Ratings-Reviews" className="columns is-mobile is-centered">

        {/* HORIZONTAL SPACER */}
        <div className="column is-1"/>

        {/* OVERALL RATING CARD AND REVIEWS LIST */}
        {/* OVERALL RATING CARD */}
        <div className="column is-3">
          <section className="hero is-grey-light">
            <div className="hero-body">
              {/* INDIVIDUAL RATING CARD */}
              <RatingCard product={currentProduct} reviews={allReviews}/>
            </div>
          </section>
        </div>

        <div className="column is-1" />

        {/* REVIEWS LIST AND NAV BAR */}
        <div className="column is-6.5">
          <section className="hero is-grey-light">

            <div className="hero-head">
              {/* STICKY NAV BAR */}
              <StickyNavBar />
            </div>

            <div className="hero-body">
              {/* REVIEWS LIST COMPONENT */}
              <div className="block">
                <ReviewList product={currentProduct} reviews={listedReviews} />
              </div>

            </div>
            <div className="hero-foot">
              {/* MORE REVIEWS BUTTON */}
              {areAllReviewsListed
                ?
                  null
                :
                <div className="container has-text-centered">
                  <nav class="level">
                    <div className="level-item">
                      <button className="button is-primary" onClick={() => addTwoReviews()}>
                        Show more Reviews
                      </button>
                    </div>
                  </nav>
                </div>
              }

            </div>

          </section>
        </div>

        {/* HORIZONTAL SPACER */}
        <div className="column is-1"/>

    </div>

  </section>


  );
};

// EXPORTS
export default RatingsReviews;
