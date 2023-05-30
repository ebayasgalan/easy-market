// 'use client';

import Pagination from '../../components/Pagination';
import Products from '../../components/Products';

export default async function ProductsPage({ params }) {
  let page = parseInt(params?.page);
  page = page || 1;

  return (
    <div>
      <Pagination page={page} />
      <Products page={page} />
      <Pagination page={page} />
    </div>
  );
}