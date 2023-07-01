import React from 'react';
import { shallow } from 'enzyme';
import CartItem from './CartItem';
import formatMoney from '../lib/formatMoney';
import RemoveFromCart from './RemoveFromCart';

describe('CartItem', () => {
  it('should render the CartItem component correctly', () => {
    const cartItem = {
      id: 'product-id',
      name: 'Product Name',
      photo: 'product-photo.jpg',
      price: 9.99,
      quantity: 2,
    };

    const wrapper = shallow(<CartItem cartItem={cartItem} />);

    // Assert the image rendering
    expect(wrapper.find('Image').prop('src')).toEqual(cartItem.photo);
    expect(wrapper.find('Image').prop('alt')).toEqual(cartItem.name);

    // Assert the name and price rendering
    expect(wrapper.find('h3').text()).toEqual(cartItem.name);
    expect(wrapper.find('p').text()).toContain(formatMoney(cartItem.price * cartItem.quantity));
    expect(wrapper.find('p em').text()).toContain(
      `${cartItem.quantity} × ${formatMoney(cartItem.price)} each`
    );

    // Assert the RemoveFromCart component rendering
    expect(wrapper.find(RemoveFromCart).prop('id')).toEqual(cartItem.id);
  });

  it('should not render anything if cartItem prop is null', () => {
    const wrapper = shallow(<CartItem cartItem={null} />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
