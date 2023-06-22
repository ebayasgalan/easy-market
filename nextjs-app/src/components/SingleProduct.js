'use client';

// import { useQuery } from '@apollo/client';
// import gql from 'graphql-tag';
// import Head from 'next/head';
import styled from 'styled-components';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: top;
  gap: 2rem;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

// const SINGLE_ITEM_QUERY = gql`
//   query SINGLE_ITEM_QUERY($id: ID!) {
//     product(where: { id: $id }) {
//       name
//       price
//       description
//       id
//       photo {
//         id
//         altText
//         picture {
//           url
//         }
//       }
//     }
//   }
// `;

export default function SingleProduct({ product }) {
  // const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
  //   variables: {
  //     id,
  //   },
  // });
  // if (loading) return <p>Loading...</p>;
  // const { product } = data;
  // console.log("data: ", data);
  console.log('SingleProduct, product: ', product);
  return (
    <ProductStyles>
      {/* <Head>
        <title>Easy Market | {product.name}</title>
      </Head> */}
      <img
        src={product.photo}
        alt={product.name}
      />
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </ProductStyles>
  );
}
