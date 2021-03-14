import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { FaStar } from 'react-icons/fa';

// COMPONENT
const StarRating = forwardRef((props, ref) => {
  // state
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  // validation
  let ratingDescription = '';
  if (rating === 1) {
    ratingDescription = 'Poor';
  } else if (rating === 2) {
    ratingDescription = 'Fair';
  } else if (rating === 3) {
    ratingDescription = 'Average';
  } else if (rating === 4) {
    ratingDescription = 'Good';
  } else if (rating === 5) {
    ratingDescription = 'Great';
  }

  // ref hooks
  useImperativeHandle(ref, () => {
    return {
      returnStarRating: () => returnStarRating()
    }
  });

  // hook methods
  const returnStarRating = () => {
    return rating;
  };

  return (
    <div className="tile is-parent star-rating">
      <span>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
              />
              <FaStar
                className="star"
                size={40}
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                onClick={ () => setRating(ratingValue) }
                onMouseEnter={ () => setHover(ratingValue) }
                onMouseLeave={ () => setHover(null) }
              />
            </label>
          );
        })}
      </span>
      <span><p className="content has-text-dark has-text-centered is-size-6">{ratingDescription}</p></span>
    </div>
  );
});

// EXPORTS
export default StarRating;
