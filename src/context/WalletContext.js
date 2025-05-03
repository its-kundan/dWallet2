"use client"
import { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers'

const WalletContext = createContext()

export const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState(null)
  const [balance, setBalance] = useState(null)
  const [chainId, setChainId] = useState(null)
  const [isConnected, setIsConnected] = useState(false)

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send('eth_requestAccounts', [])
        const balance = await provider.getBalance(accounts[0])
        const network = await provider.getNetwork()

        setAccount(accounts[0])
        setBalance(ethers.utils.formatEther(balance))
        setChainId(network.chainId)
        setIsConnected(true)
      } catch (error) {
        console.error('Error connecting wallet:', error)
      }
    } else {
      alert('Please install MetaMask!')
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0])
        } else {
          resetWallet()
        }
      })

      window.ethereum.on('chainChanged', () => {
        window.location.reload()
      })
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', () => {})
        window.ethereum.removeListener('chainChanged', () => {})
      }
    }
  }, [])

  const resetWallet = () => {
    setAccount(null)
    setBalance(null)
    setChainId(null)
    setIsConnected(false)
  }

  return (
    <WalletContext.Provider value={{ account, balance, chainId, isConnected, connectWallet, resetWallet }}>
      {children}
    </WalletContext.Provider>
  )
}

export const useWallet = () => useContext(WalletContext)