import React, { useState } from 'react';
import OverallStarRating from './OverallStarRating';
import NewReview from './NewReview';
import DropDown from '../helpers/dropDown';
import StickyNavBar from './StickyNavBar';
import { FiArrowUpCircle } from 'react-icons/fi';

// Navbar behavior
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the navbar
var navbar = React.createRef();
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

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
  const product = props.product;

  return (
    <div id="Ratings-Reviews" className="Ratings-Reviews">

      {/* STICKY NAV BAR */}
      <StickyNavBar />

      {/* INDIVIDUAL RATING CARD */}
      <section className="hero is-grey-dark is-fullheight">
        <div className="container is-fluid">
          <h2 className="subtitle">RATINGS & REVIEWS</h2>
          {/* <OverallStarRating /> */}
          <OverallStarRating product={product}/>
          <div className="tile">
            <div className="tile is-parent">
              <div className="tile is-child box">
                Details
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// EXPORTS
export default RatingsReviews;
