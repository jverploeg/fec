import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedProducts from './RelatedProducts.jsx';

test('render product description', () => {
  render(<RelatedProducts />);
  const cardText = screen.getAllByText(/Expanded Product Name with Extra Text/i);
  //expect(cardText).toBeInTheDocument();
});