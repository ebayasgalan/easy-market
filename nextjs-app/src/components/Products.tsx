import './styles/productsListStyles.scss';
import Product from './Product';
import prisma from "../lib/prisma";
// import Nprogress from 'nprogress';

var sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// const res = await fetch('https://jsonplaceholder.typicode.com/todos');
// const products = await res.json();
// await sleep(3000);

const getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany();
    return products;
  }catch(err) {
    console.error('err: ', err);
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
  await sleep(2000);
  // console.log('products: ', products);
  // const pageProducts = products.slice(startIndex, endIndex);
  // userId={userId} 

  return (
    <div>
        <div className='products'>
          {products?.map((product, i) => (
            <Product key={i} product={product}  />
          ))}
        </div>
    </div>
  );
}