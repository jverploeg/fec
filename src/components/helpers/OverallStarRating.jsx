import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

// COMPONENT
const OverallStarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const aveRating = props.product.aveRating;
  const starWidth = aveRating/5*100;
  let starClass = '';


  if (starWidth <= 5) {
    starClass = 'stars-5';
  } else if (starWidth > 5 && starWidth <= 10) {
    starClass = 'stars-10';
  } else if (starWidth > 10 && starWidth <= 15) {
    starClass = 'stars-15';
  } else if (starWidth > 15 && starWidth <= 20) {
    starClass = 'stars-20';
  } else if (starWidth > 20 && starWidth <= 25) {
    starClass = 'stars-25';
  } else if (starWidth > 25 && starWidth <= 30) {
    starClass = 'stars-30';
  } else if (starWidth > 30 && starWidth <= 35) {
    starClass = 'stars-35';
  } else if (starWidth > 35 && starWidth <= 40) {
    starClass = 'stars-40';
  } else if (starWidth > 40 && starWidth <= 45) {
    starClass = 'stars-45';
  } else if (starWidth > 45 && starWidth <= 50) {
    starClass = 'stars-50';
  } else if (starWidth > 50 && starWidth <= 55) {
    starClass = 'stars-55';
  } else if (starWidth > 55 && starWidth <= 60) {
    starClass = 'stars-60';
  } else if (starWidth > 60 && starWidth <= 65) {
    starClass = 'stars-65';
  } else if (starWidth > 65 && starWidth <= 70) {
    starClass = 'stars-70';
  } else if (starWidth > 70 && starWidth <= 75) {
    starClass = 'stars-75';
  } else if (starWidth > 75 && starWidth <= 80) {
    starClass = 'stars-80';
  } else if (starWidth > 80 && starWidth <= 85) {
    starClass = 'stars-85';
  } else if (starWidth > 85 && starWidth <= 90) {
    starClass = 'stars-90';
  } else if (starWidth > 90 && starWidth <= 95) {
    starClass = 'stars-95';
  } else if (starWidth > 95 && starWidth <= 100) {
    starClass = 'stars-100';
  }

  console.log(starClass);
  const starBarClass = `stars-container ${starClass}`;

  return (
    <div>
      <span className={starBarClass}>★★★★★</span>
    </div>
  );
};

// EXPORTS
export default OverallStarRating;
