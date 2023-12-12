import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="flex justify-between px-3">
      <div>
        <Image src="/image/logo.png" width="260" height="135" alt="logo" />
      </div>
      <div className="flex w-3/4 max-w-[800px] items-center">
        <div className="flex w-full items-center justify-between rounded-xl bg-[#F7BDCC] px-4 py-2">
          <div className="text-sm text-secondary">
            <Link className="px-4" href="/">
              Products
            </Link>
            <Link className="px-4" href="/">
              Protocols
            </Link>
            <Link className="px-4" href="/">
              Tokens
            </Link>
            <Link className="px-4" href="/">
              Use Cases
            </Link>
          </div>
          <button className="btn-shadow rounded-full bg-white px-9 py-2 font-bold text-primary">
            Connect Wallet →
          </button>
        </div>
      </div>
    </div>
  );
};
