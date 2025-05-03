import { TokenTable } from '@/components/TokenTable'
import { Hero } from '@/components/Hero'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Available Tokens</h2>
        <TokenTable />
      </div>
    </div>
  )
}