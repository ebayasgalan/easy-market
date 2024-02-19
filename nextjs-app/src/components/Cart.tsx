// @ts-nocheck
'use client';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

// import './styles/cartStyles.scss';
import Image from 'next/image';
import clsx from 'clsx';
import formatMoney from '../lib/formatMoney';
import calcTotalPrice from '../lib/calcTotalPrice';
import { useCart } from '../lib/cartState';
import RemoveFromCart from './RemoveFromCart';
import { Checkout } from './Checkout';

// export function CartItem({ cartItem }) {
//   if (!cartItem) return null;
//   return (
//     <li className='cartItems'>
//       <Image
//         width={100}
//         height={200}
//         src={cartItem.photo}
//         alt={cartItem.name}
//         style={{objectFit: 'cover'}}
//       />
//       <div>
//         <h3>{cartItem.name}</h3>
//         <p>
//           {formatMoney(cartItem.price * cartItem.quantity)}-
//           <em>
//             {cartItem.quantity} &times; {formatMoney(cartItem.price)} each
//           </em>
//         </p>
//       </div>
//       <RemoveFromCart id={cartItem.id} />
//     </li>
//   );
// }

// function Cart_prev({ cartItems, currentUser }) {
//   const { cartOpen, closeCart } = useCart();
  
//   if (!currentUser?.id) return null;
  
//   const totalPrice = calcTotalPrice(cartItems);
//   return (
//     <div className={clsx('cart', cartOpen && 'open')}>
//       <header>
//         <h3 className='supreme'>{currentUser.name}&apos;s Cart</h3>
//         <button className='closeButton' onClick={closeCart}>&times;</button>
//       </header>
//       <ul>
//         {cartItems.map((cartItem) => (
//           <CartItem key={cartItem.id} cartItem={cartItem} />
//         ))}
//       </ul>
//       <footer>
//         <p>{formatMoney(totalPrice)}</p>
//         <Checkout totalPrice={totalPrice} userId={currentUser.id} cartItems={cartItems} />
//       </footer>
//     </div>
//   );
// }

export default function Cart({ cartItems }) {
  const { cartOpen, closeCart } = useCart();
  const totalPrice = calcTotalPrice(cartItems);

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => closeCart()}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartItems?.map((item) => (
                              <li key={item.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.photo}
                                    alt={item.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        {item.name}
                                      </h3>
                                      <p className="ml-4">{formatMoney(item.price)}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {item.quantity}</p>

                                    <div className="flex">
                                      <RemoveFromCart id={item.id} />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{formatMoney(totalPrice)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="/checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => closeCart()}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}