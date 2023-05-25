// import { useUser } from '../../components/User';
'use client';

import { gql, useQuery } from '@apollo/client';

const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cart {
          id
          quantity
          product {
            id
            price
            name
            description
            photo {
              picture {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default function OrderPage() {
  // const user = useUser();
  const { data } = useQuery(CURRENT_USER_QUERY);
  const user = data?.authenticatedItem;

  if(user) {
    console.log('user: ', user);
    const numberOfItems = user.cart.length;
    return <div>
      <p>Hello {user.name}</p>
      <p>you have {numberOfItems} {numberOfItems > 1 ? 'items': 'item'} in your cart</p>
    </div>
  }
}

