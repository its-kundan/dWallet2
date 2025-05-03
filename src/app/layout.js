import { ThemeProvider } from '@/context/ThemeContext'
import { WalletProvider } from '@/context/WalletContext'
import { NavigationBar } from '@/components/NavigationBar'
import './globals.css'

export const metadata = {
  title: 'Energiswap dApp',
  description: 'Decentralized exchange for Energi tokens',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors">
        <ThemeProvider>
          <WalletProvider>
            <div className="container mx-auto px-4">
              <NavigationBar />
              <main className="py-20 pt-20">{children}</main>
            </div>
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}