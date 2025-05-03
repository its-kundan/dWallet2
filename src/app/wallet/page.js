"use client"
import Image from 'next/image'
import { useWallet } from '@/context/WalletContext'
import { formatUSD } from '@/utils/format'

export default function WalletPage() {
  const { account, balance, isConnected, connectWallet } = useWallet()

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Wallet</h1>
      
      {!isConnected ? (
        <div className="text-center py-12">
          {/* MetaMask Icon */}
          <div className="flex justify-center mb-6">
            <Image
              src="/metamask-icon.png"
              alt="MetaMask Icon"
              width={60}
              height={60}
            />
          </div>

          <p className="mb-6">Connect your wallet to view your balances</p>
          <button
            onClick={connectWallet}
            className="px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-all"
          >
            Connect MetaMask
          </button>
        </div>
      ) : (
        <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Account</h2>
            <p className="text-sm font-mono break-all">{account}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>ETH Balance:</span>
              <span className="font-medium">{balance} ETH</span>
            </div>
            <div className="flex justify-between items-center">
              <span>USD Value:</span>
              <span className="font-medium">{formatUSD(balance * 1800)}</span> {/* Assuming ETH price is $1800 */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
