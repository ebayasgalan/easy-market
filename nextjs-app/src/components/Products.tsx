import './styles/productsListStyles.scss';
import Product from './Product';
import prisma from "../lib/prisma";

const getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany();
    return products;
  }catch(err) {
    console.error(err);
    // throw new Error(err);
  }
}

// export default async function Products({ products, userId, page }) { 
export default async function Products({ userId, page }) {
  // console.log('products: ', products);
  // console.log('userId: ', userId);
  // console.log('page: ', page);
  let endIndex = page * 4;
  let startIndex = endIndex - 4;
  const products = await getAllProducts();
  // console.log('products: ', products);
  const pageProducts = products?.slice(startIndex, endIndex);

  return (
    <div>
        <div className='products'>
          {pageProducts?.map((product, i) => (
            <Product key={i} product={product} userId={userId} />
          ))}
        </div>
    </div>
  );
}