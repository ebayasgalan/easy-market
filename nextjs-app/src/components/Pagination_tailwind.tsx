import Link from 'next/link';
// import './styles/paginationStyles.scss';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import ReactPaginate from 'react-paginate';

export default function Pagination({ page, productsCount }) {
  const perPage = 4;
  const pageCount = Math.ceil(productsCount / perPage);
  return (
    // <div className='pagination'>
    //   <Link href={`/products/${page - 1}`} aria-disabled={page <= 1}>← Prev</Link>
    //   <p>
    //     Page {page} of {pageCount}
    //   </p>
    //   <p>{productsCount} Items Total</p>
    //   <Link href={`/products/${page + 1}`} aria-disabled={page >= pageCount}>Next →</Link>
    // </div>

    <nav className="flex items-center justify-between border-t border-gray-200 px-8">
      <div className="-mt-px flex w-0 flex-1">
        <Link
          href={`/products/${page - 1}`} 
          aria-disabled={page <= 1}
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          Previous
        </Link>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <Link
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          1
        </Link>
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        <Link
          href="#"
          className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
          aria-current="page"
        >
          2
        </Link>
        <Link
          href="#"
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          3
        </Link>
        <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
          ...
        </span>
        <Link
          href={`/products/${pageCount}`} 
          className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          {pageCount}
        </Link>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <Link
          href={`/products/${page + 1}`} 
          aria-disabled={page >= pageCount}
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Link>
      </div>
    </nav>
  );
}