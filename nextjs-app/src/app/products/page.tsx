import prisma from "../../lib/prisma";
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
  let products = await getAllProducts();

  // console.log('ProductsPage, products: ', products);
  // console.log('ProductsPage, user: ', user);

  return (
    <div>
      <Pagination page={page || 1} productsCount={products?.length} />
      <Suspense fallback={<p>Loading products...</p>}>
        <Products page={page || 1} products={products} />
      </Suspense>
      <Pagination page={page || 1} productsCount={products?.length} />
    </div>
  )
}