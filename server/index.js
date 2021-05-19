// import dependencies
const express = require('express');
const path = require('path');
const cors = require('cors');
// const gzip = require('express-static-gzip');
const store2 = require('store2');
const atlier = require('./helpers/atlier');

// initialize app
const app = express();

// render static files
app.use(express.static(path.resolve(__dirname, '..', 'src', 'dist')));
// app.use(gzip(path.resolve(__dirname, '..', 'src', 'dist')));

// setup any middleware
app.use(express.json());
app.use(cors());

// set port
// const port = 8080;
const port = 3000;

// connect server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});

// routes
// API ROUTES
// product
app.get('/api/products/all', (req, res) => {
  const local = store2('allProducts');

  if (local) {
    console.log('allProducts sent locally');
    return res.status(201).send(local);
  }
  atlier.getAllProducts()
    .then((results) => {
      return res.status(200).send(results);
    })
    .catch((error) => {
      return res.status(400).send(err);
    });
});

app.get('/api/products/:id', (req, res) => {
  const productID = req.params.id;
  const local = store2(`product${productID}`);

  if (local) {
    console.log(`product${productID} sent locally`);
    return res.status(201).send(local);
  }
  atlier.getProductByID(productID)
    .then((results) => {
      return res.status(200).send(results);
    })
    .catch((error) => {
      return res.status(405).send(error);
    });
});

// reviews
app.get('/api/reviews/all/:id', (req, res) => {
  const productID = req.params.id;
  const local = store2(`allReviews${productID}`);

  if (local) {
    console.log(`allReviews${productID} sent locally`);
    return res.status(201).send(local);
  }
  atlier.getAllReviewsByProduct(productID)
    .then((results) => {
      return res.status(200).send(results)
    })
    .catch((error) => {
      return res.status(400).send(error)
    });
});

app.post('/api/reviews/submit/:id', (req, res) => {
  const productID = req.params.id;
  const review = req.body;

  console.log(review);

  atlier.submitReview(productID, review)
    .then((results) => {
      return res.status(200).send(results);
    })
    .catch((error) => {
      return res.status(400).send(error);
    });
});

// styles
app.get('/api/products/:id/styles', (req, res) => {
  const productID = req.params.id;
  const local = store2(`allStyles${productID}`);

  if (local) {
    console.log(`allStyles${productID} sent locally`);
    return res.status(201).send(local);
  }
  atlier.getStyles(productID)
    .then((results) => {
      return res.status(200).send(results);
    })
    .catch((error) => {
      return res.status(405).send(error);
    });
});
