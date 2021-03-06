import React from 'react';
import ReviewEntry from './ReviewEntry';

// COMPONENT
const ReviewList = (props) => {
  // variables
  const currentProduct = props.product;
  const listedReviews = props.reviews;

  return (
    <>
      <div className="tile is-ancestor is-vertical">
        {listedReviews.map((review) => {
          return ( <ReviewEntry product={currentProduct} review={review} handleImageSelect={props.handleImageSelect}/> );
        })}
      </div>

    </>
  );
};

// EXPORTS
export default ReviewList;
