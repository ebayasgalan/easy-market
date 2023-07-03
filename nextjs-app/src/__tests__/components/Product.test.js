import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from '../../components/Product';
import { useRouter } from 'next/router';
import AddToCartButton from '../../components/AddToCartButton';
import DeleteProduct from '../../components/DeleteProduct';

jest.mock('next/link', () => ({ children }) => children);

jest.mock('next/image', () => ({ src, alt, width, height, style }) => (
  <img src={src} alt={alt} width={width} height={height} style={style} />
));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../lib/formatMoney', () => jest.fn((price) => `$${price.toFixed(2)}`));

jest.mock('../../components/AddToCartButton', () => jest.fn(({ id, userId }) => (
  <button onClick={() => {}}>
    Add To Cart 🛒
  </button>
)));

jest.mock('../../components/DeleteProduct', () => jest.fn(({ id, children }) => (
  <button onClick={() => {}}>
    {children}
  </button>
)));

describe('Product', () => {
  beforeEach(() => {
    useRouter.mockReset();
  });

  it('should render the product component with the correct data', () => {
    const product = {
      id: 'product-id',
      name: 'Product 1',
      price: 9.99,
      photo: 'product1.jpg',
      description: 'Product description',
    };
    const userId = 'user-id';

    render(<Product product={product} userId={userId} />);

    expect(screen.getByAltText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('$9.99')).toBeInTheDocument();
    expect(screen.getByText('Product description')).toBeInTheDocument();
    expect(screen.getByText('Edit ✏️')).toBeInTheDocument();
    expect(AddToCartButton).toHaveBeenCalledTimes(1);
    expect(AddToCartButton).toHaveBeenCalledWith({ id: 'product-id', userId: 'user-id' }, {});
    expect(DeleteProduct).toHaveBeenCalledTimes(1);
  });

  it('should not render the edit, add to cart, and delete buttons if userId is not provided', () => {
    const product = {
      id: 'product-id',
      name: 'Product 1',
      price: 9.99,
      photo: 'product1.jpg',
      description: 'Product description',
    };

    render(<Product product={product} />);

    expect(screen.queryByText('Edit ✏️')).toBeNull();
    expect(screen.queryByText('Add To Cart 🛒')).toBeNull();
    expect(screen.queryByText('Delete')).toBeNull();
  });
});