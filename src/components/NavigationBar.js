'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ConnectWallet } from '@/components/ConnectWallet'
import { ThemeToggle } from '@/components/ThemeToggle'

export const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Auto-close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-gray-900 dark:text-white">
          Energiswap
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-lg font-medium text-gray-700 dark:text-gray-300">
          <Link href="/home" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            Home
          </Link>
          <Link href="/wallet" className="hover:text-primary-light dark:hover:text-primary-dark transition-colors">
            Wallet
          </Link>
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <ConnectWallet />

          {/* Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-4 top-[72px] bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg shadow-md rounded-xl p-4 space-y-2 md:hidden text-base text-gray-800 dark:text-gray-200"
        >
          <Link href="/home" onClick={() => setIsOpen(false)} className="block hover:text-primary">
            Home
          </Link>
          <Link href="/wallet" onClick={() => setIsOpen(false)} className="block hover:text-primary">
            Wallet
          </Link>
        </div>
      )}
    </header>
  )
}
