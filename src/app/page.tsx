import { Header } from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="bg-body h-[calc(100vh-135px)] pt-36">
        <div className="flex justify-between max-w-6xl mx-auto">
          <div className="px-9">
            <p className="text-[4.3rem] text-white">Explore and Earn</p>
            <p className="mb-8 flex text-[4.3rem] text-white">
              <span>on </span>
              <Image src="/image/logo.png" width="200" height="83" alt="logo" />
            </p>
            <div className="max-w-[423px]">
              <div className="mb-5 flex justify-end rounded-3xl bg-white px-2 py-1">
                <button className="btn-shadow rounded-3xl bg-[#F5B4BB] px-6 py-1">
                  Sign up
                </button>
              </div>
              <div className="flex justify-between">
                <button className="btn-shadow rounded-3xl bg-[#7BB8F1] px-10 py-1 text-lg font-bold text-white">
                  Log in
                </button>
                <button className="text-primary btn-shadow rounded-3xl bg-white px-10 py-1 font-bold">
                  Launch App
                </button>
              </div>
            </div>
          </div>
          <div className="card-shadow mr-20 h-fit rounded-3xl bg-white px-16 pb-6 pt-9">
            <Image
              src="/image/logo.png"
              width="104"
              height="54"
              alt="logo"
              className="mx-auto"
            />
            <span className="text-sm text-[#8795AF]">
              test Front end interview 1
            </span>
          </div>
        </div>
        <div className="rounded-3xl border border-white bg-white/50 flex justify-between mx-4 xl:mx-auto py-11 px-24 mt-20 max-w-6xl">
          <div className="text-center">
            <p className="text-primary mb-3 text-5xl">$1.80B</p>
            <p className="text-secondary text-center">30 Day Volume</p>
          </div>
          <div className="text-center">
            <p className="text-primary mb-3 text-5xl">$1.80B</p>
            <p className="text-secondary text-center">30 Day Volume</p>
          </div>
          <div className="text-center">
            <p className="text-primary mb-3 text-5xl">$1.80B</p>
            <p className="text-secondary text-center">30 Day Volume</p>
          </div>
        </div>
      </div>
    </main>
  );
}
