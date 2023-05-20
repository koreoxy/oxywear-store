import Layout from '../components/Layout';
import {
  BsStarFill,
  BsStarHalf,
  BsStar,
  BsFacebook,
  BsInstagram,
} from 'react-icons/bs';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineHeart, AiFillTwitterCircle } from 'react-icons/ai';
import { TbTriangleInvertedFilled } from 'react-icons/tb';

import Link from 'next/link';

export default function ProductDetail() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count == 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <Layout title="Product Detail">
      <div className="">
        <div className="flex flex-row max-sm:flex-col">
          {/* GAMBAR BAJU COLOR */}
          <div className="max-sm:hidden pt-[5px]">
            <div className="w-[97px] h-[124px] bg-gray-200 mt-4 rounded-md">
              <img className="pt-[15px]" src="./Image/bajupanjang.png" />
            </div>
            <div className="w-[97px] h-[124px] bg-gray-200 mt-4 rounded-md">
              <img className="pt-[15px]" src="./Image/bajupanjang.png" />
            </div>
          </div>

          {/* GAMBAR BAJU UTAMA */}
          <div className="m-5">
            <div className="">
              <img
                src="./Image/bajupanjang.png"
                className="w-full h-full bg-green-300 rounded-lg"
              />
            </div>

            {/* BUTTON SHARE */}
            <div className="pt-2 max-sm:hidden">
              <h1 className="font-bold">Share :</h1>
              <div className="flex flex-row">
                <button className="pr-2 ">
                  <BsFacebook className="w-9 h-9 hover:text-green-500" />
                </button>
                <button className="pr-2">
                  <BsInstagram className="w-9 h-9 hover:text-green-500" />
                </button>
                <button className="pr-2">
                  <AiFillTwitterCircle className="w-9 h-9 hover:text-green-500" />
                </button>
              </div>
            </div>
          </div>

          {/* DETAIL INFORMASI */}
          <div className="flex flex-col">
            {/* TITLE PRODUCT */}
            <div className="pt-2">
              <h1 className="font-bold text-[30px]">Baju Panjang SST</h1>
            </div>

            {/* REVIEW PRODUCT */}
            <div className="flex flex-row">
              <span className="text-yellow-400 pr-1">
                <BsStarFill />
              </span>
              <span className="text-yellow-400 pr-1">
                <BsStarFill />
              </span>
              <span className="text-yellow-400 pr-1">
                <BsStarFill />
              </span>
              <span className="text-yellow-400 pr-1">
                <BsStarHalf />
              </span>
              <span className="text-yellow-400 pr-1">
                <BsStar />
              </span>
              <h1 className="text-sm text-gray-500">(5 Reviews)</h1>
            </div>

            {/* HARGA PRODUCT */}
            <div className="pt-2">
              <div className="flex flex-row">
                <h1 className="font-bold text-[25px]">Rp250.000</h1>
                <h1 className="text-sm pl-1">
                  <del>Rp250.000</del>(-11%)
                </h1>
              </div>
            </div>

            <div className="text-green-600 text-sm">Free Shipping</div>

            {/* INFO STOCK */}
            <div className="pt-1">
              <h1 className="font-bold">Stock :</h1>
              <p>140 pieces available</p>
            </div>

            {/* SELECT SIZE DESKTOP */}
            <div className="pt-2 max-sm:hidden">
              <h1 className="font-bold">Select Size :</h1>
              <div className="flex flex-row">
                <div className="bg-white rounded-full w-8 h-8 text-center outline outline-1 hover:bg-green-500 mr-2">
                  <h1 className="text-black hover:text-white pt-1">S</h1>
                </div>
                <div className="bg-white rounded-full w-8 h-8 text-center outline outline-1 hover:bg-green-500 mr-2">
                  <h1 className="text-black hover:text-white pt-1">M</h1>
                </div>
                <div className="bg-white rounded-full w-8 h-8 text-center outline outline-1 hover:bg-green-500 mr-2">
                  <h1 className="text-black hover:text-white pt-1">L</h1>
                </div>
                <div className="bg-white rounded-full w-8 h-8 text-center outline outline-1 hover:bg-green-500 mr-2">
                  <h1 className="text-black hover:text-white pt-1">XL</h1>
                </div>
                <div className="bg-white rounded-full w-8 h-8 text-center outline outline-1 hover:bg-green-500 mr-2">
                  <h1 className="text-black hover:text-white pt-1">XXL</h1>
                </div>
              </div>
            </div>

            {/* SELECT SIZE MOBILE */}
            <div className="pt-2 md:hidden">
              <label
                for="size"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <h1 className="font-bold">Select Size :</h1>
              </label>
              <select
                id="size"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Pilih Ukuran</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

            {/* SELECT COLOR DEKSTOP */}
            <div className="pt-3 max-sm:hidden">
              <h1 className="font-bold">Select a color :</h1>
              <div className="flex flex-row pt-1">
                <div className="bg-black rounded-full w-8 h-8 outline outline-3 outline-offset-2 hover:outline-green-600 mr-5"></div>
                <div className="bg-red-600 rounded-full w-8 h-8 outline outline-3 outline-offset-2 hover:outline-green-600 mr-5"></div>
                <div className="bg-gray-600 rounded-full w-8 h-8 outline outline-3 outline-offset-2 hover:outline-green-600 mr-5"></div>
              </div>
            </div>

            {/* SELECT COLOR MOBILE */}
            <div className="pt-2 md:hidden">
              <label
                for="size"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <h1 className="font-bold">Select Color :</h1>
              </label>
              <select
                id="size"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Pilih Warna</option>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Gray">Gray</option>
              </select>
            </div>

            {/* KUANTITAS */}
            <div className="pt-5">
              <h1 className="font-bold">Kuantitas :</h1>
              <div className="flex flex-row">
                <div className="bg-gray-400 rounded-full w-7 h-7">
                  <button onClick={decreaseCount} className="pl-[5px] pt-[5px]">
                    <BiMinus />
                  </button>
                </div>
                <div className="pl-1 pr-1">{count}</div>
                <div className="bg-gray-400 rounded-full w-7 h-7">
                  <button
                    onClick={incrementCount}
                    className="pl-[5px] pt-[5px]"
                  >
                    <BiPlus />
                  </button>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className="pt-10">
              <div className="flex flex-row max-sm:flex-col">
                {/* BUTTON ADD TO CART */}
                <Link href={''} className="max-sm:mb-6">
                  <div className="bg-green-500 w-[200px] h-[52px] outline outline-1 drop-shadow-[-6px_10px_2px_rgba(0,0,0,100.0)] transform transition duration-500 hover:scale-110 hover:drop-shadow-none mr-7">
                    <div className="flex flex-row">
                      <div className="py-[16px] pl-4 pr-1 text-white">
                        <FiShoppingCart className="w-5 h-5" />
                      </div>
                      <h1 className="text-center py-3 text-white font-bold text-[20px]">
                        ADD TO CART
                      </h1>
                    </div>
                  </div>
                </Link>

                {/* BUTTON WISHLIST */}
                <Link href={''} className="max-sm:mb-2">
                  <div className="bg-gray-500 w-[200px] h-[52px] outline outline-1 drop-shadow-[-6px_10px_2px_rgba(0,0,0,100.0)] transform transition duration-500 hover:scale-110 hover:drop-shadow-none">
                    <div className="flex flex-row">
                      <div className="py-[16px] pl-9  text-white">
                        <AiOutlineHeart className="w-5 h-5" />
                      </div>
                      <h1 className="text-center py-3 px-1 text-white font-bold text-[20px]">
                        WISHLIST
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* DETAILS */}
            <div className="pt-10">
              <div className="flex justify-start">
                <span className="pt-1 pr-1">
                  <TbTriangleInvertedFilled />
                </span>

                <h1 className="font-bold">Details :</h1>
              </div>
              <div>
                <hr class="w-auto h-[2px] mx-auto bg-gray-400 border-0 rounded md:my-1"></hr>
                <h1 className="text-gray-600 pl-5">Baju Panjang SST</h1>
                <hr class="w-auto h-[2px] mx-auto bg-gray-400 border-0 rounded md:my-1"></hr>
              </div>
              <div className="flex flex-row pl-5">
                <div className="flex flex-col pr-16">
                  <ul className="text-sm">
                    <li>Color :</li>
                    <li>Style :</li>
                    <li>Pattern Type :</li>
                    <li>Type :</li>
                    <li>Closure Type :</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <ul className="text-sm">
                    <li>Black</li>
                    <li>Preppy</li>
                    <li>Plaid</li>
                    <li>Straight</li>
                    <li>Drwastring Waist</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* DESKRIPSI PRODUK */}
            <div className="pt-5">
              <div className="flex">
                <span className="pt-1 pr-1">
                  <TbTriangleInvertedFilled />
                </span>
                <h1 className="font-bold">Deskripsi Produk :</h1>
              </div>
              <hr class="w-auto h-[2px] mx-auto bg-gray-400 border-0 rounded md:my-1"></hr>
              <div class="flex">
                <div class="flex-none w-[450px] max-sm:w-[330px]">
                  <p>
                    Horem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent
                    perconubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condim entumlobortis. Ut commodo efficitur
                    neque. Ut diam quam, semper iaculis condimen tum ac,
                    vestibulum eu nisl.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
