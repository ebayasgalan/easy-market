import Products from '../components/Products';
import prisma from "../lib/prisma";
import { getCurrentUser } from '../lib/server-actions';

const getAllProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
}

export default async function HomePage() {
  // Initiate both requests in parallel
  const productsData = getAllProducts();
  const userData = getCurrentUser();

  // Wait for the promises to resolve
  const [products, user] = await Promise.all([productsData, userData])

  // console.log('root page, all products: ', products);
  // console.log('user: ', user);

  return (
    <main>
      <Products products={products} userId={user?.id} />
    </main>
  )
}
