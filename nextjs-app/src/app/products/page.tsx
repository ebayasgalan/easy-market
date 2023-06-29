import prisma from "../../lib/prisma";
import { getCurrentUser } from '../../lib/server-actions';
import { Suspense } from 'react';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

const getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany();
    return products;
  }catch(err) {
    console.error('err: ', err);
  }
}

// var sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// var pollProducts = (promiseFn, duration) => promiseFn().then(res => {
//   if(!res.length) sleep(duration).then(() => pollProducts(promiseFn, duration))
//   else return res;
// });

export default async function ProductsPage({ params }) {
  const page = parseInt(params.page);

  // const products = await getAllProducts();

  // Initiate both requests in parallel
  // const allProducts = getAllProducts();
  // const userData = getCurrentUser();
  const user = await getCurrentUser();

  // Wait for the promises to resolve
  // const [products, user] = await Promise.all([allProducts, userData]);

  // console.log('ProductsPage, products: ', products);
  // console.log('ProductsPage, user: ', user);
  // userId={user?.id} 

  return (
    <div>
      {/* <Pagination page={page || 1} productsCount={products?.length} /> */}
      <Suspense fallback={<p>Loading products...</p>}>
        <Products page={page || 1} userId={user?.id} />
      </Suspense>
      {/* <Pagination page={page || 1} productsCount={products?.length} /> */}
    </div>
  )
}