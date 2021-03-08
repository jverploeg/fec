import React, { useState, useEffect } from 'react';

const Images = (props) => {
  useEffect(() => {
    const allGliders = document.querySelectorAll('.glider-images');
    allGliders.forEach(gliderSet => {
      new Glider(gliderSet, {
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true
      });
    });
  });
  return (
    <div className="glider-images">
    { props.theImages.map((img, idx) => (
      <div key={img + "" + idx} className="card-image">
        <figure className="image is-4by3 is-fullwidth">
          <img src={img} alt="" />
        </figure>
      </div>
    ))}
    </div>
  )
};

export default Images;