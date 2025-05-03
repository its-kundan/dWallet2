"use client"
import { useWallet } from '@/context/WalletContext'

export const ConnectWallet = () => {
  const { isConnected, account, connectWallet } = useWallet()

  return (
    <button
      onClick={connectWallet}
      className="px-4 py-2 bg-primary-light dark:bg-primary-dark text-white rounded-lg hover:bg-opacity-90 transition-all"
    >
      {isConnected ? (
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          {`${account.slice(0, 6)}...${account.slice(-4)}`}
        </span>
      ) : (
        'Connect Wallet'
      )}
    </button>
  )
}