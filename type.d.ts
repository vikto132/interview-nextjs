declare global {
  interface Window {
    aptos: {
      connect: () => Promise<any>;
      account: () => Promise<any>;
    };
  }
}

export {};