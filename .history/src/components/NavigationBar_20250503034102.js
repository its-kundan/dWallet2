import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav className="flex justify-center gap-4 py-4 bg-gray-900 text-white shadow">
      <Link href="/home" className="hover:underline">Home</Link>
      <Link href="/wallet" className="hover:underline">Wallet</Link>
    </nav>
  );
}
