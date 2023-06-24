import prisma from "../../lib/prisma";
import { getCurrentUser } from '../../lib/server-actions';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

const getAllProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
}

export default async function ProductsPage({ params }) {
  const page = parseInt(params.page);

  // Initiate both requests in parallel
  const productsData = getAllProducts();
  const userData = getCurrentUser();

  // Wait for the promises to resolve
  const [products, user] = await Promise.all([productsData, userData]);

  return (
    <main>
      <h1>From Products Component</h1>
      {/* <Pagination page={page || 1} productsCount={products.length} /> */}
      {/* <Products page={page || 1} products={products} userId={user?.id} /> */}
      {/* <Pagination page={page || 1} productsCount={products.length} /> */}
    </main>
  )
}
