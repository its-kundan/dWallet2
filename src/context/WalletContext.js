const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert('MetaMask not found');
        return;
      }
  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
    } catch (err) {
      console.error('Wallet connection error:', err);
      alert('Failed to connect wallet');
    }
  };
  