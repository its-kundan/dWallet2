import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { WalletProvider } from '@/context/WalletContext';
import ThemeToggle from '@/components/ThemeToggle';
import NavigationBar from '@/components/NavigationBar';

export const metadata = {
  title: 'Energiswap',
  description: 'Crypto trading dApp with real-time data and wallet support',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">
        <ThemeProvider>
          <WalletProvider>
            <NavigationBar />
            <ThemeToggle />
            {children}
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
