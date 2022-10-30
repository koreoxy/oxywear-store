import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Product from '../components/Product';
import { initMongoose } from '../lib/mongoose';
import { findAllProducts } from './api/products';

export default function Home({ products }) {
  const [phrase, setPhrase] = useState('');

  const categoriesNames = [...new Set(products.map((p) => p.category))];

  if (phrase) {
    products = products.filter((p) => p.name.toLowerCase().includes(phrase));
  }
  return (
    <Layout title="Home Page">
      <div className="flex pb-10">
        <div className="grow drop-shadow-md">
          <input
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            type="text"
            placeholder="Search for products..."
            className="bg-gray-100 w-full py-2 px-4 rounded-xl"
          />
        </div>
      </div>

      <div>
        {categoriesNames.map((categoryName) => (
          <div key={categoryName}>
            {products.find((p) => p.category === categoryName) && (
              <div className="pt-10">
                <h1 className="text-1xl py-1 font-bold capitalize text-center bg-gray-200 rounded-t-lg w-32 ring ring-emerald-500 ring-offset-4">
                  {categoryName}
                </h1>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide bg-gray-200 py-5 rounded-md drop-shadow-xl">
                  {products
                    .filter((p) => p.category === categoryName)
                    .map((productInfo) => (
                      <div key={productInfo._id} className="px-5 snap-start">
                        <Product {...productInfo} />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
