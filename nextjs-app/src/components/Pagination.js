'use client';

import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import DisplayError from './ErrorMessage';

export default function Pagination({ page, productsCount }) {
  const perPage = 4;
  const pageCount = Math.ceil(productsCount / perPage);
  return (
    <PaginationStyles>
      <Head>
        <title>
          Easy Market - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`} aria-disabled={page <= 1}>← Prev</Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{productsCount} Items Total</p>
      <Link href={`/products/${page + 1}`} aria-disabled={page >= pageCount}>Next →</Link>
    </PaginationStyles>
  );
}
