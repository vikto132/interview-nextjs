import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  const getAptosWallet = () => {
    if (window.aptos) {
      return window.aptos;
    } else {
      window.open('https://petra.app/', `_blank`);
    }
    return null;
  };

  const connectWallet = async () => {
    const wallet = getAptosWallet();
    if (!wallet) return;
    try {
      const response = await wallet.connect();
      console.log(response); // { address: string, address: string }

      const account = await wallet.account();
      console.log(account); // { address: string, address: string }
    } catch (error) {
      // { code: 4001, message: "User rejected the request."}
    }
  };

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
          <button className="btn-shadow text-primary rounded-full bg-white px-9 py-2 font-bold" onClick={connectWallet}>
            Connect Wallet →
          </button>
        </div>
      </div>
    </div>
  );
};
