// IMPORTS
import axios from 'axios';
import store2 from 'store2';

// VARIABLES
const port = '8080';

// API HELPERS
const getProductList = () => {
  const url = `http://localhost:${port}/api/products/all`;

  return axios.get(url)
    .then((results) => {
      // const key = 'allProducts';
      // // console.log(res);
      // const value = results.data; // array of products w/o style options
      // store2(key, value, true); // true indicates to overwrite
      // console.log('store2: ', store2());
      return results;
    })
    .catch((error) => {
      console.log('err: ', error);
      return error;
    });
};

const getProductByID = (productID) => {
  const url = `http://localhost:${port}/api/products/${productID}`;

  return axios.get(url)
    .then((results) => {
      // console.log('getproductbyID helper: ', results);
      // const key = `product${productID}`;
      // const value = results.data; // array of products w/o style options
      // store2(key, value, true); // true indicates to overwrite
      // console.log('store2: ', store2());
      return results;
    })
    .catch((error) => {
      console.log('err: cannot get product by ID', error);
      return error;
    });
};

const getAllReviewsByProduct = (productID) => {
  const url = `http://localhost:${port}/api/reviews/all/${productID}`;

  return axios.get(url)
    .then((results) => {
      const key = `allReviews${productID}`;
      // console.log(results);
      const value = results.data; // array of products w/o style options
      store2(key, value, true); // true indicates to overwrite
      // console.log('store2: ', store2());
      return results;
    })
    .catch((error) => {
      console.log('err: ', error);
      return error;
    })
};

const getStyles = (productID) => { // async?
  const url = `http://localhost:${port}/api/products/${productID}/styles`;

  // await axios.get(url)
  return axios.get(url)
    .then((results) => {
      const key = `allStyles${productID}`;
      // console.log(results);
      const value = results.data; // array of styles and data for given product
      // console.log({value});
      store2(key, value, true); // true indicates to overwrite
      // console.log('store2: ', store2());
      // console.log({results});
      // const data = store2.get(key);
      // console.log({data})
      // const key = `allReviews${productID}`;
      // console.log(results);
      // const value = results.data; // array of products w/o style options
      // store2(key, value, true); // true indicates to overwrite
      // console.log('store2: ', store2());
      return results;
    })
    .catch((error) => {
      console.log('err: ', error);
      return error;
    });
};

const postReview = (productID, review) => {
  const url = `http://localhost:${port}/api/reviews/submit/${productID}`;

  return axios.post(url, review)
    .then((results) => {
      return results;
    })
    .catch((error) => {
      console.log('err: cannot submit review', error);
      return error;
    });
};

// EXPORTS
export default {
  getAllReviewsByProduct,
  getProductList,
  getProductByID,
  postReview,
};
