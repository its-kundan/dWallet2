'use client';

import { useEffect, useState } from 'react';
import { formatUSD } from '@/utils/format';
import useSortableData from '@/hooks/useSortableData';

export default function TokenTable() {
  const [tokens, setTokens] = useState([]);
  const { sortedData, sortConfig, requestSort } = useSortableData(tokens);

  useEffect(() => {
    fetch('https://api.energiswap.exchange/v1/assets')
      .then((res) => res.json())
      .then((data) => setTokens(data || []))
      .catch(console.error);
  }, []);

  const getClassNamesFor = (name) => {
    if (!sortConfig) return;
    return sortConfig.key === name ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : '';
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-900 rounded-lg shadow-md text-left">
        <thead className="text-gray-300 uppercase text-sm border-b border-gray-700">
          <tr>
            <th className="px-6 py-3">Icon</th>
            <th className="px-6 py-3 cursor-pointer" onClick={() => requestSort('symbol')}>
              Symbol {getClassNamesFor('symbol')}
            </th>
            <th className="px-6 py-3 cursor-pointer" onClick={() => requestSort('name')}>
              Name {getClassNamesFor('name')}
            </th>
            <th className="px-6 py-3 cursor-pointer" onClick={() => requestSort('price_usd')}>
              Price {getClassNamesFor('price_usd')}
            </th>
          </tr>
        </thead>
        <tbody className="text-white">
          {sortedData?.map((token) => (
            <tr key={token.id} className="border-t border-gray-800 hover:bg-gray-800 transition">
              <td className="px-6 py-4">
                <img src={token.icon} alt={token.symbol} className="w-6 h-6" />
              </td>
              <td className="px-6 py-4">{token.symbol}</td>
              <td className="px-6 py-4">{token.name}</td>
              <td className="px-6 py-4">{formatUSD(token.price_usd)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
