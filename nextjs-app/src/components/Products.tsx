import './styles/productsListStyles.scss';
import Product from './Product';
// import Nprogress from 'nprogress';

export default async function Products({ products, userId, page }) {
  // console.log('products: ', products);
  // console.log('userId: ', userId);
  // console.log('page: ', page);
  let endIndex = page * 4;
  let startIndex = endIndex - 4;
  // const pageProducts = products.slice(startIndex, endIndex);
  const pageProducts = products;

  return (
    <div>
        <div className='products'>
          {products.map((product) => (
            // <Product key={product.id} product={product} userId={userId} />
            <h1 key={product.id}>{product.name}</h1>
          ))}
        </div>
    </div>
  );
}