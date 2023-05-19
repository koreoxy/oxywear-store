import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Product from '../components/Product';
import { initMongoose } from '../lib/mongoose';
import { findAllProducts } from './api/products';
import HeaderSwiper from '../components/HeaderSwiper/Swiper';
import CardCategory from '../components/CardCategory';
import Link from 'next/link';

export default function Home({ products }) {
  const [phrase, setPhrase] = useState('');

  const categoriesNames = [...new Set(products.map((p) => p.category))];

  if (phrase) {
    products = products.filter((p) => p.name.toLowerCase().includes(phrase));
  }
  return (
    <Layout title="Home Page">
      <div>
        <ul class="text-center list-none">
          <li className="text-3xl font-bold">
            <a className="text-emerald-600">Oxywear</a> Store
          </li>
          <li className="text-xl font-bold">StreetWear Clothes Collection</li>
          <li className="text-md pt-5 font-semibold">
            High Quality Clothes for you Go to{' '}
            <Link
              className="bg-green-600 text-white font-bold text-[15px] rounded-md px-2 py-1 shadow-md hover:bg-green-800"
              href={'/login'}
            >
              Login
            </Link>{' '}
            or{' '}
            <Link
              className="bg-red-600 text-white font-bold text-[15px] rounded-md px-2 py-1 shadow-md hover:bg-red-800"
              href={'/daftar'}
            >
              Daftar
            </Link>{' '}
            and buy it
          </li>
        </ul>
      </div>

      <div id="swiper-header" className="m-5">
        <HeaderSwiper />
      </div>

      <CardCategory />

      <div id="search-bar" className="flex pb-10">
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

      <div id="text-trending-products" className="text-center">
        <h1 className="font-bold text-[20px]">Trending Products</h1>
        <h2 className="text-gray-500">
          Check trending product yang ada di OxyWear Store
        </h2>
      </div>

      <div>
        {categoriesNames.map((categoryName) => (
          <div key={categoryName}>
            {products.find((p) => p.category === categoryName) && (
              <div className="pt-10">
                <h1 className="text-1xl py-1 font-bold capitalize text-center bg-gray-200 rounded-t-lg w-32 ring ring-emerald-500 ring-offset-4">
                  {categoryName}
                </h1>
                <div className="flex -mx-5 overflow-x-scroll snap-x bg-gray-200 py-5 rounded-md drop-shadow-xl">
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
