import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
// import bulma from 'bulma';

// COMPONENT
const NewReview = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [recommended, setRecommended] = useState(true);
  const { name } = props.product;

  return (
    <div>
      {/* Headings */}
      <h2>Write Your Review</h2>
      <h6>
        About the
        {' ' + name}
      </h6>

      {/* Star Rating Component */}
      <div className="star-rating">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <>
              <label htmlFor="rating">
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
            </>
          );
        })}
      </div>

      {/* Recommended Check */}
      <div className="recommended?">
        <h6>Do you recommend this product?</h6>
        <label htmlFor="recommended">
          Yes
          <input
            type="radio"
            name="recommended"
            value="Yes"
            onClick={ () => setRecommended('Yes')}
          />
        </label>
        <label htmlFor="recommended">
          No
          <input
            type="radio"
            name="recommended"
            value="No"
            onClick={ () => setRecommended('No')}
          />
        </label>
      </div>

      {/* Characteristics */}
    </div>
  );
};

// EXPORTS
export default NewReview;
