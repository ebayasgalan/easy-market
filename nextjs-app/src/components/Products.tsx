'use client';

import styled from 'styled-components';
import Product from './Product';

const ProductsListStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: space-between;
  }
`;

export default async function Products({ products, userId }) {
  return (
    <div>
       <ProductsListStyles>
          {products.map((product) => (
            <Product key={product.id} product={product} userId={userId} />
          ))}
      </ProductsListStyles> 
    </div>
  );
}
