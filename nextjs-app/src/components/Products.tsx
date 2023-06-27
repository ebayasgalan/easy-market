import './styles/productsListStyles.scss';
import Product from './Product';
// import Nprogress from 'nprogress';

export default async function Products({ products, userId, page }) {
  // console.log('products: ', products);
  // console.log('userId: ', userId);
  // console.log('page: ', page);
  let endIndex = page * 4;
  let startIndex = endIndex - 4;
  const pageProducts = products.slice(startIndex, endIndex);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const pageDelay = async () => {
    // Nprogress.start();
    const slept = await sleep(1000);
    // Nprogress.done();
    console.log('delay ended');
  }

  pageDelay();

  return (
    <div>
        <div className='products'>
          {pageProducts.map((product) => (
            <Product key={product.id} product={product} userId={userId} />
          ))}
        </div>
    </div>
  );
}