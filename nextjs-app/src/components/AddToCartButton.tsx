'use client';

import { useTransition } from 'react';
import { addToCart } from '../lib/server-actions';

export default function AddToCartButton({ id, userId }) {
  let [isPending, startTransition] = useTransition();

  return (
    <button 
      onClick={() => startTransition(() => addToCart(id, userId))}
      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
    >
      Add To Cart 🛒
    </button>
  );
}