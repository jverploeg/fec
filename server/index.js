// import dependencies
const express = require('express');
const path = require('path');
const cors = require('cors');
// const gzip = require('express-static-gzip');
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
const port = 8080;

// connect server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});

// routes
// API ROUTES
app.get('/api/reviews/all/:id', (req, res) => {
  const productID = req.params.id;

  atlier.getAllReviewsByProduct(productID)
    .then((results) => {
      return res.status(200).send(results)
    })
    .catch((error) => {
      return res.status(400).send(error)
    });
});

app.get('/api/products/all', (req, res) => {
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

  atlier.getProductByID(productID)
    .then((results) => {
      return res.status(200).send(results);
    })
    .catch((error) => {
      return res.status(405).send(error);
    });
});

// styles
app.get('/api/products/:id/styles', (req, res) => {
  const productID = req.params.id;

  atlier.getStyles(productID)
    .then((results) => {
      return res.status(200).send(results);
    })
    .catch((error) => {
      return res.status(405).send(error);
    });
});
