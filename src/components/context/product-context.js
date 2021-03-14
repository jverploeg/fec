// IMPORTS
import React from 'react';
import testData from '../helpers/testData';

// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ProductContext = React.createContext({
  currentProduct: testData.testProduct,
  toggleProduct: () => {},
});
