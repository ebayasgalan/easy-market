'use client';

import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCartButton';
import { useUser } from './User';

export default function Product({ product, userId }) {
  const user = useUser();
  return (
    <ItemStyles>
      <img
        src={product.photo}
        alt={product.name}
      />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      {user &&
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
          <AddToCart id={product.id} userId={userId} />
          <DeleteProduct id={product.id}>Delete</DeleteProduct>
        </div>
      }
    </ItemStyles>
  );
}