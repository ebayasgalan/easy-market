'use client';

// import styled from 'styled-components';
// import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import Supreme from './styles/Supreme';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import RemoveFromCart from './RemoveFromCart';
// import { Checkout } from './Checkout';

// const CartItemStyles = styled.li`
//   padding: 1rem 0;
//   border-bottom: 1px solid var(--lightGrey);
//   display: grid;
//   grid-template-columns: auto 1fr auto;
//   img {
//     margin-right: 1rem;
//   }
//   h3,
//   p {
//     margin: 0;
//   }
// `;

function CartItem({ cartItem }) {
  if (!cartItem) return null;
  return (
    // <CartItemStyles>
    <>
      <img
        width="100"
        src={cartItem.photo}
        alt={cartItem.name}
      />
      <div>
        <h3>{cartItem.name}</h3>
        <p>
          {formatMoney(cartItem.price * cartItem.quantity)}-
          <em>
            {cartItem.quantity} &times; {formatMoney(cartItem.price)} each
          </em>
        </p>
      </div>
      {/* <RemoveFromCart id={cartItem.id} /> */}
    </>
    // </CartItemStyles>
  );
}

export default function Cart({ cartItems, currentUser }) {
  const { cartOpen, closeCart } = useCart();
  
  if (!currentUser?.id) return null;
  
  const totalPrice = calcTotalPrice(cartItems);
  return (
    // <CartStyles open={cartOpen}>
    <>
      <header>
        {/* <Supreme>{currentUser.name}&apos;s Cart</Supreme>
        <CloseButton onClick={closeCart}>&times;</CloseButton> */}
      </header>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(totalPrice)}</p>
        {/* <Checkout totalPrice={totalPrice} userId={currentUser.id} /> */}
      </footer>
    </>
    // </CartStyles> 
  );
}