// @ts-nocheck
'use client';

import './styles/cartStyles.scss';
import Image from 'next/image';
import clsx from 'clsx';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import RemoveFromCart from './RemoveFromCart';
import { Checkout } from './Checkout';

export function CartItem({ cartItem }) {
  if (!cartItem) return null;
  return (
    <li className='cartItems'>
      <Image
        width={100}
        height={200}
        src={cartItem.photo}
        alt={cartItem.name}
        style={{objectFit: 'cover'}}
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
      <RemoveFromCart id={cartItem.id} />
    </li>
  );
}

export default function Cart({ cartItems, currentUser }) {
  const { cartOpen, closeCart } = useCart();
  
  if (!currentUser?.id) return null;
  
  const totalPrice = calcTotalPrice(cartItems);
  return (
    <div className={clsx('cart', cartOpen && 'open')}>
      <header>
        <h3 className='supreme'>{currentUser.name}&apos;s Cart</h3>
        <button className='closeButton' onClick={closeCart}>&times;</button>
      </header>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(totalPrice)}</p>
        <Checkout totalPrice={totalPrice} userId={currentUser.id} cartItems={cartItems} />
      </footer>
    </div>
  );
}