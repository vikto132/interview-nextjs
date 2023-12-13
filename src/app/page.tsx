import { SignIn } from '@/components/SignIn';
import { SignUp } from '@/components/SignUp';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="mx-auto flex max-w-6xl justify-between">
        <div className="px-9">
          <p className="text-[4.3rem] text-white">Explore and Earn</p>
          <p className="mb-8 flex text-[4.3rem] text-white">
            <span>on </span>
            <Image src="/image/logo.png" width="200" height="83" alt="logo" />
          </p>
          <div className="max-w-[423px]">
            <div className="mb-5 flex justify-end rounded-3xl bg-white px-2 py-1">
              <SignUp />
            </div>
            <div className="flex justify-between">
              <SignIn />
              <Link href="/test2" className="btn-shadow text-primary rounded-3xl bg-white px-10 py-1 font-bold">
                Launch App
              </Link>
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
      <div className="mx-4 mt-20 flex max-w-6xl justify-between rounded-3xl border border-white bg-white/50 px-24 py-11 xl:mx-auto">
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
    </>
  );
}
