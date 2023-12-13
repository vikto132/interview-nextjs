'use client';

export const WalletButton = () => {
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
    <button
      className="btn-shadow text-primary rounded-full bg-white px-9 py-2 font-bold"
      onClick={() => connectWallet()}>
      Connect Wallet →
    </button>
  );
};
