import { useTransition } from 'react';
import { removeFromCart } from '../lib/server-actions';

export default function RemoveFromCart({ id }: {id: string}) {
  let [isPending, startTransition] = useTransition();
  
  return (
    <button 
      className="font-medium text-indigo-600 hover:text-indigo-500"
      onClick={() => startTransition(() => removeFromCart(id))}
    >
      Remove
    </button>
  );
}
