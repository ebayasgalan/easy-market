import prisma from "../../lib/prisma";
import { getCurrentUser } from '../../lib/server-actions';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

const getAllProducts = async () => {
  const products = await prisma.product.findMany().catch(err => console.error('error: ', err));
  return products;
}

export default async function ProductsPage({ params }) {
  const page = parseInt(params.page);
  console.log('ProductsPage, params: ', params);

  // Initiate both requests in parallel
  // const allProducts = getAllProducts();
  // const userData = getCurrentUser();

  // Wait for the promises to resolve
  // const [products, user] = await Promise.all([allProducts, userData]).catch(err => console.error('err: ', err));

  return (
    <main>
      {/* <Pagination page={page || 1} productsCount={products?.length} />
      <Products page={page || 1} products={products} userId={user?.id} />
      <Pagination page={page || 1} productsCount={products?.length} /> */}
    </main>
  )
}