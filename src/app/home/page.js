'use client';

import Hero from '@/components/Hero';
import TokenTable from '@/components/TokenTable';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <section className="px-4 sm:px-8 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Supported Currencies</h2>
        <TokenTable />
      </section>
    </main>
  );
}
