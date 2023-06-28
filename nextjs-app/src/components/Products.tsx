'use client';

import './styles/productsListStyles.scss';
import Product from './Product';
// import Nprogress from 'nprogress';

// export default async function Products({ products, userId, page }) { 
export default async function Products({ products, page }) {
  // console.log('products: ', products);
  // console.log('userId: ', userId);
  // console.log('page: ', page);
  let endIndex = page * 4;
  let startIndex = endIndex - 4;
  // const pageProducts = products.slice(startIndex, endIndex);
  // const pageProducts = products;
  // userId={userId} 

  return (
    <div>
        <div className='products'>
          {products?.map((product) => (
            <Product key={product.id} product={product}  />
          ))}
        </div>
    </div>
  );
}