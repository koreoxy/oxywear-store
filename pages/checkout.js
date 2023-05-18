import { set } from 'mongoose';
import { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { ProductsContext } from '../components/ProductsContext';
import Link from 'next/link';

export default function CheckoutPage() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  const [productsInfos, setProductsInfos] = useState([]);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)];
    fetch('/api/products?ids=' + uniqIds.join(','))
      .then((response) => response.json())
      .then((json) => setProductsInfos(json));
  }, [selectedProducts]);

  function moreOfThisProduct(id) {
    setSelectedProducts((prev) => [...prev, id]);
  }

  function lessOfThisProduct(id) {
    const pos = selectedProducts.indexOf(id);
    if (pos !== -1) {
      setSelectedProducts((prev) => {
        return prev.filter((value, index) => index !== pos);
      });
    }
  }

  const deliveryPrice = 5;
  let subtotal = 0;
  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price = productsInfos.find((p) => p._id === id)?.price || 0;
      subtotal += price;
    }
  }
  const total = subtotal + deliveryPrice;

  return (
    <Layout title="Checkout">
      <div className="sm:px-28">
        <h1 className="font-bold text-center text-[25px] p-5">CART</h1>
        {!productsInfos.length && (
          <div className="">no products in your shopping cart</div>
        )}
        <div className="md:bg-gray-200 md:rounded-xl md:p-5 md:flex flex-col md:px-20">
          {productsInfos.length &&
            productsInfos.map((productInfo) => {
              const amount = selectedProducts.filter(
                (id) => id === productInfo._id
              ).length;
              if (amount === 0) return;
              return (
                <div className="flex mb-5" key={productInfo}>
                  <div className="bg-gray-100 p-3 rounded-xl shrink-0">
                    <img className="w-24" src={productInfo.picture} alt="" />
                  </div>
                  <div className="pl-4">
                    <h3 className="font-bold text-lg">{productInfo.name}</h3>
                    <p className="text-sm leading-4 text-gray-500">
                      {productInfo.description}
                    </p>
                    <div className="flex-none max-sm:flex">
                      <div className="grow">${productInfo.price}</div>
                      <div className="pt-2">
                        <button
                          onClick={() => lessOfThisProduct(productInfo._id)}
                          className="border border-emerald-500 px-2 rounded-lg text-emerald-500"
                        >
                          -
                        </button>
                        <span className="px-2">
                          {
                            selectedProducts.filter(
                              (id) => id === productInfo._id
                            ).length
                          }
                        </span>
                        <button
                          onClick={() => moreOfThisProduct(productInfo._id)}
                          className="bg-emerald-500 px-2 rounded-lg text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <h1 className="underline underline-offset-8 pt-10 md:text-start text-center">
          Info Pengiriman
        </h1>
        <form action="/api/checkout" method="POST">
          <div className="mt-4">
            <input
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-100 w-full rounded-xl px-4 py-2 mb-2"
              type="text"
              placeholder="Alamat Rumah dan kode rumah"
            />
            <input
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-gray-100 w-full rounded-xl px-4 py-2 mb-2"
              type="text"
              placeholder="Nama Kota dan kode pos"
            />
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 w-full rounded-xl px-4 py-2 mb-2"
              type="text"
              placeholder="Nama Lengkap"
            />
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 w-full rounded-xl px-4 py-2 mb-2"
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div className="mt-4">
            <div className="flex my-3">
              <h3 className="grow font-bold text-gray-400">Subtotal:</h3>
              <h3 className="font-bold">${subtotal}</h3>
            </div>
            <div className="flex my-3">
              <h3 className="grow font-bold text-gray-400">Delivery:</h3>
              <h3 className="font-bold">${deliveryPrice}</h3>
            </div>
            <div className="flex my-3 border-t-2 pt-3 border-dashed border-emerald-500">
              <h3 className="grow font-bold text-gray-400">Total:</h3>
              <h3 className="font-bold">${total}</h3>
            </div>
          </div>

          <input
            type="hidden"
            name="products"
            value={selectedProducts.join(',')}
          />
          <div className="flex flex-col sm:flex-row ">
            <span className="w-full px-10">
              <Link href={'/'}>
                <button
                  type="back"
                  className="bg-gray-500 px-5 py-2 rounded-xl font-bold text-white w-full my-4 shadow-gray-300 shadow-lg"
                >
                  Continue Shopping
                </button>
              </Link>
            </span>

            <span className="w-full px-10">
              <button
                type="submit"
                className="bg-emerald-500 px-5 py-2 rounded-xl font-bold text-white w-full my-4 shadow-emerald-300 shadow-lg"
              >
                Bayar ${total}
              </button>
            </span>
          </div>
        </form>
      </div>
    </Layout>
  );
}
