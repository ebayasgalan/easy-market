'use client';

import Link from 'next/link';
// import PaginationStyles from './styles/PaginationStyles';

export default function Pagination({ page, productsCount }) {
  const perPage = 4;
  const pageCount = Math.ceil(productsCount / perPage);
  return (
    // <PaginationStyles>
    <>
      <Link href={`/products/${page - 1}`} aria-disabled={page <= 1}>← Prev</Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{productsCount} Items Total</p>
      <Link href={`/products/${page + 1}`} aria-disabled={page >= pageCount}>Next →</Link>
    </>
    // </PaginationStyles>
  );
}