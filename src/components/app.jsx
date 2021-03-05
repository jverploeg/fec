import React, { useState } from 'react';
import ProductOverview from './overview/productOverview';
import OverallStarRating from './helpers/OverallStarRating';
import RatingsReviews from './ratings/RatingsReviews';
import RelatedProducts from './products/RelatedProducts';

// TODO remove at completion
const testProduct = {
  "id": 18078,
  "campus": "hr-bld",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-02-23T05:08:00.350Z",
  "updated_at": "2021-02-23T05:08:00.350Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "Canvas"
      },
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ],
  "aveRating": "4.50"
};

function App() {
  const [currentProduct, setCurrentProduct] = useState(testProduct);
  const [productList, setProductList] = useState(null);

  return (
    <div className="main">
      <div className="container is-primary">
        <h1 className="title">KamelCasedKids Capstone</h1>
      </div>
      <div className="overview">
        <ProductOverview />
      </div>
      <div>
        <OverallStarRating product={currentProduct}/>
      </div>
      <div className="related">
        <RelatedProducts />
      </div>
      <div className="ratings">
        <RatingsReviews product={currentProduct}/>
      </div>
    </div>
  );
}

export default App;
