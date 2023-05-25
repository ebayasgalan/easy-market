'use client';

import Link from 'next/link';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();
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
        <Link href="/products">Products</Link>
        {user && (
          <>
            <Link href="/sell">Sell</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/account">Account</Link>
            <SignOut />
            <button type="button" onClick={openCart}>
              My Cart
              <CartCount
                count={user.cart.reduce(
                  (tally, cartItem) =>
                    tally + (cartItem.product ? cartItem.quantity : 0),
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
