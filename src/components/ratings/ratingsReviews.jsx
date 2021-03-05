import React, { useState, useEffect } from 'react';
import OverallStarRating from '../helpers/OverallStarRating';
import NewReview from './NewReview';
import DropDown from '../helpers/dropDown';
import StickyNavBar from './StickyNavBar';
import RatingCard from './RatingCard';
import { FiArrowUpCircle } from 'react-icons/fi';

const testProduct = {
  id: 18201,
  campus: 'hr-bld',
  name: 'Ernesto Sweatpants',
  slogan: 'Odit dolorem nemo id tempora qui.',
  description: 'A sapiente hic. Facilis et sit voluptatem. Ex sunt reiciendis qui ut perferendis qui soluta quod.',
  category: 'Sweatpants',
  default_price: '56.00',
  created_at: '2021-02-23T05:08:00.520Z',
  updated_at: '2021-02-23T05:08:00.520Z',
};

// COMPONENT
const RatingsReviews = (props) => {
  // const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const currentProduct = props.product;

  // sticky navbar handler
  useEffect(() => {
    const header = document.getElementById("navbar");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div id="Ratings-Reviews" className="columns is-mobile">

      {/* HORIZONTAL SPACER */}
      <div className="column is-2"/>

      {/* OVERALL RATING CARD AND REVIEWS LIST */}
      {/* OVERALL RATING CARD */}
      <div className="column">
        <div className="block">
          <div class="tile is-ancestor">
            {/* INDIVIDUAL RATING CARD */}
            <RatingCard product={currentProduct}/>
          </div>
        </div>
      </div>

      {/* REVIEWS LIST AND NAV BAR */}
      <div className="column is-6">
        <div className="block">
          <section className="hero is-grey-dark">>
            {/* STICKY NAV BAR */}
            <StickyNavBar />

            {/* REVIEWS LIST COMPONENT */}

          </section>
        </div>
      </div>

      {/* HORIZONTAL SPACER */}
      <div className="column"/>

    </div>
  );
};

// EXPORTS
export default RatingsReviews;
