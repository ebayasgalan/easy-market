// 'use client';

import { useTransition } from 'react';
import { removeFromCart } from '../lib/server-actions';

export default function RemoveFromCart({ id }: {id: string}) {
  let [isPending, startTransition] = useTransition();
  
  return (
    <button className='removeButton' onClick={() => startTransition(() => removeFromCart(id))}>
      &times;
    </button>
  );
}
