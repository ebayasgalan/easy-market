// import './styles/productsListStyles.scss';
import Product from './Product';

export default async function Products({ products, page }) {
  // console.log('products: ', products);
  // console.log('page: ', page);
  let endIndex = page * 6;
  let startIndex = endIndex - 6;
  const pageProducts = products?.slice(startIndex, endIndex);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {pageProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}