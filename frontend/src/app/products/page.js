// 'use client';

import Pagination from '../../components/Pagination';
import Products from '../../components/Products';
import { keystoneContext } from '../../keystone/context';

// ran this code and the graphql problem was solved: 
// rm -rf node_modules/@keystonejs/keystone/node_modules/graphql


export default async function ProductsPage({ params }) {
  const perPage = 4;
  let page = parseInt(params?.page);
  page = page || 1;

  // This is how I can access the data via keystone-context-object 
  const session = {};
  const allProducts = await keystoneContext.withSession(session).query.Product.findMany({
    query: 'id name price description photo { id picture { id url } }',
  });

  const totalProducts = 11;

  const products = allProducts.slice((page * perPage - perPage), (page * perPage));

  // let fetchedResult = '';
  // await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/graphql`, {
  // await fetch(`https://jsonplaceholder.typicode.com/todos`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ 
  //     // query: `query { users { id name email } }`,
  //     query: `query ALL_PRODUCTS_QUERY($skip: Int = 0, $take: Int) {
  //       products(take: $take, skip: $skip) {
  //         id
  //         name
  //         price
  //         description
  //         photo {
  //           id
  //           picture {
  //             id
  //             url
  //           }
  //         }
  //       }
  //     }`
  //     // variables: {},
  // }),
  //   body: JSON.stringify({ 
  //     // query: `query { users { id name email } }`,
  //     query: `query {
  //         users {
  //           id
  //           name
  //           email
  //         }
  //       }`
  //     // variables: {},
  // }),
  // })
  //   .then(r => r.json())
  //   .then(data => {
  //     fetchedResult = data;
  //     console.log('data: ', data);
  //   })
  //   .catch(err => console.log('err: ', err));

  // const fetchResult = await fetch('/api/graphql', {
  //   query: '{ users { id name email } }',
  // });

  // console.log('fetchedResult: ', fetchedResult);

  return (
    <div>
      <Pagination page={page} productsCount={ totalProducts } />
      {/* <Products page={page} /> */}
      {/* <Products page={page} products={ fetchedResult} /> */}
      <Products page={page} products={ products} />
      <Pagination page={page} productsCount={ totalProducts } />
    </div>
  );
}