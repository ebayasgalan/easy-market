'use client';

import Pagination from '../../components/Pagination';
import Products from '../../components/Products';

export default function OrderPage({ params }) {
  const page = parseInt(params.page);

  return (
    <div>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
}