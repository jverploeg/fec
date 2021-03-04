import React, { useState } from 'react';
import ProductOverview from './overview/productOverview';
import RatingsReviews from './ratings/ratingsReviews';
import RelatedProducts from './products/relatedProducts';

// TODO remove at completion
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

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
    // eslint-disable-next-line no-console
    console.log('clicked');
  };
  const [currentProduct, setProduct] = useState(testProduct)
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
        <RatingsReviews product={testProduct}/>
      </div>
    </div>
  );
}

export default App;
