import Link from 'next/link'
import { ConnectWallet } from '@/components/ConnectWallet'
import { ThemeToggle } from '@/components/ThemeToggle'

export const NavigationBar = () => {
  return (
    <header className="py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Energiswap
        </Link>
        
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            <Link href="/home" className="hover:text-primary-light dark:hover:text-primary-dark">
              Home
            </Link>
            <Link href="/wallet" className="hover:text-primary-light dark:hover:text-primary-dark">
              Wallet
            </Link>
          </nav>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ConnectWallet />
          </div>
        </div>
      </div>
    </header>
  )
}