import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';
import Images from './Images.jsx';
import axios from 'axios';
import Modal from './Modal.jsx';

const RelatedProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
  const [theCards, addCard] = useState([]);

  useEffect(() => {
    new Glider(document.querySelector('.glider'), {
      slidesToShow: 4,
      slidesToScroll: 4,
      draggable: true,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
  });

  let Arrows = () => {
    return (
      <div>
        <div className="glider-prev">
          <i className="fa fa-chevron-left"></i>
        </div>
        <div className="glider-next">
          <i className="fa fa-chevron-right"></i>
        </div>
      </div>
    )
  }

  let getClick = (status) => {
    console.log('Inside of Related Products Component: ', status);
  }

  return (
    <div className='p-6'>
      <div className="glider-contain">
        <div className="glider">
          { props.product.map((card, idx) => (
            <div key={card + ' ' + idx} className='p-4'>
              <Card product={card} moreImages={props.styles[idx]}/>
            </div>
          ))}
        </div>
        <Arrows />
      </div>
      <Modal />
    </div>
  );
}
export default RelatedProducts;