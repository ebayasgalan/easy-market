// @ts-nocheck
// import './styles/orderStyles.scss';

import formatMoney from '../lib/formatMoney';
import Image from 'next/image';

export default function SingleOrderPage({ order }) {
  // console.log('single order, order: ', order);
  const products = order.items;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Order Details</h1>
        <div className="mt-2 pb-5 text-sm sm:flex sm:justify-between">
          <dl className="flex">
            <dt className="text-gray-500">Order number:&nbsp;</dt>
            <dd className="font-medium text-gray-900">{order.id}</dd>
          </dl>
        </div>

        <div className="mt-4 border-t border-gray-200">
          <h3 className="sr-only">Items</h3>
          {products.map((product) => (
            <div key={product.id} className="flex space-x-6 border-b border-gray-200 py-10">
              <Image
                src={product.photo}
                alt={product.name}
                width={200}
                height={300}
                className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
              />
              <div className="flex flex-auto flex-col">
                <div>
                  <h4 className="font-medium text-gray-900">
                    {product.name}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                </div>
                <div className="mt-6 flex flex-1 items-end">
                  <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                    <div className="flex">
                      <dt className="font-medium text-gray-900">Quantity</dt>
                      <dd className="ml-2 text-gray-700">{product.quantity}</dd>
                    </div>
                    <div className="flex pl-4 sm:pl-6">
                      <dt className="font-medium text-gray-900">Price</dt>
                      <dd className="ml-2 text-gray-700">{formatMoney(product.price)}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}

          <div className="sm:ml-40 sm:pl-6">
            <h3 className="sr-only">Your information</h3>

            <h4 className="sr-only">Addresses</h4>
            <dl className="grid grid-cols-2 gap-x-6 py-10 text-sm">
              <div>
                <dt className="font-medium text-gray-900">Shipping address</dt>
                <dd className="mt-2 text-gray-700">
                  <address className="not-italic">
                    <span className="block">Kristin Watson</span>
                    <span className="block">7363 Cynthia Pass</span>
                    <span className="block">Toronto, ON N3Y 4H8</span>
                  </address>
                </dd>
              </div>
              <h4 className="sr-only">Payment</h4>
              <div>
                <dt className="font-medium text-gray-900">Payment method</dt>
                <dd className="mt-2 text-gray-700">
                  <p>Apple Pay</p>
                  <p>Mastercard</p>
                  <p>
                    <span aria-hidden="true">••••</span>
                    <span className="sr-only">Ending in </span>1545
                  </p>
                </dd>
              </div>
            </dl>

            <h3 className="sr-only">Summary</h3>
            <dl className="divide-y divide-gray-200 py-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-0 lg:py-8">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Subtotal</dt>
                <dd className="text-gray-700">{formatMoney(order.total)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Shipping</dt>
                <dd className="text-gray-700">$5.00</dd>
              </div>
              <div className="flex justify-between">
                  <dt className="ont-medium text-gray-900">Tax</dt>
                  <dd className="text-gray-700">$5.52</dd>
                </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-900">Total</dt>
                <dd className="text-gray-900">{formatMoney(order.total + 1052)}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}