'use client';

import { useTransition } from 'react';
import styled from 'styled-components';
import { removeFromCart } from '../lib/server-actions';

const RemoveButtonStyle = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;

export default function RemoveFromCart({ id }) {
  let [isPending, startTransition] = useTransition();
  
  return (
    <RemoveButtonStyle onClick={() => startTransition(() => removeFromCart(id))}>
      &times;
    </RemoveButtonStyle>
  );
}
