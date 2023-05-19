import Link from 'next/link';
import Layout from '../components/Layout';
import Input from '../components/Input/Input2';
import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Login() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Layout title="Login">
      <div className="flex flex-row">
        <div className="max-sm:hidden bg-red-600 w-[607px] h-[226px] rounded-lg outline outline-offset-0 outline-red-950 drop-shadow-[10px_17px_2px_rgba(0,0,0,0.25)] mt-28">
          <div className="flex flex-row">
            <div className="m-3 mr-1 h-5 w-5 rounded-full bg-white outline outline-red-950"></div>
            <div className="m-3 mr-1 h-5 w-5 rounded-full bg-white outline outline-red-950"></div>
            <div className="m-3 h-5 w-5 rounded-full bg-white outline outline-red-950"></div>
            <h1 className="text-white font-bold text-[30px] ">OxyWear Store</h1>
          </div>
          <hr class="w-auto h-1 mx-auto bg-red-950 border-0 rounded md:my-1"></hr>
          <p className="text-white font-semibold text-[25px] text-center py-4">
            Daftar atau login sekarang belanja sepuasnya dan dapatkan promo yang
            menarik di OxyWear Store. dan jangan lupa gunakan kupon gratis
            ongkir
          </p>
        </div>

        {/* FORM DAFTAR */}
        <div className="max-sm:ml-0 ml-20 bg-[#F2F7F5] w-[428px] h-[607px] outline outline-offset-0 outline-red-950 rounded-md drop-shadow-[10px_17px_2px_rgba(0,0,0,0.25)]">
          <div className="px-14">
            <div className="pt-10">
              <h1 className="font-bold text-red-600 text-[30px]">Daftar</h1>
              <p className="text-sm leading-4 text-gray-500">
                Buruan login dan belanja sepuasnya di OxyWear Store, Jika tidak
                memiliki akun,{' '}
                <Link href={'/login'} className="text-red-500 underline">
                  anda bisa klik disini untuk login.
                </Link>
              </p>
            </div>

            <div className="pt-5">
              <Input
                label="Full Name"
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                type="text"
                value={email}
              />
            </div>

            <div className="pt-5">
              <Input
                label="Email Address"
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                type="text"
                value={email}
              />
            </div>

            <div className="pt-5">
              <Input
                label="Password"
                onChange={(event) => setPassword(event.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>

            <div className="pt-5">
              <Input
                label="Password"
                onChange={(event) => setPassword(event.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>

            <div className="pt-5">
              <Link href={''}>
                <div class="flex flex-row bg-red-600 hover:bg-red-800 text-white rounded-full w-[139px]">
                  <div class="grow text-center pt-3">Daftar</div>
                  <div class=" bg-white rounded-full w-11 h-11 m-1">
                    <div className="p-3 pl-[14px] text-red-600">
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
