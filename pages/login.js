import Link from 'next/link';
import Layout from '../components/Layout';
import Input from '../components/Input/Input2';
import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Layout title="Login">
      <div className="flex flex-row">
        <div className="max-sm:hidden bg-green-700 w-[607px] h-[226px] rounded-lg outline outline-offset-0 outline-green-950 drop-shadow-[10px_17px_2px_rgba(0,0,0,0.25)] mt-28">
          <div className="flex flex-row">
            <div className="m-3 mr-1 h-5 w-5 rounded-full bg-white outline outline-green-950"></div>
            <div className="m-3 mr-1 h-5 w-5 rounded-full bg-white outline outline-green-950"></div>
            <div className="m-3 h-5 w-5 rounded-full bg-white outline outline-green-950"></div>
            <h1 className="text-white font-bold text-[30px] ">OxyWear Store</h1>
          </div>
          <hr class="w-auto h-1 mx-auto bg-green-950 border-0 rounded md:my-1"></hr>
          <p className="text-white font-semibold text-[25px] text-center py-4">
            Daftar atau login sekarang belanja sepuasnya dan dapatkan promo yang
            menarik di OxyWear Store. dan jangan lupa gunakan kupon gratis
            ongkir
          </p>
        </div>

        {/* FORM LOGIN */}
        <div className="max-sm:ml-0 ml-20 bg-[#F2F7F5] w-[428px] h-[607px] outline outline-offset-0 outline-green-950 rounded-md drop-shadow-[10px_17px_2px_rgba(0,0,0,0.25)]">
          <div className="px-14">
            <div className="pt-10">
              <h1 className="font-bold text-green-700 text-[30px]">Log in</h1>
              <p className="text-sm leading-4 text-gray-500">
                Buruan login dan belanja sepuasnya di OxyWear Store, Jika tidak
                memiliki akun,{' '}
                <Link href={'/daftar'} className="text-green-500 underline">
                  anda bisa klik disini untuk daftar.
                </Link>
              </p>
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
            <div className="pt-2 px-5">
              <Link href={''} className="text-green-500 underline">
                Lupa password ?
              </Link>
            </div>

            <div className="pt-5">
              <Link href={''}>
                <div class="flex flex-row bg-green-700 hover:bg-green-800 text-white rounded-full w-[139px]">
                  <div class="grow text-center pt-3">Login</div>
                  <div class=" bg-white rounded-full w-11 h-11 m-1">
                    <div className="p-3 pl-[14px] text-green-700">
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="pt-5">
              <div class="flex">
                <div class="grow h-14 pt-2 pr-1 max-sm:pt-3">
                  <hr class="w-auto h-1 mx-auto bg-green-950 border-0 rounded md:my-1"></hr>
                </div>
                <div class="grow-0 h-14 text-green-700 ">Or continue with</div>
                <div class="grow h-14 p-2 max-sm:pt-3">
                  <hr class="w-auto h-1 mx-auto bg-green-950 border-0 rounded md:my-1"></hr>
                </div>
              </div>

              <div className="pt-1">
                <Link href={''} className="flex justify-center">
                  <div className="bg-[#F2F7F5] w-[177px] h-[47px] outline outline-offset-0 outline-green-950 rounded-full hover:bg-[#D6D6D6]">
                    <div className="flex flex-row p-2 justify-center">
                      <img src="./../Image/iconfb.png" />
                      <div className="text-green-600 text-lg font-semibold pl-1">
                        Facebook
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="pt-4">
                <Link href={''} className="flex justify-center">
                  <div className="bg-[#F2F7F5] w-[177px] h-[47px] outline outline-offset-0 outline-green-950 rounded-full hover:bg-[#D6D6D6]">
                    <div className="flex flex-row p-2 justify-center">
                      <img src="./../Image/icontwitter.png" />
                      <div className="text-green-600 text-lg font-semibold pl-1">
                        Twitter
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
