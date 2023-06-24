'use client';

// import styled from 'styled-components';

// const ProductStyles = styled.div`
//   display: grid;
//   grid-auto-columns: 1fr;
//   grid-auto-flow: column;
//   max-width: var(--maxWidth);
//   justify-content: center;
//   align-items: top;
//   gap: 2rem;
//   img {
//     width: 100%;
//     object-fit: contain;
//   }
// `;

export default function SingleProduct({ product }) {

  // console.log('SingleProduct, product: ', product);
  return (
    // <ProductStyles>
    <>
      <img
        src={product.photo}
        alt={product.name}
      />
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      </>
    // </ProductStyles>
  );
}