import React from 'react';
import { render } from '@testing-library/react';
import Products from '@/components/Products';

jest.mock('../../../lib/prisma', () => ({
  product: {
    findMany: jest.fn(() => Promise.resolve([
      {
        id: 'product-id-1',
        name: 'Product 1',
        price: 9.99,
        photo: 'product1.jpg',
      },
      {
        id: 'product-id-2',
        name: 'Product 2',
        price: 14.99,
        photo: 'product2.jpg',
      },
    ])),
  },
}));

jest.mock('../../../lib/server-actions', () => ({
  getCurrentUser: jest.fn(() => Promise.resolve({ id: 'user-id', name: 'John Doe' })),
}));

jest.mock('../../../components/Products', () => jest.fn(({ products }) => (
  <ul>
    {products?.map((product) => (
      <li key={product.id}>{product.name}</li>
    ))}
  </ul>
)));

describe('Products Page', () => {
  it('should render the products page with correct data', async () => {
    const params = { page: '1' };
    render(<Products params={params} />);

    expect(Products).toHaveBeenCalledTimes(1);

  });
});