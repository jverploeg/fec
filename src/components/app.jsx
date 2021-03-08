import React, { useState, useEffect, useRef } from 'react';
import ProductOverview from './overview/productOverview';
import OverallStarRating from './helpers/OverallStarRating';
import RatingsReviews from './ratings/RatingsReviews';
import RelatedProducts from './products/RelatedProducts';
import api from './helpers/apiHelpers';
import store2 from 'store2';
import testData from './helpers/testData.js';
import contextHelpers from './context/contextHelpers';



function App() {
  // State
  const [currentProduct, setCurrentProduct] = useState(testData.testProduct);
  const [currentProductID, setCurrentProductID] = useState(testData.testProduct.id);
  const [productList, setProductList] = useState([]);
  const [currentProductReviews, setCurrentProductReviews] = useState([]);
  // const MyContext = React.createContext(defaultValue);


  // Effects
  useEffect(() => {

    contextHelpers.fetchProductList();
    contextHelpers.fetchProductByID();
    contextHelpers.fetchAllReviewsByProduct();

  }, []);



  const handleChangeProduct = (productID) => {
    setCurrentProductID(productID)

  }


    console.log('current product ID after useEffect: ', currentProductID);
    console.log({currentProduct});


  return (
    // <MyContext.Provider value={/* some value */}>

    <div className="main">
      <div className="container is-primary has-text-centered">
        <h1 className="title">KamelCasedKids Capstone</h1>
      </div>
      <div className="overview">
        <ProductOverview product={currentProduct} />
      </div>
      <div>
        <OverallStarRating product={currentProduct} />
      </div>
      <div className="related" id="related">
        <RelatedProducts />
      </div>
      <div className="ratings" id="ratings">
        <RatingsReviews product={currentProduct} />
      </div>
    </div>
  );
}

export default App;
