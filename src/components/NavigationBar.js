import Link from 'next/link'
import { ConnectWallet } from '@/components/ConnectWallet'
import { ThemeToggle } from '@/components/ThemeToggle'

export const NavigationBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-gray-900 dark:text-white">
          Energiswap
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6 text-lg font-medium text-gray-700 dark:text-gray-300">
            <Link href="/home" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
              Home
            </Link>
            <Link href="/wallet" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
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
