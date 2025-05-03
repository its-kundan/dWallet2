'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { TokenTable } from '@/components/TokenTable';
import { SiBitcoin, SiEthereum, SiSolana, SiBinance, SiPolygon, SiDogecoin, SiLitecoin, SiTether, SiCardano, SiXrp, SiChainlink } from 'react-icons/si';


const tokens = [
  { name: 'Bitcoin', symbol: 'BTC', icon: SiBitcoin },
  { name: 'Ethereum', symbol: 'ETH', icon: SiEthereum },
  { name: 'Solana', symbol: 'SOL', icon: SiSolana },
  { name: 'Binance Coin', symbol: 'BNB', icon: SiBinance },
  { name: 'Polygon', symbol: 'MATIC', icon: SiPolygon },
  { name: 'Dogecoin', symbol: 'DOGE', icon: SiDogecoin },
  { name: 'Litecoin', symbol: 'LTC', icon: SiLitecoin },
  { name: 'Tether', symbol: 'USDT', icon: SiTether },
  { name: 'Cardano', symbol: 'ADA', icon: SiCardano },
  { name: 'XRP', symbol: 'XRP', icon: SiXrp },
  { name: 'Chainlink', symbol: 'LINK', icon: SiChainlink },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center py-20"
      >
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          Trade Smarter with Energiswap
        </h1>
        <p className="text-lg md:text-xl mb-10 text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
          Unlock blazing-fast swaps, ultra-low fees, and enterprise-grade security – all in one dApp.
        </p>
        <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => router.push('/wallet')}
      className="px-6 py-3 text-lg font-medium rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      Launch Exchange →
    </motion.button>
      </motion.section>

      {/* How to Use Section */}
      <section className="py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold mb-6 text-center"
        >
          Get Started in 4 Steps
        </motion.h2>
        <p className="text-center mb-16 text-gray-500 dark:text-gray-300">
          Make your first swap in minutes — no technical knowledge required.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            ['1', 'Connect Wallet', 'Securely link your MetaMask wallet to get started.'],
            ['2', 'Choose Tokens', 'Select the crypto pair you want to swap.'],
            ['3', 'Set Amount', 'Enter how much you want to exchange.'],
            ['4', 'Swap & Confirm', 'Review details and complete your trade instantly.'],
          ].map(([step, title, desc], i) => (
            <motion.div
              key={step}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-xl p-6 shadow-md bg-white dark:bg-gray-900 text-center hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              <div className="text-4xl font-bold mb-4 text-blue-500">{step}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Supported Currencies Section */}
      <section className="py-20">
  <motion.h2
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className="text-4xl font-bold text-center mb-6"
  >
    Explore Our Currency Network
  </motion.h2>
  <p className="text-center mb-4 text-gray-500 dark:text-gray-300">
    Swap between 140+ digital assets anytime, anywhere.
  </p>

  <div className="overflow-hidden mt-12">
    <div
      className="flex gap-10 animate-marquee whitespace-nowrap"
      style={{ animationDuration: '40s' }}
    >
      {tokens.concat(tokens).map((token, idx) => {
        const Icon = token.icon;
        return (
          <div
            key={idx}
            className="flex flex-col items-center justify-center min-w-[120px] mx-4 hover:scale-105 transition-transform"
          >
            <Icon className="text-4xl text-blue-500 dark:text-blue-400 mb-2" />
            <span className="text-sm font-medium">{token.name}</span>
            <span className="text-xs text-gray-500">{token.symbol}</span>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* Token Table Section */}
      <section className="py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl font-bold mb-10"
        >
          Live Market Overview
        </motion.h2>
        <TokenTable />
      </section>
    </div>
  );
}
