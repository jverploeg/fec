import React, { useState, useEffect } from 'react';
import { MdStar } from 'react-icons/md';
import Modal from './Modal';

const Images = (props) => {
  //console.log('Inside of Images component: ', props.theImages);
  const [modalState, setModal] = useState('');
  const [currentProd, setCategory] = useState('Pants');
  const [characteristic, setChar] = useState('Clothing');
  const [comparedProd, setPrice] = useState('Sweatpants');

  useEffect(() => {
    setTimeout(() => {
      const allGliders = document.querySelectorAll('.glider-images');
      allGliders.forEach(gliderSet => {
        new Glider(gliderSet, {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true
        });
      });
    }, 2000)
  },[]);

  function handleClick(e) {
    console.log(e);
    if ( e.target.style.color === '' ) {
      e.target.style.color = 'yellow';
      e.target.style.className = 'modal-close is-large';
      e.target.style.ariaLabel = 'close';
      //console.log(e.target.parentElement.parentElement.parentElement.parentElement);
      // console.log(document.getElementById('prod-cat').textContent);
      // setCategory(document.getElementById('prod-cat').textContent);
      // console.log(document.getElementById('prod-price').textContent);
      // setPrice(document.getElementById('prod-price').textContent);
      setModal('is-active');
    } else {
      e.target.style.borderColor = 'black';
      e.target.style.color = '';
      setModal('');
    }
  }

  const closeModal = () => {
    setModal('');
  }

  if(!props.theImages) { return null; }
  else {
    return (
      <div>
        <div className="glider-images">
        { props.theImages.photos.map((img, idx) => (
          <div key={img.url + "" + idx} className="card-image" style={{position: 'relative'}}>
            <figure className="image is-4by3">
              <img src={img.url} alt="" />
              <MdStar onClick={handleClick} size={30} color='white' style={{position: 'absolute', top: '0%', right: '0%'}}/>
            </figure>
          </div>
        ))}
        </div>
        <Modal active={modalState} closeModal={closeModal} currentProd={currentProd} characteristic={characteristic} comparedProd={comparedProd}/>
      </div>
    )
  }

};

export default Images;