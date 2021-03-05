import React, { useState, useEffect } from 'react';
import Card from './card.jsx';
const RelatedProducts = () => {
  const [count, setCount] = useState(0);
  const cards = [<Card/>, <Card/>, <Card/>, <Card/>, <Card/>, <Card/>];
  console.log(cards);
  useEffect(() => {
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 4,
      slidesToScroll: 4,
      draggable: true,
      dots: '#dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
    }
  );
  return (
    <div className="container">
      <div className="glider-contain multiple columns">
        <div className="glider-prev">
          <i className="fa fa-chevron-left"></i>
        </div>
        <div className="glider">
          { cards.map((card, idx) => (
            <div className="column is-one-fifth" key={card + ' ' + idx}>{card}</div>
          ))}
        </div>
        <button className="glider-next">
          <i className="fa fa-chevron-right"></i>
        </button>
        {/* <div id="dots" className="glider-dots"></div> */}
      </div>
    </div>
  );
}
export default RelatedProducts;