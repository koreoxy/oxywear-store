import Link from 'next/link';
import Layout from '../components/Layout';

export default function created() {
  return (
    <Layout title="Created By">
      <div className="border border-emerald-300 shadow rounded-md p-4 max-w-sm w-full mx-auto ">
        Author - Developer
        <div className="h-1 bg-emerald-700 rounded"></div>
        <div className="flex space-x-4 pt-1">
          <div className="h-10 w-10">
            <img
              className="rounded-full"
              src="https://res.cloudinary.com/drcgvx1db/image/upload/v1669735570/image/avatar_rruinh.jpg"
              alt=""
            />
          </div>
          <div className="flex-1">
            <div className="text-sm">Name : Saifullah</div>
            <div className="text-sm">Nim : 2005903040062</div>
            <Link
              href="https://github.com/koreoxy/oxywear-store"
              className="text-sm"
            >
              Repository Github
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center font-bold uppercase pt-10">
        My other Project
      </div>

      <div class="max-w-lg mx-auto sm:columns-1 md:columns-2">
        <Link
          href="https://github.com/koreoxy/aplikasi-sistem-pakar"
          className=""
        >
          <div className="p-4">
            <div className="border border-emerald-300 shadow rounded-md p-4">
              <img
                className="transform transition duration-500 hover:scale-110"
                src="https://res.cloudinary.com/drcgvx1db/image/upload/v1669806348/image/sistempakar_xu4csg.png"
                alt=""
              />
            </div>
            <p className="text-center font-bold uppercase">
              Project Aplikasi Sistem Pakar
            </p>
          </div>
        </Link>

        <Link href="https://github.com/koreoxy/BukList" className="">
          <div className="p-4">
            <div className="border border-emerald-300 shadow rounded-md p-4">
              <img
                className="transform transition duration-500 hover:scale-110"
                src="https://res.cloudinary.com/drcgvx1db/image/upload/v1669806355/image/bukulist_vraeo8.png"
                alt=""
              />
            </div>
            <p className="text-center font-bold uppercase">Project Bukulist</p>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
