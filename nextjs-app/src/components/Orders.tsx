'use client';

import styled from 'styled-components';
import Link from 'next/link';
import formatMoney from '@/lib/formatMoney';
import OrderItemStyles from '@/components/styles/OrderItemStyles';

const OrderUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 4rem;
`;

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

export default function OrdersPage({ orders }) {
  console.log('orders: ', orders);
  return (
    <div>
      <h2>You have {orders.length} orders!</h2>
      <OrderUl>
        {orders.map((order, i) => (
          <OrderItemStyles key={i}>
            <Link href={`/order/${order.id}`}>
                <div className="order-meta">
                  <p>{countItemsInAnOrder(order)} Items</p>
                  <p>
                    {order.items.length} Product
                    {order.items.length === 1 ? '' : 's'}
                  </p>
                  <p>{formatMoney(order.total)}</p>
                </div>
                <div className="images">
                  {order.items.map((item) => (
                    <img
                      key={`image-${item.id}`}
                      src={item.photo}
                      alt={item.name}
                    />
                  ))}
                </div>
            </Link>
          </OrderItemStyles>
        ))}
      </OrderUl>
    </div>
  );
}