import React from 'react';
import Layout from '../../components/Layout';
import AccountMenu from '../../components/AccountMenu';
import Link from 'next/link';

function orders() {
  return (
    <Layout title="Orders">
      <AccountMenu
        title="Orders"
        main={[
          <div
            className="bg-gray-200 w-[608px] h-[74px] border-t-4 border-black rounded-b-md"
            key=""
          >
            <div className="flex flex-row pt-2 px-5">
              <div className="text-lg grow">No order has been made yet.</div>
              <Link
                href="/"
                className="bg-green-600 rounded-full p-3 text-white font-bold text-sm"
              >
                Browse Products
              </Link>
            </div>
          </div>,
        ]}
      />
    </Layout>
  );
}

export default orders;
