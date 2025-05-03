import Image from 'next/image'
import { TokenTable } from '@/components/TokenTable'
import { Hero } from '@/components/Hero'

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-6">Transform Your Crypto Trading Experience</h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Lightning-fast cryptocurrency exchanges with institutional-grade security and best-in-class rates
        </p>
        <div className="flex gap-4 justify-center">
          <button className="btn-primary">Start Swapping Now →</button>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">How to Use</h2>
        <p className="text-center mb-12 text-gray-600 dark:text-gray-300">
          Complete your swap in just a few simple steps
        </p>
        
        <div className="grid md:grid-cols-4 gap-8">
          <div className="card text-center">
            <div className="text-4xl font-bold mb-4 text-primary-light dark:text-primary-dark">1</div>
            <h3 className="text-xl font-semibold mb-2">Select Currencies</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Choose the currencies you want to swap from and to
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl font-bold mb-4 text-primary-light dark:text-primary-dark">2</div>
            <h3 className="text-xl font-semibold mb-2">Enter Amount</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Specify how much you want to exchange
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl font-bold mb-4 text-primary-light dark:text-primary-dark">3</div>
            <h3 className="text-xl font-semibold mb-2">Review & Confirm</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Check the exchange rate and confirm your swap
            </p>
          </div>
          
          <div className="card text-center">
            <div className="text-4xl font-bold mb-4 text-primary-light dark:text-primary-dark">4</div>
            <h3 className="text-xl font-semibold mb-2">Complete Swap</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Receive your exchanged currencies instantly
            </p>
          </div>
        </div>
      </section>

      {/* Supported Currencies Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-4 text-center">Supported Currencies</h2>
        <p className="text-center mb-12 text-gray-600 dark:text-gray-300">
          140+ currencies supported
        </p>
        <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
          Trade seamlessly between these popular cryptocurrencies
        </p>
        
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <span>Bitcoin (BTC)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <span>Ethereum (ETH)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <span>Solana (SOL)</span>
          </div>
        </div>
      </section>

      {/* Token Table Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8">Available Tokens</h2>
        <TokenTable />
      </section>
    </div>
  )
}