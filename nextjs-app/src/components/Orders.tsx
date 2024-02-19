// @ts-nocheck
// 'use client'
import Link from 'next/link';
import formatMoney from '@/lib/formatMoney';
// import './styles/orderItemStyles.scss';
import Image from 'next/image';

export default function OrdersPage({ orders }) {
  // console.log('orders: ', orders);
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
            <p className="mt-2 text-sm text-gray-500">
              You have {orders.length} order{orders.length === 1 ? '' : 's'}
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>
          <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
              {orders.map((order, i) => (
                <div
                  key={i}
                  className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                >

                  <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
                    <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 lg:col-span-2">
                      <div>
                        <dt className="font-medium text-gray-900">Order</dt>
                        <dd className="mt-1 text-gray-500">{order.id}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-900">Total</dt>
                        <dd className="mt-1 font-medium text-gray-900">{formatMoney(order.total)}</dd>
                      </div>
                    </dl>

                    <div className="lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                      <Link
                        href={`/order/${order.id}`}
                        className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span>View Order</span>
                        <span className="sr-only">{order.id}</span>
                      </Link>
                    </div>
                  </div>

                  {/* Products */}
                  <h4 className="sr-only">Items</h4>
                  <ul role="list" className="divide-y divide-gray-200">
                    {order.items.map((item) => (
                      <li key={item.id} className="p-4 sm:p-6">
                        <div className="flex items-center sm:items-start">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
                            <Image
                              src={item.photo}
                              alt={item.name}
                              width={300}
                              height={400}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="ml-6 flex-1 text-sm">
                            <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                              <h5>{item.name}</h5>
                              <p className="mt-2 sm:mt-0">{formatMoney(item.price)}</p>
                            </div>
                            <p className="hidden text-gray-500 sm:mt-2 sm:block">{item.description}</p>
                            <p>quantity: {item.quantity}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};