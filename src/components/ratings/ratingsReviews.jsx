import React, { useState } from 'react';
// import bulma from 'bulma';
import OverallStarRating from './OverallStarRating';
import NewReview from './NewReview';
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
  const product = props.product;

  return (
    <div id="Ratings-Reviews" className="Ratings-Reviews">
      {/* NAVIGATION BAR */}
      <nav className="navbar is-fluid" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#Ratings-Reviews">
            <FiArrowUpCircle className="return-to-top-reviews" size={50}/>
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>

      </nav>

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
