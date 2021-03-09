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
    fetchProductList();
    fetchProductByID(currentProductID);
    fetchAllReviewsByProduct(currentProductID);
  }, []);

  // Functions
  const fetchProductList = async () => {
    await api.getProductList()
      .then((response) => {
        const allProducts = response.data;
        setProductList(allProducts);
        // console.log('current product ID before getbyID: ', currentProductID);
        // console.log({currentProduct});
      })
      .catch((error) => {
        console.log({error});
      });
  };

  const fetchProductByID = async (currentProductID) => {
    await api.getProductByID(currentProductID)
      .then((response) => {
        const product = response.data;
        setCurrentProduct(product);
        // console.log('current product ID after getbyID: ', currentProductID);
        // console.log({currentProduct});
      })
      .catch((error) => {
        console.log({error});
      });
  };

  const fetchAllReviewsByProduct = async (currentProductID) => {
    await api.getAllReviewsByProduct(currentProductID)
      .then((response) => {
        const reviews = response.data;
        setCurrentProductReviews(reviews);
        // console.log('current product reviews after getbyID: ', currentProductReviews);
        // console.log({currentProductReviews});
      })
      .catch((error) => {
        console.log({error});
      });
  };

  const handleChangeProduct = (productID) => {
    setCurrentProductID(productID);
    contextHelpers.fetchProductByID(currentProductID);
    contextHelpers.fetchAllReviewsByProduct(currentProductID);
  };

  // console.log('current product ID after useEffect: ', currentProductID);
  // console.log({currentProduct});

  return (

    <div className="main">
      <div className="container is-primary has-text-centered">
        <h1 className="title">KamelCasedKids Capstone</h1>
      </div>
      <div className="overview">
        <ProductOverview product={currentProduct} />
      </div>
      <div className="related" id="related">
        <RelatedProducts />
      </div>
      <div className="ratings" id="ratings">
        <RatingsReviews product={currentProduct} reviews={currentProductReviews} />
      </div>
    </div>
  );
}

export default App;
