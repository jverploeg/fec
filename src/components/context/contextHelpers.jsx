// IMPORTS
import App from '../app';
import api from '../helpers/apiHelpers';
import store2 from 'store2';

const fetchProductList = async () => {
  await api.getProductList()
    .then((response) => {
      const allProducts = response.data;
      App.setProductList(allProducts);
      console.log('current product ID before getbyID: ', currentProductID);
      console.log({currentProduct});
    })
    .catch((error) => {
      console.log({error});
    });
};

const fetchProductByID = async (currentProductID) => {
  await api.getProductByID(currentProductID)
    .then((response) => {
      const product = response.data;
      App.setCurrentProduct(product);
      console.log('current product ID after getbyID: ', currentProductID);
      console.log({currentProduct});
    })
    .catch((error) => {
      console.log({error});
    });
};

const fetchAllReviewsByProduct = async (currentProductID) => {
  await api.getAllReviewsByProduct(currentProductID)
    .then((response) => {
      const reviews = response.data;
      App.setCurrentProductReviews(reviews);
      console.log('current product reviews after getbyID: ', currentProductReviews);
      console.log({currentProductReviews});
    })
    .catch((error) => {
      console.log({error});
    });
};

// EXPORTS
export default {
  fetchProductList,
  fetchProductByID,
  fetchAllReviewsByProduct,
};
