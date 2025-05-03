"use client";
import { useState, useEffect } from 'react';
import { useSortableData } from '@/hooks/useSortableData';
import { formatUSD } from '@/utils/format';
import Image from 'next/image';

export const TokenTable = () => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const { sortedItems, requestSort, sortConfig } = useSortableData(tokens);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://api.energiswap.exchange/v1/assets');

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        const tokensArray = Object.keys(data).map(address => ({
          id: address,
          address: address,
          name: data[address].name,
          symbol: data[address].symbol,
          price: data[address].last_price,
          makerFee: data[address].maker_fee,
          takerFee: data[address].taker_fee
        }));

        if (tokensArray.length === 0) {
          throw new Error('No tokens found in response');
        }

        setTokens(tokensArray);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setTokens([{
          id: '0x78B050d981d7f6E019Bf6E361D0d1167de6B19dA',
          address: '0x78B050d981d7f6E019Bf6E361D0d1167de6B19dA',
          name: 'Ether',
          symbol: 'ETH',
          price: 1837.41,
          makerFee: 0,
          takerFee: 0.003
        }]);
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  // Filter and paginate
  const filteredItems = sortedItems.filter(token =>
    token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      <p>Loading tokens...</p>
    </div>
  );

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
  );

  return (
    <div className="overflow-x-auto">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name or symbol..."
          className="w-full sm:w-1/3 px-4 py-2 border dark:border-gray-700 rounded dark:bg-gray-800 dark:text-white"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {[
              { label: 'Symbol', key: 'symbol' },
              { label: 'Name', key: 'name' },
              { label: 'Price', key: 'price' },
              { label: 'Fees (Maker/Taker)', key: 'makerFee' }
            ].map(({ label, key }) => (
              <th
                key={key}
                onClick={() => requestSort(key)}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider cursor-pointer select-none"
              >
                {label}
                {sortConfig?.key === key && (
                  <span className="ml-1">
                    {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {paginatedItems.map((token) => (
            <tr key={token.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {token.symbol}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-300">
                {token.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-300">
                {formatUSD(token.price)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-300">
                {token.makerFee * 100}% / {token.takerFee * 100}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
