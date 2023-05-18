import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import Footer from './Footer';
import FooterDesktop from '../components/FooterDesktop/index';
import Navbar from './Navbar';
import { ProductsContext } from './ProductsContext';
import { ToastContainer } from 'react-toastify';
import { useMediaQuery } from 'react-responsive';

export default function Layout({ title, children }) {
  const { setSelectedProducts } = useContext(ProductsContext);
  const [success, setSuccess] = useState(false);
  const isMedium = useMediaQuery({ query: '(max-width:850px)' });
  const isMobile = useMediaQuery({ query: '(max-width:550px)' });
  useEffect(() => {
    if (window.location.href.includes('success')) {
      setSelectedProducts([]);
      setSuccess(true);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>{title ? title + ' - OxyWear' : 'OxyWear/Store'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Navbar />
      <div className="p-5">
        {success && (
          <div className="mb-5 bg-green-400 text-white text-lg font-bold p-5 rounded-xl">
            Terima Kasih telah berbelanja di OxyWear Store, pesanan kamu akan
            segara diproses oleh Admin
          </div>
        )}
        {children}
      </div>
      ;
      <ToastContainer />
      {!isMedium && <FooterDesktop />} {isMobile && <Footer />}
    </div>
  );
}
