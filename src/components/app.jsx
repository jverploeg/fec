import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductOverview from './overview/productOverview';
import RatingsReviews from './ratings/RatingsReviews';
import RelatedProducts from './products/relatedProducts';

function App() {
  const [response, setAllData] = useState({
    products: null,
    current: null,
    reviews: null,
    styles: null,
  });
  // TODO: ADD State for switching the current product and pass between App <--> RelatedProducts
  const [currentProductId, setCurrentProductId] = useState(null);

  // temp set starting id. run once
  // useEffect(() => {
  //   setCurrentProductId(18201);
  // });

  let tempID = 18201;
  // FETCH INITIAL DATA ONCE ON PAGE LOAD
  useEffect(() => {
    const fetchData = async () => {
      const respGlobal = await axios(
        `/api/products/all`
      );
      const current = await axios(
        `/api/products/${tempID}`
      );
      const reviews = await axios(
        `/api/reviews/all/${tempID}`
      );
      const styles = await axios(
        `/api/products/${tempID}/styles`
      );
      setAllData({
        data: respGlobal.data,
        current: current.data,
        reviews: reviews.data,
        styles: styles.data,
      });
    };
    fetchData();
  }, []);

  // prevent loading until data is served
  if (!response.data) { return null; }
  console.log({ response });
  return (

    <div className="main">
      {/* MODALS */}
      {/* TITLE */}
      <div className="container is-primary has-text-centered">
        <h1 className="title">KamelCasedKids Capstone</h1>
      </div>
      {/* OVERVIEW */}
      <div className="overview" id="overview">
        <ProductOverview
          product={response.current}
          styles={response.styles}
        />
      </div>
      {/* RELATED PRODUCTS */}
      <div className="related" id="related">
        <RelatedProducts />
      </div>
      {/* RATINGS & REVIEWS */}
      <div className="ratings" id="ratings">
        <RatingsReviews product={response.current} reviews={response.reviews}/>
      </div>

    </div>
  );
}

export default App;
