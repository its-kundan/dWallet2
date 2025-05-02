import { useContext } from 'react';
import { WalletContext } from '@/context/WalletContext';

export default function ConnectWallet() {
  const { connectWallet } = useContext(WalletContext);

  return (
    <div className="flex justify-center">
      <button
        onClick={connectWallet}
        className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
      >
        Connect Wallet
      </button>
    </div>
  );
}
