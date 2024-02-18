'use client';

// import './styles/paginationStyles.scss';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import ReactPaginate from 'react-paginate';

export default function Pagination({ productsCount, setPage }) {
  const perPage = 6;
  const pageCount = Math.ceil(productsCount / perPage);

  return (
    <ReactPaginate
      containerClassName={"flex items-center justify-between border-t border-gray-200 px-8 mx-auto max-w-7xl"}
      pageClassName={"hidden md:-mt-px md:flex"}
      pageLinkClassName={'inline-flex items-center border-t-1 border-transparent px-4 pt-3 text-md font-medium text-gray-500 hover:text-gray-700'}
      activeClassName={"inline-flex items-center border-t-2 border-indigo-500 px-3 font-medium text-indigo-600"}
      onPageChange={(event) => setPage(event.selected)}
      pageCount={pageCount}
      breakLabel="..."
      previousClassName={'-mt-px flex w-0 flex-1'}
      previousLinkClassName={'inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'}
      previousLabel={<ArrowLongLeftIcon className="mr-3 h-8 w-8 text-gray-400" aria-hidden="true" />}
      nextClassName={'-mt-px flex w-0 flex-1 justify-end'}
      nextLinkClassName={'inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'}
      nextLabel={<ArrowLongRightIcon className="ml-3 h-8 w-8 text-gray-400" aria-hidden="true" />}
    />
  );
}