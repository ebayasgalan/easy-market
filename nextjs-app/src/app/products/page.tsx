import prisma from "../../lib/prisma";
import { Suspense } from 'react';
import Products from '../../components/Products';

const getAllProducts = async () => {
  let products = null;
  try {
    products = await prisma.product.findMany();
  } catch(err) {
    console.error(err);
  }
  return products;
}

export default async function ProductsPage() {
  let products = await getAllProducts().catch(err => console.error('err: ', err));

  // console.log('ProductsPage, products: ', products);

  return (
    <div>
      <Suspense fallback={<p>Loading products...</p>}>
        <Products products={products} />
      </Suspense>
    </div>
  )
}