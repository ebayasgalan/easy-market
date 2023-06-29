import './styles/productsListStyles.scss';
import Product from './Product';
import prisma from "../lib/prisma";

const getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany();
    return products;
  }catch(err) {
    throw new Error(err);
  }
}

// export default async function Products({ products, userId, page }) { 
export default async function Products({ page }) {
  // console.log('products: ', products);
  // console.log('userId: ', userId);
  // console.log('page: ', page);
  // let endIndex = page * 4;
  // let startIndex = endIndex - 4;
  const products = await getAllProducts();
  // console.log('products: ', products);
  // const pageProducts = products.slice(startIndex, endIndex);
  // userId={userId} 

  return (
    <div>
        <div className='products'>
          {products?.map((product, i) => (
            <Product key={i} product={product}/>
          ))}
        </div>
    </div>
  );
}