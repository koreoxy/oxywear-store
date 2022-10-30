import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className=" px-2 sm:px-4 py-2.5 bg-white shadow-md">
      <Link
        href={'/'}
        className="flex justify-center items-center flex-col transform transition duration-500 hover:scale-110"
      >
        <img
          src="https://res.cloudinary.com/drcgvx1db/image/upload/v1667119504/image/logo_rxcaz2.png"
          className="mr-3 h-12 items-center"
        />
      </Link>
    </nav>
  );
}
