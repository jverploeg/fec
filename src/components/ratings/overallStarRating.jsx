import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
// import bulma from 'bulma';

// COMPONENT
const OverallStarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const starWidth = "width=" + (props.product.aveRating/5*100) + "%";
  console.log('star width: ', starWidth);
  console.log('product: ', props.product);

  return (
    <div className="overall-star-rating">
      <span className="star-bar" title={props.product.aveRating}>
        {/* <span style={starWidth}/> */}
      </span>
    </div>
  );
};

// EXPORTS
export default OverallStarRating;
