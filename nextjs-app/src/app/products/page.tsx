import prisma from "../../lib/prisma";
import { getCurrentUser } from '../../lib/server-actions';
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

export default async function ProductsPage({ params }) {
  const page = parseInt(params.page);
  console.log('ProductsPage, params: ', params);

  // Initiate both requests in parallel
  // const allProducts = getAllProducts();
  // const userData = getCurrentUser();
  // const products = await getAllProducts();
  // const user = await getCurrentUser().catch(err => console.log('err: ', err));

  // Wait for the promises to resolve
  // const [products, user] = await Promise.all([allProducts, userData]).catch(err => console.error('err: ', err));

  return (
    <main>
      {/* <Pagination page={page || 1} productsCount={products?.length} /> */}
      <Pagination page={1} productsCount={4} />
      {/* <Products page={page || 1} products={products} userId={user?.id} /> */}
      <Pagination page={1} productsCount={4} />
      {/* <Pagination page={page || 1} productsCount={products?.length} /> */}
    </main>
  )
}