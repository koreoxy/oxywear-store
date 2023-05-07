import { useContext } from 'react';
import { ProductsContext } from './ProductsContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as gtag from '../lib/gtag';

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
    <div className="w-64 bg-gray-100 px-3 py-3 h-full rounded-lg drop-shadow-md">
      <button onClick={addProduct}>
        <div className="bg-emerald-100 shadow-lg shadow-emerald-200/50 p-5 rounded-xl transform transition duration-500 hover:scale-110">
          <img src={picture} alt="" />
        </div>
      </button>

      <div className="mt-2">
        <h3 className="font-bold text-lg">{name}</h3>
      </div>
      <p className="text-sm mt-1 leading-4 text-gray-500">{description}</p>
      <div className="relative py-5">
        <div className="fixed bottom-0 flex pb-2">
          <div className="text-2xl font-bold flex-initial w-48">${price}</div>
          <button
            onClick={addProduct}
            className="bg-emerald-400 text-white py-1 px-3 rounded-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
