// IMPORTS
const axios = require('axios');
const store2 = require('store2');
const config = require('../../atlier-config.js');

// ATLIER API HELPER FUNCTIONS

// ---------- Products ----------
const getAllProducts = (cb) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/${config.campus}/products`;
  const options = {
    headers: {
      'Authorization': config.key
    },
  };
  axios.get(url, options)
    .catch((err) => {
      console.log('err: ', err);
      return cb(err, null);
    })
    .then((res) => {
      const key = 'allProducts';
      const value = res.data; // array of products w/o style options
      store2(key, value, true); // true indicates to overwrite
      // console.log('store2: ', store2());
      return res;
    })
    .then((res) => {
      return cb(null, res.data);
    });
};

const getProductByID = (productID, cb) => {
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/${config.campus}/products/${productID}`;
  const options = {
    headers: {
      'Authorization': config.key
    }
  };
  axios.get(url, options)
    .catch((err) => {
      console.log('err: ', err);
      return cb(err, null);
    })
    // store product
    .then((res) => {
      const key = `product${productID}`
      const value = res.data; // object of product
      store2(key, value, true); // true indicates to overwrite
      return res;
    })
    // gather all reviews, calc average rating, supplement average rating to product object
    .then((res) => {
      return new Promise((resolve, reject) => {
        getAllReviewsByProduct(productID, (err, results) => {
          if (err) {
            console.log(err);
            reject('cannot get reviews')
          } else {
            const aveRating = calcAverageRating(results);
            supplementAveRatingToProduct(productID, aveRating);
            const product = store2(`product${productID}`);
            return resolve(product);
          }
        })
      })
    })
    .then((product) => {
      return cb(null, product);
    });
};

