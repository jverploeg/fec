import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
// import bulma from 'bulma';

// COMPONENT
const OverallStarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="overall-star-rating">
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
              size={100}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onClick={ () => setRating(ratingValue) }
              onMouseEnter={ () => setHover(ratingValue) }
              onMouseLeave={ () => setHover(null) }
            />
          </label>
        );
      })}
    </div>
  );
};

// EXPORTS
export default OverallStarRating;
