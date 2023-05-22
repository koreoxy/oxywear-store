import React from 'react';
import Layout from '../../components/Layout';
import AccountMenu from '../../components/AccountMenu';
import Link from 'next/link';

function addresses() {
  return (
    <Layout title="Adresses">
      <AccountMenu
        title="Addresses"
        main={[
          <div className="w-[608px]" key="">
            <h1 className="text-sm">
              The following addresses will be used on the checkout page by
              default.
            </h1>

            {/* BOX ADDRESS ADD */}
            <div className="flex flex-row pt-3">
              <div className="bg-gray-200 px-5 flex flex-col w-[320px] h-[100px] mr-5 rounded-b-md border-t-2 border-black">
                <div className="flex flex-row pt-2">
                  <div className="grow font-bold">BILLING ADDRESS</div>
                  <Link href="" className="text-green-500">
                    Add
                  </Link>
                </div>
                <p className="text-sm">
                  You have not set up this type of address yet.
                </p>
              </div>

              <div className="bg-gray-200 px-5 flex flex-col w-[320px] h-[100px] mr-5 rounded-b-md border-t-2 border-black">
                <div className="flex flex-row pt-2">
                  <div className="grow font-bold">SHIPPING ADDRESS</div>
                  <Link href="" className="text-green-500">
                    Add
                  </Link>
                </div>
                <p className="text-sm">
                  You have not set up this type of address yet.
                </p>
              </div>
            </div>
          </div>,
        ]}
      />
    </Layout>
  );
}

export default addresses;
