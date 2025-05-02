import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-16 px-4">
      <div className="bg-purple-800 text-white px-4 py-1 rounded-full text-sm mb-4">
        New: Multi-chain swaps available
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-4">
        Transform Your Crypto Trading Experience
      </h1>
      <p className="text-lg text-muted mb-8 max-w-2xl">
        Lightning-fast cryptocurrency exchanges with institutional-grade security and best-in-class rates
      </p>
      <div className="flex gap-4">
        <Link href="/swap">
          <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
            Start Swapping Now →
          </button>
        </Link>
        <Link href="/home">
          <button className="px-6 py-2 bg-gray-800 text-white rounded border border-gray-600 hover:bg-gray-700 transition">
            Home
          </button>
        </Link>
        <Link href="/wallet">
          <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
            Wallet →
          </button>
        </Link>
      </div>
    </section>
  );
}