// ---------- Reviews ----------
const getAllReviewsByProduct = (productID, cb) => {
  /*  stores all reviews for a single product under
      key=`allReviews${productID}` : value=[arrayOfReviews]
    also calcs and stores average rating for the product under
      key=`aveRating${productID}` : value=[arrayOfReviews]
  */
  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/${config.campus}/reviews/?product_id=${productID}&count=100`;
  const options = {
    headers: {
      'Authorization': config.key
    }
  };
  axios.get(url, options)
    .catch((err) => {
      console.log('err: ', err);
      return cb(err, null);
    })
    .then((res) => {
      // store all reviews for product
      const key = `allReviews${productID}`;
      const value = res.data.results; // array of reviews
      store2(key, value, true); // true indicates to overwrite

      return res;
    })
    .then((res) => {
      // calc and store average rating
      if (store2(`product${productID}`)) {
      } else {
        getProductByID(productID, (err, results) => {
          if (err) {
            console.log(err);
            return err;
          } else {
            return results;
          }
        })
      }
      return res;
    })
    .then((res) => {
      return cb(null, res.data.results);
    });
};
// const getNewestTwoReviewsByProduct = (productID, )

//
//
//
// UTILITY HELPER FUNCTIONS
const calcAverageRating = (allReviews) => {
  let ratingSum = 0;
  allReviews.forEach((review) => {
    const { rating } = review;
    ratingSum += rating;
  });
  // return average rating to nearest quarter value with two decimal places
  return (Math.round((ratingSum / allReviews.length) * 4) / 4).toFixed(2);
};

const supplementAveRatingToProduct = (productID, aveRating) => {
  store2.transact(`product${productID}`, function(product) {
    product.aveRating = aveRating;
    // console.log({product});
  });
};

// EXPORTS
module.exports = {
  getAllReviewsByProduct,
  getAllProducts,
  getProductByID,
};

//
// ! DELETE AT COMPLETION
// EXAMPLE API DATA
// reviews
const exampleReviewData =
  {"product":"18201","page":0,"count":100,"results":[{"review_id":210518,"rating":2,"summary":"Sed ut accusantium ut veniam beatae.","recommend":true,"response":null,"body":"Sit repudiandae voluptates perspiciatis alias voluptate nemo culpa non. A eius eos expedita illo unde corporis quo qui. Dolorem numquam aliquam quia consequuntur repellat totam. Ex aliquam ratione et assumenda possimus sint.","date":"2020-10-14T00:00:00.000Z","reviewer_name":"Geovanni.Skiles11","helpfulness":27,"photos":[{"id":373572,"url":"https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"},{"id":373573,"url":"https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"},{"id":373574,"url":"https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"}]},{"review_id":210512,"rating":3,"summary":"Aut repellendus vel.","recommend":true,"response":"\"Ullam et in.\"","body":"Esse qui et nesciunt. Rerum dicta autem placeat. Eligendi amet reiciendis rerum voluptate et quas maxime consectetur.","date":"2020-09-09T00:00:00.000Z","reviewer_name":"Imelda24","helpfulness":22,"photos":[{"id":373584,"url":"https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},{"id":373585,"url":"https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}]},{"review_id":210516,"rating":2,"summary":"Unde possimus quo quisquam quod repudiandae nemo totam consectetur aut.","recommend":true,"response":null,"body":"Quos rem sapiente accusamus quaerat blanditiis et quia labore. Vitae laborum magnam et soluta. Odit ut vitae.","date":"2020-12-03T00:00:00.000Z","reviewer_name":"Kristy82","helpfulness":20,"photos":[{"id":373578,"url":"https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"}]},{"review_id":210519,"rating":2,"summary":"Molestias quia dolor eveniet ut.","recommend":true,"response":null,"body":"Nesciunt sed explicabo. Cumque praesentium aperiam autem eum aut rerum iure pariatur nostrum. Corrupti architecto fugiat voluptatem unde aliquam sed. Iste quidem illo omnis distinctio. Earum eos saepe nostrum perferendis dolores.","date":"2020-12-25T00:00:00.000Z","reviewer_name":"Bertram57","helpfulness":19,"photos":[{"id":373571,"url":"https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"}]},{"review_id":210514,"rating":2,"summary":"Quo vitae maiores eum quia.","recommend":true,"response":null,"body":"Nobis voluptatum nam quam blanditiis. Tempore quidem a doloremque ea sed. Similique aut qui qui eligendi et suscipit voluptatem.","date":"2020-04-29T00:00:00.000Z","reviewer_name":"Lottie.Kulas37","helpfulness":19,"photos":[{"id":373580,"url":"https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"},{"id":373581,"url":"https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"},{"id":373582,"url":"https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"}]},{"review_id":210513,"rating":3,"summary":"Suscipit iste minus aperiam facere.","recommend":true,"response":null,"body":"Est veniam ut distinctio sint vel qui est. Numquam impedit sed blanditiis molestias voluptas officiis ut. Voluptatem consequatur porro ut repellendus tempore adipisci dignissimos. Nihil voluptatibus inventore cum. Velit sit veritatis et est tempore reiciendis autem harum quis.","date":"2020-10-26T00:00:00.000Z","reviewer_name":"Bailee5","helpfulness":18,"photos":[{"id":373583,"url":"https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"}]},{"review_id":210517,"rating":3,"summary":"Vel dolor eos et.","recommend":true,"response":null,"body":"Cumque omnis officiis voluptas nesciunt necessitatibus. Nostrum deserunt vel distinctio ut atque quis ut. Delectus praesentium inventore ea voluptatum et pariatur. Blanditiis ab a doloribus. Nostrum eos alias velit recusandae assumenda ea magni fuga.","date":"2020-08-23T00:00:00.000Z","reviewer_name":"Duane.Ruecker","helpfulness":11,"photos":[{"id":373575,"url":"https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"},{"id":373576,"url":"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"},{"id":373577,"url":"https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"}]},{"review_id":210509,"rating":2,"summary":"Sunt voluptate quae mollitia magnam cupiditate.","recommend":true,"response":"\"Deleniti soluta sunt iste eos a aut.\"","body":"Voluptatem id et et pariatur tempore et. Aut accusantium illo omnis perspiciatis. Quis saepe doloribus porro sit aspernatur ea aut hic. Id iusto quos ex. Qui qui tempora quos quidem consequatur rerum.","date":"2020-05-19T00:00:00.000Z","reviewer_name":"Loyal_Hartmann","helpfulness":6,"photos":[{"id":373589,"url":"https://images.unsplash.com/photo-1507920676663-3b72429774ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"}]},{"review_id":210511,"rating":4,"summary":"Cum asperiores rerum autem voluptas.","recommend":true,"response":"\"Culpa vero totam esse.\"","body":"Enim illum ea. Id quo distinctio maiores ut. Porro esse eos et omnis qui architecto magnam. Ut autem autem odio optio sint at et.","date":"2020-12-20T00:00:00.000Z","reviewer_name":"Albert37","helpfulness":5,"photos":[{"id":373586,"url":"https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}]},{"review_id":210510,"rating":3,"summary":"Et fugit quia voluptatibus ipsa soluta autem sed.","recommend":true,"response":null,"body":"Vero repellat saepe laudantium voluptatem voluptatem repellendus et illum doloribus. Possimus eos et cumque consequatur quod atque sed repellat. Sed architecto et aspernatur nisi officiis. Sunt id dolorem eum occaecati. Ea quos ab qui voluptas voluptatum temporibus natus laboriosam. Ipsum voluptas corporis.","date":"2021-02-07T00:00:00.000Z","reviewer_name":"Arely_Olson","helpfulness":2,"photos":[{"id":373587,"url":"https://images.unsplash.com/photo-1554735490-80893c93b06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"},{"id":373588,"url":"https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}]},{"review_id":210515,"rating":3,"summary":"Quidem fugiat vero et ex aut aut corrupti et.","recommend":true,"response":null,"body":"Quibusdam nihil et eaque ea sint sint nemo id. Aut quibusdam a sunt nostrum aut iste sapiente temporibus. Porro officiis et est odit corrupti est eos. Omnis vero ipsam quidem et unde rem fuga. Neque laboriosam consequatur optio. Repellendus animi neque ut odio nam eum.","date":"2020-02-26T00:00:00.000Z","reviewer_name":"Dorothea_Satterfield14","helpfulness":1,"photos":[{"id":373579,"url":"https://images.unsplash.com/photo-1526330563440-3ae2174b6bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"}]},{"review_id":210508,"rating":5,"summary":"Quis explicabo quis non ad architecto est.","recommend":true,"response":null,"body":"Dolores ad qui rerum. Hic maxime voluptas unde alias repellat vel quis iusto aliquid. Rem distinctio voluptatem quasi maxime quo dolores quos iure. Nesciunt labore incidunt numquam molestiae vitae.","date":"2020-09-01T00:00:00.000Z","reviewer_name":"Gideon57","helpfulness":1,"photos":[{"id":373590,"url":"https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"}]}]};

//
// TODO: Move tests to designated spec file for Jest framework
const test1Data = exampleReviewData.results;
const test1Result = calcAverageRating(test1Data);
const test1Expected = 2.75 // from example data below. Use better test set when using Jest.
console.log('Test: Calculate Average Rating of Example Review Data', test1Result, JSON.stringify(test1Result) === JSON.stringify(test1Expected));