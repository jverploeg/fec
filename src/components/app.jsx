import React, { useState } from 'react';
import ProductOverview from './overview/productOverview';
import RatingsReviews from './ratings/ratingsReviews';
import RelatedProducts from './products/relatedProducts';

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
    // eslint-disable-next-line no-console
    console.log('clicked');
  };
  return (
    <div className="main">
      <div className="container is-primary">
        <h1 className="title">KamelCasedKids Capstone</h1>
      </div>
      <div>
        <p>{count}</p>
        <button type="button" onClick={() => increase()}>
          Click me
        </button>
      </div>
      <div className="overview">
        <ProductOverview />
      </div>
      <div className="related">
        <RelatedProducts />
      </div>
      <div className="ratings">
        RatingsReviews
      </div>
    </div>
  );
}

export default App;
