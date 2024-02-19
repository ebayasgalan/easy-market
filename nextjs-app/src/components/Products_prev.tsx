import './styles/productsListStyles.scss';
import Product from './Product';

export default async function Products({ products, userId, page }) {
  // console.log('products: ', products);
  // console.log('userId: ', userId);
  // console.log('page: ', page);
  let endIndex = page * 4;
  let startIndex = endIndex - 4;
  const pageProducts = products?.slice(startIndex, endIndex);

  return (
    <div>
        <div className='products'>
          {pageProducts?.map((product) => (
            <Product key={product.id} product={product} userId={userId} />
          ))}
        </div>
    </div>
  );
}