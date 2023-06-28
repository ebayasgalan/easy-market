'use client';

import Link from 'next/link';
import Image from 'next/image';
import './styles/itemStyles.scss';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
// import AddToCart from './AddToCartButton';

// export default function Product({ product, userId }) {
export default function Product({ product }) {
  console.log('Product, product: ', product);
  return (
    <div className='item'>
      <Image
        src={product.photo}
        alt={product.name}
        width={500}
        height={300}
        style={{
          objectFit: 'cover',
        }}
      />
      <h3 className='title'>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </h3>
      <span className='price'>{formatMoney(product.price)}</span>
      <p>{product.description}</p>
      {/* {userId && */}
        <div className="buttonList">
          <Link
            href={{
              pathname: '/update',
              query: {
                id: product.id,
              },
            }}
          >
            Edit ✏️
          </Link>
          {/* <AddToCart id={product.id} userId={userId} /> */}
          <DeleteProduct id={product.id}>Delete</DeleteProduct>
        </div>
      {/* } */}
    </div>
  );
}