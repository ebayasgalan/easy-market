'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'
// import './styles/navStyles.scss';
import { useCart } from '../lib/cartState';
import Signout from './Signout';
import CartCount from './CartCount';
import { useSession } from "next-auth/react";

import { Disclosure, } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Nav({ count }: any) {
  const { data: session, status } = useSession();
  const { openCart }: any = useCart();
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">            
            <div className="flex h-16 justify-between">
              <Link 
                href="/" 
                className='text-indigo-700 mt-2 no-underline'
              >
                Easy Market
              </Link>
              <div className="flex">
                <div className="hidden sm:ml-16 sm:flex sm:space-x-8">
                  {status !== 'unauthenticated' && (
                    <>
                      <Link 
                        href="/"
                        className={`${pathname === '/' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center border-b-2 px-1 pt-1 font-medium text-sm md:text-lg lg:text-2xl`}
                      >
                        Home
                      </Link>
                      <Link 
                        href="/sell"
                        className={`${pathname === '/sell' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center border-b-2 px-1 pt-1 font-medium text-sm md:text-lg lg:text-2xl`}
                      >
                        Sell
                      </Link>
                      <Link 
                        href="/orders"
                        className={`${pathname === '/orders' ? 'border-indigo-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center border-b-2 px-1 pt-1 font-medium text-sm md:text-lg lg:text-2xl`}
                      >
                        Orders
                      </Link>
                      <Signout />
                      <button 
                        type="button" 
                        onClick={openCart}
                        className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 text-sm md:text-lg lg:text-2xl"
                      >
                        My Cart
                      </button>
                    </>
                  )}
                  {status === 'unauthenticated' && (
                    <>
                      <Link 
                        href="/signin"
                        className='hover:border-gray-300 hover:text-gray-700'
                      >
                        Sign In
                      </Link>
                    </>
                  )}
                </div>
                <CartCount count={count} />
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="/"
                className={`${pathname === '/' ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block border-l-4 py-2 pl-3 pr-4 text-base font-medium`}
                >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/sell"
                className={`${pathname === '/sell' ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block border-l-4 py-2 pl-3 pr-4 text-base font-medium`}
                >
                Sell
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/orders"
                className={`${pathname === '/orders' ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block border-l-4 py-2 pl-3 pr-4 text-base font-medium`}
                >
                Orders
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/account"
                className={`${pathname === '/account' ? 'bg-indigo-50 border-indigo-500 text-indigo-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'} block border-l-4 py-2 pl-3 pr-4 text-base font-medium`}
                >
                Account
              </Disclosure.Button>
              <Disclosure.Button 
                as="a"
                onClick={openCart}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 hover:pointer"
              >
                My Cart
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}