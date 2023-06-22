'use client';

import Link from 'next/link';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
// import Signout from './Signout';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav({ cartItems }) {
  const user = useUser();
  console.log('Nav, user: ', user);
  console.log('Nav, cartItems-prop: ', cartItems);
  const { openCart } = useCart();

  const toggleClass = () => {
    const parentClass = document.querySelector('.wrapper');
    if(parentClass.classList.contains('mobile-active')) {
      parentClass.classList.remove('mobile-active');
    } else {
      parentClass.classList.add('mobile-active');
    }
  }

  return (
    <NavStyles className='wrapper'>
      <div className="toggle-btn" onClick={toggleClass}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='nav-wrapper'>
        {user && (
          <>
            <Link href="/">Home</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/account">Account</Link>
            {/* <Signout /> */}
            <button type="button" onClick={openCart}>
              My Cart
              <CartCount
                count={cartItems.reduce(
                  (tally, cartItem) =>
                    tally + (cartItem.id ? cartItem.quantity : 0),
                  0
                )}
              />
            </button>
          </>
        )}
        {!user && (
          <>
            <Link href="/signin">Sign In</Link>
          </>
        )}
      </div>
    </NavStyles>
  );
}
