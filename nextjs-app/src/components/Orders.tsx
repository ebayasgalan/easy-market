// @ts-nocheck

import Link from 'next/link';
import formatMoney from '@/lib/formatMoney';
import './styles/orderItemStyles.scss';
import Image from 'next/image';

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

export default function OrdersPage({ orders }) {
  // console.log('orders: ', orders);
  return (
    <div>
      <h2>You have {orders.length} order{orders.length === 1 ? '' : 's'}!</h2>
      <ul className='orderItems'>
        {orders.map((order, i) => (
          <li className='orderItem' key={i}>
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
                    <Image
                      key={`image-${item.id}`}
                      src={item.photo}
                      alt={item.name}
                      width={300}
                      height={400}
                      style={{
                        objectFit: 'cover'
                      }}
                    />
                  ))}
                </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}