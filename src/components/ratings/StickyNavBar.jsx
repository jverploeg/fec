import React from 'react';
import { FiArrowUpCircle } from 'react-icons/fi';

const StickyNavBar = () => {

  return (
    <div id="list-navbar">
      <nav className="navbar is-light has-background-grey is-mobile" role="navigation" aria-label="main navigation">

        <div class="navbar-brand">
          <a class="navbar-item" href="#Ratings-Reviews">
            <FiArrowUpCircle className="return-to-top-reviews" size={50}/>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="#related">
              See Related Products
            </a>
            <a class="navbar-item" href="#overview">
              Return to Top of Page
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Sort By
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  Helpful
                </a>
                <a class="navbar-item">
                  Newest
                </a>
                <a class="navbar-item">
                  Relevant
                </a>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default StickyNavBar;