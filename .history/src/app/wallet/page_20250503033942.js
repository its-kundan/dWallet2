'use client';

import { useContext, useEffect, useState } from 'react';
import { WalletContext } from '@/context/WalletContext';
import ConnectWallet from '@/components/ConnectWallet';
import WalletInfo from '@/components/WalletInfo';

export default function WalletPage() {
  const { account } = useContext(WalletContext);

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Your Wallet</h1>
      {account ? <WalletInfo /> : <ConnectWallet />}
    </main>
  );
}
