'use client';

import { useUser } from '../../components/User';

export default function OrderPage() {
  const user = useUser();

  if(user) {
    console.log('user: ', user);
    const numberOfItems = user.cart.length;
    return <div>
      <p>Hello {user.name}</p>
      <p>you have {numberOfItems} {numberOfItems > 1 ? 'items': 'item'} in your cart</p>
    </div>
  }
}

