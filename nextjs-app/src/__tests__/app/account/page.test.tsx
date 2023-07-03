import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountPage from '../../../app/account/page';
import { getCurrentUser } from '@/lib/server-actions';

// jest.mock('@/lib/server-actions');

describe('Account Page', () => {
  it('Should render properly', () => {
    render(<AccountPage />);

    const header = screen.getByRole('heading');
    const headerText = 'Hello John Doe';

    const user = {
      id: '123',
      name: 'John Doe',
      cart: [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }],
    };

    getCurrentUser.mockResolvedValue(user);

    const { getByText } = render(<AccountPage />);

    expect(header).toHaveTextContent(headerText);

    // expect(getByText(`Hello ${user.name}`)).toBeInTheDocument();
    // expect(getByText(`you have ${user.cart.length} items in your cart`)).toBeInTheDocument();
  });

//   it('does not render user information when user is not present', async () => {
//     getCurrentUser.mockResolvedValue(null);

//     const { container } = render(<AccountPage />);

//     expect(container.firstChild).toBeNull();
//   });
});