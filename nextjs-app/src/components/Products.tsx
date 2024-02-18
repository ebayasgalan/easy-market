'use client';

// import './styles/productsListStyles.scss';
import { useEffect, useState } from 'react';
import Product from './Product';
import Pagination from './Pagination';

export default function Products({ products }) {
  // console.log('products: ', products);
  // console.log('page: ', page);

  const [pageNumber, setPage] = useState(0); // the current page number
  const [filterData, setFilterData] = useState(products); // the data that will be shown after filtering data for each page.
  const n = 6; // the maximum number of items to show on a page.

  useEffect(() => {
    setFilterData(
      products.filter((item, index) => {
        return (index >= pageNumber * n) && (index < (pageNumber + 1) * n);
      })
    );
  }, [pageNumber]);

  return (
    <>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
              {filterData.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      <Pagination productsCount={products?.length} setPage={setPage} />
    </>
  )
}