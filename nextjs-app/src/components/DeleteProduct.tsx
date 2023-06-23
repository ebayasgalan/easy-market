'use client';

import { useTransition } from 'react';
import styled from 'styled-components';
import { deleteProduct } from '../lib/server-actions';

const ButtonStyles = styled.button`
  &:hover{
    cursor: pointer
  }
`

const onClickHandler = async (id) => {
  if (confirm('Are you sure you want to delete this item?')) {
    const deletedProduct = await deleteProduct(id);
    console.log('Product Deleted!', deletedProduct);
  }
}

export default function DeleteProduct({ id, children }) {
  let [isPending, startTransition] = useTransition();

  return (
    <ButtonStyles onClick={() => startTransition(() => onClickHandler(id))}>
      {children}
    </ButtonStyles>
  );
}