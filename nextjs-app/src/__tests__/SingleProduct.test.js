import React from 'react';
import { render } from '@testing-library/react';
import SingleProduct from '../components/SingleProduct';

describe('SingleProduct', () => {
  it('renders the product details', () => {
    const product = {
      id: '1',
      name: 'Test Product',
      description: 'This is a test product',
      photo: '/test-product.jpg',
    };

    const { getByText, getByAltText } = render(<SingleProduct product={product} />);

    const productName = getByText('Test Product');
    const productDescription = getByText('This is a test product');
    const productImage = getByAltText('Test Product');

    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
    expect(productImage.getAttribute('src')).toBe('/_next/image?url=%2Ftest-product.jpg&w=1200&q=75');
    expect(productImage.getAttribute('alt')).toBe('Test Product');
    expect(productImage.getAttribute('width')).toBe('600');
    expect(productImage.getAttribute('height')).toBe('400');
  });
});