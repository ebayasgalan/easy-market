'use client';

import Link from 'next/link';
import './styles/navStyles.scss';
import { useCart } from '../lib/cartState';
import Signout from './Signout';
// import { useUser } from './User';
import CartCount from './CartCount';
import { useSession } from "next-auth/react";

export default function Nav({count}) {
  // const user = useUser();
  const { data: session, status } = useSession();

  let isAuthenticated = false;

  if (status === "authenticated") {
    isAuthenticated = true;
  }
  // console.log('Nav, user: ', user);
  const { openCart }: any = useCart();

  const toggleClass = () => {
    const parentClass: Element | null = document.querySelector('.wrapper');
    if(parentClass?.classList.contains('mobile-active')) {
      parentClass.classList.remove('mobile-active');
    } else {
      parentClass?.classList.add('mobile-active');
    }
  }

  return (
    <div className='navigation'> 
      <div className="toggle-btn" onClick={toggleClass}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='nav-wrapper'>
        {isAuthenticated && (
          <>
            <Link href="/">Home</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/account">Account</Link>
            <Signout />
            <button type="button" onClick={openCart}>
              My Cart
            </button>
            <CartCount count={count} />
          </>
        )}
        {!isAuthenticated && (
          <>
            <Link href="/signin">Sign In</Link>
          </>
        )}
      </div>
    </div>
  );
}