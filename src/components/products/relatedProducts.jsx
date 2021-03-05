import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';

const RelatedProducts = (props) => {
  const cardImages = [
    ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F24%2Fcancun-beach-hotels-CANCUNBREAK0221.jpg', 'https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/d81ac21c-c8bc-9ff2-348a-a7d1672a93af/630x355.jpg', 'https://www.fodors.com/wp-content/uploads/2019/12/SEO__HowToStaySafeCancun_iStock-1140795100.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg'],
    ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F24%2Fcancun-beach-hotels-CANCUNBREAK0221.jpg', 'https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/d81ac21c-c8bc-9ff2-348a-a7d1672a93af/630x355.jpg', 'https://www.fodors.com/wp-content/uploads/2019/12/SEO__HowToStaySafeCancun_iStock-1140795100.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg'],
    ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F24%2Fcancun-beach-hotels-CANCUNBREAK0221.jpg', 'https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/d81ac21c-c8bc-9ff2-348a-a7d1672a93af/630x355.jpg', 'https://www.fodors.com/wp-content/uploads/2019/12/SEO__HowToStaySafeCancun_iStock-1140795100.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg'],
    ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F24%2Fcancun-beach-hotels-CANCUNBREAK0221.jpg', 'https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/d81ac21c-c8bc-9ff2-348a-a7d1672a93af/630x355.jpg', 'https://www.fodors.com/wp-content/uploads/2019/12/SEO__HowToStaySafeCancun_iStock-1140795100.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg'],
    ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F24%2Fcancun-beach-hotels-CANCUNBREAK0221.jpg', 'https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/d81ac21c-c8bc-9ff2-348a-a7d1672a93af/630x355.jpg', 'https://www.fodors.com/wp-content/uploads/2019/12/SEO__HowToStaySafeCancun_iStock-1140795100.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg'],
    ['https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F02%2F24%2Fcancun-beach-hotels-CANCUNBREAK0221.jpg', 'https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/d81ac21c-c8bc-9ff2-348a-a7d1672a93af/630x355.jpg', 'https://www.fodors.com/wp-content/uploads/2019/12/SEO__HowToStaySafeCancun_iStock-1140795100.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg', 'https://www.riu.com/en/binaris/DestinoCancun_tcm55-176476.jpg']
  ];
  const [count, setCount] = useState(0);
  const cards = [<Card image={cardImages[0]}/>, <Card image={cardImages[1]}/>, <Card image={cardImages[2]}/>, <Card image={cardImages[3]}/>, <Card image={cardImages[4]}/>, <Card image={cardImages[5]}/>];
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
  });
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