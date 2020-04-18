import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import CartStyles from './styles/CartStyles';
import User from './User';
import { adopt } from 'react-adopt';
import CloseButton from './styles/CloseButton';
import CoolButton from './styles/CoolButton';
import CartItem from './CartItem';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import ChargeMyCard from './ChargeMyCard';

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleCart: ({ render }) => (
    <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>
  ),
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>,
});

const Cart = () => {
  return (
    <Composed>
      {({ user, toggleCart, localState }) => {
        const me = user.data.me;
        if (!me) return null;
        return (
          <CartStyles open={localState.data.cartOpen}>
            <header>
              <CloseButton onClick={toggleCart} title='close'>
                &times;
              </CloseButton>
              <h3>{me.name}'s Cart</h3>
              <p>
                You have {me.cart.length} item
                {me.cart.length === 1 ? '' : 's'} in your cart
              </p>
            </header>
            <ul>
              {me.cart.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </ul>
            <footer>
              <p>{formatMoney(calcTotalPrice(me.cart))}</p>
              {me.cart.length && (
                <ChargeMyCard>
                  <CoolButton>Checkout</CoolButton>
                </ChargeMyCard>
              )}
            </footer>
          </CartStyles>
        );
      }}
    </Composed>
  );
};

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
