import Image from 'next/image';
import Link from 'next/link';
import { WalletButton } from './WalletButton';

export const Header = () => {
  return (
    <div className="flex justify-between px-3">
      <div>
        <Image src="/image/logo.png" width="260" height="135" alt="logo" />
      </div>
      <div className="flex w-3/4 max-w-[800px] items-center">
        <div className="flex w-full items-center justify-between rounded-xl bg-[#F7BDCC] px-4 py-2">
          <div className="text-secondary text-sm">
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
          <WalletButton />
        </div>
      </div>
    </div>
  );
};
