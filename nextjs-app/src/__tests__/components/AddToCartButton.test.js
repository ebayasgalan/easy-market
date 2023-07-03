import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddToCartButton from '../../components/AddToCartButton';
import { addToCart } from '../../lib/server-actions';

jest.mock('../../lib/server-actions', () => ({
  addToCart: jest.fn(),
}));

describe('AddToCartButton', () => {
  it('should call addToCart when the button is clicked', () => {
    const id = 'product-id';
    const userId = 'user-id';

    render(<AddToCartButton id={id} userId={userId} />);
    const addButton = screen.getByText('Add To Cart 🛒');

    fireEvent.click(addButton);

    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toHaveBeenCalledWith(id, userId);
  });
});