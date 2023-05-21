import { useContext } from 'react';
import { ProductsContext } from './ProductsContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as gtag from '../lib/gtag';
import Link from 'next/link';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

export default function Product({ _id, name, price, description, picture }) {
  const { setSelectedProducts } = useContext(ProductsContext);
  function addProduct() {
    setSelectedProducts((prev) => [...prev, _id]);
    toast('Produk telah ditambahkan di cart');
    gtag.event({
      action: 'tambahkan_ke_keranjang',
      category: 'ecommerce',
      label: 'item added',
      value: 'add to cart',
    });
  }

  return (
    <>
      <Link href={'/product-detail'}>
        <div className="w-64 bg-gray-100 px-3 py-3 h-full rounded-lg drop-shadow-md">
          <div className="bg-emerald-100 shadow-lg shadow-emerald-200/50 p-5 rounded-xl transform transition duration-500 hover:scale-110 max-sm:transform-none max-sm:transition-none max-sm:duration-0">
            <img src={picture} alt="" />
          </div>

          <div className="mt-2">
            <h3 className="font-bold text-lg">{name}</h3>
          </div>
          <p className="text-sm text-gray-500">By OxyWear</p>
          {/* <p className="text-sm mt-1 leading-4 text-gray-500">{description}</p> */}
          <div className="relative">
            <div className="">
              <div className="text-2xl font-bold flex-initial w-48">
                ${price}
              </div>
            </div>
            {/* STAR TERJUAL */}
            <div className="flex flex-row fixed bottom-10">
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
              <h1 className="text-sm text-gray-500">(100 Terjual)</h1>
            </div>

            <div className=" fixed bottom-5">
              <p className="text-sm text-gray-500">KOTA MEULABOH</p>
            </div>
          </div>
        </div>
      </Link>
      <div>
        <button
          onClick={addProduct}
          className="bg-emerald-400 text-white py-1 rounded-xl w-full font-bold text-lg mt-3"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
