import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

export default function AccountMenu({ title, main }) {
  const router = useRouter();
  return (
    <>
      <div>
        <h1 className="font-bold text-center text-[21px] p-6">{title}</h1>
      </div>
      <div className="flex fle-row px-28 mb-40 ml-28">
        <div className="flex flex-col mr-20 w-[250px]">
          {/* DASHBOARD */}
          <div className="border-b-2 border-gray-300 font-bold text-lg mb-3 hover:text-green-500">
            <Link
              href={'/account/'}
              className={
                router.pathname == '/account' ? 'text-green-500 mb-2' : ''
              }
            >
              Dashboard
            </Link>
          </div>

          {/* ORDERS */}
          <div className="border-b-2 border-gray-300 font-bold text-lg mb-3 hover:text-green-500">
            <Link
              href={'/account/orders'}
              className={
                router.pathname == '/account/orders' ? 'text-green-500' : ''
              }
            >
              Orders
            </Link>
          </div>

          {/* ADDRESSES */}
          <div className="border-b-2 border-gray-300 font-bold text-lg mb-3 hover:text-green-500">
            <Link
              href={'/account/addresses'}
              className={
                router.pathname == '/account/addresses' ? 'text-green-500' : ''
              }
            >
              Addresses
            </Link>
          </div>

          {/* PAYMENT METHOD */}
          <div className="border-b-2 border-gray-300 font-bold text-lg mb-3 hover:text-green-500">
            <Link
              href={'/account/payment-method'}
              className={
                router.pathname == '/account/payment-method'
                  ? 'text-green-500'
                  : ''
              }
            >
              Payment Method
            </Link>
          </div>

          {/* ACCOUNT DETAILS */}
          <div className="border-b-2 border-gray-300 font-bold text-lg mb-3 hover:text-green-500">
            <Link
              href={'/account/account-details'}
              className={
                router.pathname == '/account/account-details'
                  ? 'text-green-500'
                  : ''
              }
            >
              Account Details
            </Link>
          </div>
        </div>
        <div className="">{main}</div>
      </div>
    </>
  );
}
