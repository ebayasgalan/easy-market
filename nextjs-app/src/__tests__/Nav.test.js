import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Nav from '../components/Nav';
import { useSession } from 'next-auth/react';
import { useCart } from '../lib/cartState';

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

jest.mock('../lib/cartState', () => ({
  useCart: jest.fn(),
}));

describe('Nav', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders authenticated navigation links when user is authenticated', () => {
    useSession.mockReturnValue({
      data: {},
      status: 'authenticated',
    });

    useCart.mockReturnValue({
      openCart: jest.fn(),
    });

    const { getByText } = render(<Nav count={0} />);

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Sell')).toBeInTheDocument();
    expect(getByText('Orders')).toBeInTheDocument();
    expect(getByText('Account')).toBeInTheDocument();
    // expect(getByText('Signout')).toBeInTheDocument();
    expect(getByText('My Cart')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
  });

  it('renders signin link when user is not authenticated', () => {
    useSession.mockReturnValue({
      data: {},
      status: 'unauthenticated',
    });

    const { getByText } = render(<Nav count={0} />);

    expect(getByText('Sign In')).toBeInTheDocument();
  });

  it('opens cart when "My Cart" button is clicked', () => {
    useSession.mockReturnValue({
      data: {},
      status: 'authenticated',
    });

    const openCartMock = jest.fn();
    useCart.mockReturnValue({
      openCart: openCartMock,
    });

    const { getByText } = render(<Nav count={0} />);

    fireEvent.click(getByText('My Cart'));

    expect(openCartMock).toHaveBeenCalled();
  });

//   it('toggles mobile-active class when toggle button is clicked', () => {
//     useSession.mockReturnValue({
//       data: {},
//       status: 'authenticated',
//     });

//     const { getByTestId } = render(<Nav count={0} />);
//     const toggleButton = getByTestId('toggle-btn');

//     fireEvent.click(toggleButton);

//     const wrapper = document.querySelector('.wrapper');

//     expect(wrapper?.classList.contains('mobile-active')).toBeTruthy();

//     fireEvent.click(toggleButton);

//     expect(wrapper?.classList.contains('mobile-active')).toBeFalsy();
//   });
});