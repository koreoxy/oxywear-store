import React from 'react';
import Layout from '../../components/Layout';
import AccountMenu from '../../components/AccountMenu';

function PaymentMethod() {
  return (
    <Layout title="Payment Method">
      <AccountMenu
        title="Payment Method"
        main={[
          <div className="bg-gray-300 w-[608px]">
            <div className="flex flex-col pl-3 pt-2">
              <h1 className="text-md font-bold">Add Payment Method</h1>
              <div className="flex flex-row mx-4">
                <h1 className="grow">Credit Card Worldwide</h1>
                <img src="../Image/visaicon.png" className="" />
              </div>
              <div>1</div>
              <div>1</div>
            </div>
          </div>,
        ]}
      />
    </Layout>
  );
}

export default PaymentMethod;
