"use client"
import { useState, useEffect } from 'react'
import { useSortableData } from '@/hooks/useSortableData'
import { formatUSD } from '@/utils/format'
import Image from 'next/image'

export const TokenTable = () => {
  const [tokens, setTokens] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { sortedItems, requestSort, sortConfig } = useSortableData(tokens)

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.energiswap.exchange/v1/assets', {
          headers: {
            'Accept': 'application/json',
            'Cache-Control': 'no-cache'
          }
        })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        
        if (!Array.isArray(data)) {
          throw new Error('API did not return an array')
        }

        setTokens(data)
        setError(null)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err.message)
        setTokens([]) // Ensure we always have an array
      } finally {
        setLoading(false)
      }
    }

    fetchTokens()

    // Optional: Add cleanup function if needed
    return () => {
      // Cancel any ongoing requests if component unmounts
    }
  }, [])

  if (loading) return (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      <p>Loading tokens...</p>
    </div>
  )

  if (error) return (
    <div className="text-center py-8 text-red-500">
      <p>Error loading data: {error}</p>
      <button 
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Retry
      </button>
    </div>
  )

  if (sortedItems.length === 0) return (
    <div className="text-center py-8">
      <p>No tokens available</p>
    </div>
  )

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        {/* ... (keep your existing table structure) ... */}
      </table>
    </div>
  )
}