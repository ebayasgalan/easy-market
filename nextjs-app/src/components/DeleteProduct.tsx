'use client';

import { useTransition } from 'react';
import { deleteProduct } from '../lib/server-actions';

const onClickHandler = async (id: string) => {
  if (confirm('Are you sure you want to delete this item?')) {
    const deletedProduct = await deleteProduct(id);
    console.log('Product Deleted!', deletedProduct);
  }
}

export default function DeleteProduct({ id, children }: {id: string, children: React.ReactNode}) {
  let [isPending, startTransition] = useTransition();

  return (
    <button onClick={() => startTransition(() => onClickHandler(id))}>
      {children}
    </button>
  );
}