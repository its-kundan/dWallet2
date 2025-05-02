import { useContext, useEffect, useState } from 'react';
import { WalletContext } from '@/context/WalletContext';
import { formatUSD } from '@/utils/format';
import { ethers } from 'ethers';

export default function WalletInfo() {
  const { account } = useContext(WalletContext);
  const [ethBalance, setEthBalance] = useState(0);
  const [usdValue, setUsdValue] = useState(0);

  useEffect(() => {
    async function fetchBalance() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(account);
      const eth = parseFloat(ethers.utils.formatEther(balance));
      setEthBalance(eth);

      // Fake conversion (replace with API if needed)
      const usdRate = 3000; // example: 1 ETH = $3000
      setUsdValue(eth * usdRate);
    }

    if (account) fetchBalance();
  }, [account]);

  return (
    <div className="text-center space-y-4">
      <p className="text-lg">Connected Account:</p>
      <p className="font-mono text-purple-400">{account}</p>
      <p>ETH Balance: <span className="font-semibold">{ethBalance.toFixed(4)} ETH</span></p>
      <p>USD Equivalent: <span className="text-green-400">{formatUSD(usdValue)}</span></p>
    </div>
  );
}
