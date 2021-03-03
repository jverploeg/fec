import React, { useState } from 'react';
import bulma from 'bulma';
import ProductOverview from './components/overview/ProductOverview';
import RatingsReviews from './components/ratings/RatingsReviews';
import RelatedProducts from './components/products/RelatedProducts';

// require('../css/mystyles.scss');

const App = () => {
  const test1 = null;

  return (
    <div className="main">
      <span className="title is-primary">This is our React App</span>
      <div className="overview">
        <ProductOverview />
      </div>
      <div className="related">
        <RelatedProducts />
      </div>
      <div className="ratings">
        <RatingsReviews />
      </div>
    </div>
  );
};

export default App;