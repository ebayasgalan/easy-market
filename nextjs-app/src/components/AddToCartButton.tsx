'use client';

import { useTransition } from 'react';
// import { addToCart } from '../lib/server-actions';

export default function AddToCartButton({ id, userId }) {
  let [isPending, startTransition] = useTransition();

  return (
    // <button onClick={() => startTransition(() => addToCart(id, userId))}>
    <button onClick={() => startTransition(() => console.log('hello'))}>
      Add To Cart 🛒
    </button>
  );
}