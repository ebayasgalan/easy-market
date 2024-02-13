'use client';

import Link from 'next/link';
import Image from 'next/image';
// import './styles/itemStyles.scss';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCartButton';

export default function Product({ product, userId }) {
  // console.log(`Product, product: `, product);

  return (
    <Link href={`/product/${product.id}`} className="group text-sm">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <Image
          className="h-full w-full object-cover object-center"
          src={product.photo}
          alt={product.name}
          width={500}
          height={300}
        />
      </div>
      <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
      <p className="italic text-gray-500">{product.description}</p>
      <p className="mt-2 font-medium text-gray-900">{product.price}</p>
    </Link>
  );
}