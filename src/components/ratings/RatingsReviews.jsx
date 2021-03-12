import React, { useState, useEffect } from 'react';
import OverallStarRating from '../helpers/OverallStarRating.jsx';
import NewReview from './NewReview.jsx';
import DropDown from '../helpers/dropDown.jsx';
import NewReviewModal from './NewReviewModal';
import StickyNavBar from './StickyNavBar.jsx';
import RatingCard from './RatingCard.jsx';
import { FiArrowUpCircle } from 'react-icons/fi';
import { ProductContext } from '../context/product-context.js'
import ReviewList from './ReviewList.jsx';
// test

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
  const [imageSelected, setIsImageSelected] = useState(null);
  const newReviewModalRef = React.useRef();

  const openNewReviewModal = () => {
    // console.log(newReviewModalRef);
    // console.log(newReviewModalRef.current);
    // newReviewModalRef.current.openModal();
  };
  const closeNewReviewModal = () => {
    // console.log(newReviewModalRef);
    // console.log(newReviewModalRef.current);
    newReviewModalRef.current.closeModal();
  };

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
    const header = document.getElementById("rating-card");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky-card");
      } else {
        header.classList.remove("sticky-card");
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
    <>
      <section className="hero is-fullheight">

        <div id="Ratings-Reviews" className="columns is-mobile is-centered">

            {/* HORIZONTAL SPACER */}
            <div className="column"/>

            {/* OVERALL RATING CARD AND REVIEWS LIST */}
            {/* OVERALL RATING CARD */}
            <div className="column is-4">
              <section className="hero is-grey-light">
                <div className="hero-body">
                  {/* INDIVIDUAL RATING CARD */}
                  <RatingCard product={currentProduct} reviews={allReviews}/>
                </div>
              </section>
            </div>

            <div className="column" />

            {/* REVIEWS LIST AND NAV BAR */}
            <div className="column is-7">
              <section className="hero is-grey-light">

                <div className="hero-head">
                  {/* STICKY NAV BAR */}
                  <StickyNavBar />
                </div>

                <div className="hero-body">
                  {/* REVIEWS LIST COMPONENT */}
                  <div className="block">
                    <ReviewList product={currentProduct} reviews={listedReviews} handleImageSelect={props.handleImageSelect}/>
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
                            Show More Reviews
                          </button>
                        </div>
                        <div className="level-item">
                        <button className="button is-primary" onClick={openNewReviewModal}>Add New Review</button>
                        </div>
                      </nav>
                    </div>
                  }


                </div>

              </section>
            </div>

            {/* HORIZONTAL SPACER */}
            <div className="column"/>

        </div>

      </section>
      <div id="new-review-modal" className="new-review-modal">
        <NewReviewModal product={null} ref={newReviewModalRef}>
          <h1 className="title is-3">Add Review</h1>
          <p className="is-size-6">TESTING TESTING</p>
        </NewReviewModal>
      </div>
    </>
  );
};

// EXPORTS
export default RatingsReviews;
