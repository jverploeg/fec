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
    styles: null
  });
  const [arr, setArr] = useState([]);
  // TODO: ADD State for switching the current product and pass between App <--> RelatedProducts
  const [currentProductId, setCurrentProductId] = useState(null);

  // temp set starting id. run once
  // useEffect(() => {
  //   setCurrentProductId(18201);
  // });
  const products = [18201, 18078, 18445, 18079, 18080];
  let tempID = products[1];

  // FETCH INITIAL DATA ONCE ON PAGE LOAD
  // const makeSingleRequest = async (product => {
  //   return await axios(`/api/products/${product.id}/styles`);
  // }

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

      let prodStyles = await respGlobal.data.map(async product => {
        const response = await axios.get(`/api/products/${product.id}/styles`);
        setArr(response.data);
        //return response.data;
      });

      setAllData({
        data: respGlobal.data,
        current: current.data,
        reviews: reviews.data,
        styles: styles.data
      });
    };
    fetchData();
  }, []);

  // prevent loading until data is served
  if (!response.data) { return null; }
  // console.log({ response });
  return (

    <div className="main">
      {/* MODALS */}
      {/* TITLE */}
      <section className="container is-fullscreen has-background-light has-text-centered">
        <em><h1 className="title is-1 has-text-link">KamelCasedKids FEC Capstone</h1></em>
      </section>
      {/* OVERVIEW */}
      <div className="overview" id="overview">
        <ProductOverview
          reviews={response.reviews.length}
          product={response.current}
          styles={response.styles}
        />
      </div>
      {/* RELATED PRODUCTS */}
      <div className="related" id="related">
        <RelatedProducts product={response.data} styles={arr}/>
      </div>
      {/* RATINGS & REVIEWS */}
      <div className="ratings" id="ratings">
        <RatingsReviews product={response.current} reviews={response.reviews}/>
      </div>

    </div>
  );
}

export default App;
