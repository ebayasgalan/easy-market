'use client';

import styled from 'styled-components';

const Count = styled.div`
  background: var(--red);
  color: white;
  border-radius: 50%;
  width: 25px;
  text-align: center;
  margin: auto;
  font-weight: 600;
  font-size: 15px;
`;

export default function CartCount({ count }) {
  return (
    <Count>
      {count}
    </Count>
  );
}