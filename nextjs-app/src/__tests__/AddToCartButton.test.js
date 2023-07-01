import React from 'react';
import { shallow } from 'enzyme';
import AddToCartButton from './AddToCartButton';
import { addToCart } from '../lib/server-actions';

jest.mock('../lib/server-actions', () => ({
  addToCart: jest.fn(),
}));

describe('AddToCartButton', () => {
  it('should call addToCart function with correct parameters on button click', () => {
    const id = 'product-id';
    const userId = 'user-id';
    const wrapper = shallow(<AddToCartButton id={id} userId={userId} />);

    wrapper.find('button').simulate('click');

    expect(addToCart).toHaveBeenCalledWith(id, userId);
  });
});