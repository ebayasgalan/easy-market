import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';
import { useCart } from '../lib/cartState';
import CartItem from './CartItem';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { Checkout } from './Checkout';

jest.mock('../lib/cartState', () => ({
  useCart: jest.fn(),
}));

jest.mock('../lib/formatMoney', () => jest.fn((price) => `$${price.toFixed(2)}`));

jest.mock('../lib/calcTotalPrice', () => jest.fn((cartItems) => {
  let totalPrice = 0;
  cartItems.forEach((cartItem) => {
    totalPrice += cartItem.price * cartItem.quantity;
  });
  return totalPrice;
}));

describe('Cart', () => {
  const cartItems = [
    {
      id: 'product-id-1',
      name: 'Product 1',
      price: 9.99,
      photo: 'product1.jpg',
      quantity: 2,
    },
    {
      id: 'product-id-2',
      name: 'Product 2',
      price: 14.99,
      photo: 'product2.jpg',
      quantity: 1,
    },
  ];

  const currentUser = {
    id: 'user-id',
    name: 'John Doe',
  };

  beforeEach(() => {
    useCart.mockReturnValue({ cartOpen: true, closeCart: jest.fn() });
  });

  it('should render the cart with correct data', () => {
    render(<Cart cartItems={cartItems} currentUser={currentUser} />);

    const cartHeader = screen.getByRole('heading', { name: `${currentUser.name}'s Cart` });
    const cartItemsList = screen.getAllByRole('listitem');
    const totalPriceElement = screen.getByText(formatMoney(calcTotalPrice(cartItems)));
    const checkoutComponent = screen.getByTestId('checkout-component');

    expect(cartHeader).toBeInTheDocument();
    expect(cartItemsList.length).toBe(cartItems.length);
    expect(totalPriceElement).toBeInTheDocument();
    expect(checkoutComponent).toBeInTheDocument();

  });
});