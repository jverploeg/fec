import React, { useState, useEffect } from 'react';
import NewReviewModal from './NewReviewModal';
import StickyNavBar from './StickyNavBar.jsx';
import RatingCard from './RatingCard.jsx';
import ReviewList from './ReviewList.jsx';

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
  const [isNewReviewModalVisible, setIsNewReviewModalVisible] = useState('');

  // sticky navbar handler
  useEffect(() => {
    const offset = 2300;
    const initializeReviewListNavBar = () => {
      const header = document.getElementById("list-navbar");
      const sticky = header.offsetTop + offset;
      const scrollCallBack = window.addEventListener("scroll", () => {
        if (window.pageYOffset > sticky) {
          header.classList.add("list-sticky");
        } else {
          header.classList.remove("list-sticky");
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    };
    initializeReviewListNavBar();
    const initializeRatingCardNavBar = () => {
      const header = document.getElementById("rating-card");
      const sticky = header.offsetTop + offset;
      const scrollCallBack = window.addEventListener("scroll", () => {
        if (window.pageYOffset > sticky) {
          header.classList.add("card-sticky");
        } else {
          header.classList.remove("card-sticky");
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    };
    initializeRatingCardNavBar();
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
    } else {
      const reviewsToPush = allReviews.slice(displayedReviewIndex, displayedReviewIndex + 2);
      reviewsToPush.forEach((review) => tempReviews.push(review));
      setListedReviews(tempReviews);
      setDisplayedReviewIndex(displayedReviewIndex + 2);
    }
  };
  const openNewReviewModal = () => {
    setIsNewReviewModalVisible('is-active');
  };
  const closeNewReviewModal = () => {
    setIsNewReviewModalVisible('');
  };
  const getNewReview = () => {
    console.log('newReviewRef.current: ', newReviewRef.current);
    const review = newReviewRef.current.returnNewReview();
    setNewReviewData(review);
    console.log('review: ', review);
  };


  return (
    <>
      <section className="hero is-fullheight">

        <div id="Ratings-Reviews" className="columns is-mobile is-centered">

            {/* HORIZONTAL SPACER */}
            <div className="column is-1"/>

            {/* OVERALL RATING CARD AND REVIEWS LIST */}
            {/* OVERALL RATING CARD */}
            <div className="column is-5">
              <section className="hero is-grey-light">
                <div className="hero-head rating-card">
                  {/* INDIVIDUAL RATING CARD */}
                  <RatingCard product={currentProduct} reviews={allReviews} />
                </div>
              </section>
            </div>

            {/* <div className="column" /> */}

            {/* REVIEWS LIST AND NAV BAR */}
            <div className="column is-6">
              <section className="hero is-grey-light">

                <div className="hero-head">
                  {/* STICKY NAV BAR */}
                  <StickyNavBar />
                </div>

                <div className="hero-body">
                  {/* REVIEWS LIST COMPONENT */}
                  <div className="block review-list">
                    <ReviewList product={currentProduct} reviews={listedReviews} handleImageSelect={props.handleImageSelect}/>
                  </div>

                </div>
                <div className="hero-foot">
                  {/* MORE REVIEWS BUTTON */}
                  <div className="container has-text-centered">
                    <nav class="level">
                      {areAllReviewsListed
                        ?
                          null
                        :
                      <div className="level-item">
                        <button className="button is-primary" onClick={() => addTwoReviews()}>
                          Show More Reviews
                        </button>
                      </div>
                      }
                      <div className="level-item">
                      <button className="button is-primary" onClick={() => openNewReviewModal()}>Add New Review</button>
                      </div>
                    </nav>
                  </div>


                </div>

              </section>
            </div>

            {/* HORIZONTAL SPACER */}
            <div className="column"/>

        </div>
        {/* NEW REVIEW MODAL */}
        <div className="new-review-modal">

          <div className={`modal modal-fx-3dFlipVertical new-review-modal has-background-light ${isNewReviewModalVisible}`}>
            <div className="modal-content new-review-modal is-huge">
              <div className="container new-review-modal is-fluid">
                <NewReviewModal closeNewReviewModal={closeNewReviewModal} product={currentProduct} />
              </div>
            </div>
            <button
              className="modal-close is-large"
              onClick={() => closeNewReviewModal()}
              type="button"
              aria-label="close"
            />
          </div>
        </div>
      </section>

    </>
  );
};

// EXPORTS
export default RatingsReviews;
