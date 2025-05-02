'use client';

import { createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

export const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', ([newAccount]) => {
        setAccount(newAccount);
      });
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) return alert('MetaMask not found');
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    setAccount(accounts[0]);
  };

  return (
    <WalletContext.Provider value={{ account, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
}
