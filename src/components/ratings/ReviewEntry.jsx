import React, { useState, useEffect } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import OverallStarRating from '../helpers/OverallStarRating';

// COMPONENT
const ReviewEntry = (props) => {
  // variables
  let { review } = props;
  const starRatingProduct = {
    aveRating: review.rating,
  };
  const { date } = props.review;
  const dateArray = date.split('T')[0].split('-');
  const year = dateArray[0];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = parseInt(dateArray[1]);
  month = months[month];
  const day = dateArray[2];
  let { summary, body } = review;
  const reviewer = review.reviewer_name;
  const isRecommended = review.recommend;
  const response = review.response;


  // state
  const [reviewBody, setReviewBody] = useState('');
  const [reviewSummary, setReviewSummary] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [isBodyTruncated, setIsBodyTruncated] = useState(false);
  const [reviewHelpfulYesCount, setReviewHelpfulYesCount] = useState(review.helpfulness);
  const [reviewHelpfulNoCount, setReviewHelpfulNoCount] = useState(0); // no count for not helpful in incoming API data. Need to store locally.
  const [hasSelectedHelpfulButton, setHasSelectedHelpfulButton] = useState(false);
  const [isImageModalVisible, setIsImageModalVisible] = useState('');
  const [selectedImage, setSelectedImage] = useState({url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'});

  // effects
  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      if (summary.length > 60) {
        summary = summary.slice(0, 56) + '...';
        setReviewSummary(summary);
      } else {
        setReviewSummary(summary);
      }

      if (body.length > 250) {
        body = body.slice(0, 246) + '...';
        setReviewBody(body);
        setIsBodyTruncated(true);
      } else {
        setReviewBody(body);
        // setIsBodyTruncated(false);
      }
    }

    return () => setIsMounted(false);
  }, [isMounted]);

  // functions
  const handleExpandReviewBody = () => {
    setIsBodyTruncated(false);
    setReviewBody(body);
  };
  const handleIncreaseReviewHelpfulCount = (e) => {
    const target = e.target.name;
    if (!hasSelectedHelpfulButton && target === 'helpful') {
      const result = reviewHelpfulYesCount + 1;
      setReviewHelpfulYesCount(result);
      setHasSelectedHelpfulButton(true);
    } else if (!hasSelectedHelpfulButton && target === 'notHelpful') {
      const result = reviewHelpfulNoCount + 1;
      setReviewHelpfulNoCount(result);
      setHasSelectedHelpfulButton(true);
    }
  };
  const open = () => {
    setIsImageModalVisible('is-active');
    // console.log({ isVisible });
  };
  const close = () => {
    setIsImageModalVisible('');
  };
  const change = (e) => {
    e.persist();
    const url = e.target.src;
    const image = {
      url: url,
    };
    setSelectedImage(image);
    setIsImageModalVisible('is-active');
  };

  return (
    <>
      <div className="box rating-list has-background-light">
        <div className="tile is-ancestor is-vertical">

          {/* STAR RATING, USERNAME, DATE */}
          <div className="tile is-child">
            <div className="container has-text-centered">
              <nav className="level">
                <div className="level-left">
                  <div className="level-item">
                    <OverallStarRating product={starRatingProduct} />
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <div className="tile is-parent is-vertical">
                      <div className="tile is-parent">
                        <p className="level-item has-text-primary is-size-7">{reviewer + ', ' + month + ' ' + day + ', ' + year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {/* REVIEW SUMMARY */}
          <div className="tile is-child">
            <h6 className="title is-4">{reviewSummary}</h6>
          </div>
          {/* REVIEW BODY */}
          <div className="tile is-child is-flex-shrink-5 is-flex-wrap-wrap">
            <p className="has-text-primary is-size-6">{reviewBody}</p>
          </div>
          {isBodyTruncated
            ?
              <div className="tile is-child">
                <button className="button is-primary" onClick={() => handleExpandReviewBody()}>
                  Show more
                </button>
              </div>
            :
              null
          }

          {/* IMAGES */}
          <div className="tile is-parent">
            <div className="tile is-child">
              <nav className="level">
                  {review.photos.map((photo) => {
                    return (
                      <div className="level-item">
                        <div className="box mx-0 my-0 px-0 py-0">
                          <figure className="image is-128x128 button modal-button" value={photo.url} data-target="#modal" onClick={(e) => change(e)}>
                            <img className="center-cropped" src={photo.url}></img>
                          </figure>
                        </div>
                      </div>
                    );
                  })}
              </nav>
            </div>
          </div>

          {/* IMAGE MODAL */}
          <div className="review-image-modal">
            <div className={`modal modal-fx-3dFlipVertical ${isImageModalVisible}`}>
              <div className="modal-content is-huge">
                <div className="container is-fluid">
                  <img
                    // giclassName={`image-zoom ${zoom}`}
                    className="image"
                    // title="focus"
                    src={selectedImage.url}
                  />
                </div>
              </div>
              <button
                className="modal-close is-large"
                onClick={() => close()}
                type="button"
                aria-label="close"
              />
            </div>
          </div>

          {/* SPACER */}
          <div className="tile is-child"></div>
          <div className="tile is-child"></div>

          {/* RECOMMENDED? */}
          {isRecommended
            ?
              <div className="tile is-child">
                <nav className="level">
                  <div className="level-left">
                    <p className="level-item has-text-link is-size-7">I recommend this product</p>
                    <IoIosCheckmarkCircle className="level-item checkmark" size={20} color="is-link" />
                  </div>
                </nav>
              </div>
            :
              null
          }

          {/* RESPONSE */}
          {response
            ?
              <div className="tile is-child">
                <div className="box has-background-grey-light">
                  <nav className="level">
                    <div className="level-right">
                      <div className="tile is-parent is-vertical">
                        <div className="tile">
                          <p className="level-item has-text-white is-size-5">Response from seller</p>
                        </div>
                        <div className="tile">
                          <p className="level-item subtitle is-7">{response}</p>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            :
              null
          }

          {/* RATING HELPFULNESS */}
          <div className="tile is-child">
            <nav className="level">
              <div className="level-right">
                <p className="level-item has-text-link is-size-7">Was this review helpful?</p>
                <a name="helpful" className="level-item has-text-grey-light is-size-7" onClick={(e) => {handleIncreaseReviewHelpfulCount(e); }}>{'Yes (' + reviewHelpfulYesCount + ')'}</a>
                <a name="notHelpful" className="level-item has-text-grey-light is-size-7" onClick={(e) => {handleIncreaseReviewHelpfulCount(e); }}>{'No (' + reviewHelpfulNoCount + ')'}</a>
              </div>
            </nav>
          </div>

        </div>
      </div>

    </>
  );
};

// EXPORTS
export default ReviewEntry;
