import prisma from "../../lib/prisma";
import { getCurrentUser } from '../../lib/server-actions';
import { Suspense } from 'react';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

const getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch(err) {
    console.error(err);
  }
}

export default async function ProductsPage({ params }) {
  const page = parseInt(params.page);

  // Initiate both requests in parallel
  const allProducts = getAllProducts();
  const userData = getCurrentUser();

  // Wait for the promises to resolve
  let products = null,
      user = null;
  try {
    [products, user] = await Promise.all([allProducts, userData]);
  } catch(err) {
    console.error('ProductsPage, err: ', err);
  }
  // console.log('ProductsPage, products: ', products);
  // console.log('ProductsPage, user: ', user);

  return (
    <div>
      <Pagination page={page || 1} productsCount={products?.length} />
      <Suspense fallback={<p>Loading products...</p>}>
        <Products page={page || 1} products={products} userId={user?.id} />
      </Suspense>
      <Pagination page={page || 1} productsCount={products?.length} />
    </div>
  )
}