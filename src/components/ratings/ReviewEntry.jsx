import React, { useState, useEffect } from 'react';
import store2 from 'store2';
import OverallStarRating from '../helpers/OverallStarRating';

// COMPONENT
const ReviewEntry = (props) => {
  // variables
  const currentProduct = props.product;
  const { review } = props;
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
  let summary = review.summary;
  let body = review.body;

  // state
  const [reviewBody, setReviewBody] = useState('');
  const [reviewSummary, setReviewSummary] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [isBodyTruncated, setIsBodyTruncated] = useState(false); // TODO switch to false
  const [isReviewBodyExpanded, setIsReviewBodyExpanded] = useState(false);

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



  console.log({ review });
  console.log('store2: ', store2());

  return (
    <>
      <div class="box has-background-light">
        <div className="tile is-parent is-vertical">


          <div className="tile is-child">
            <div className="container has-text-centered">
              <nav class="level">
                <div className="level-left">
                  <div className="level-item">
                    <OverallStarRating product={starRatingProduct} />
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <h6 className="title is-6 is-pulled-right">{month + ' ' + day + ', ' + year}</h6>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="tile is-child">
            <h6 className="title is-6">{reviewSummary}</h6>
          </div>
          <div className="tile is-child">
            <p className="has-text-primary">{reviewBody}</p>
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

        </div>
      </div>

    </>
  );
};

// EXPORTS
export default ReviewEntry;
