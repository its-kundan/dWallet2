import { useState, useMemo } from 'react';

export default function useSortableData(items, config = null) {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedData = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (typeof aValue === 'string') {
          return aValue.localeCompare(bValue) * (sortConfig.direction === 'ascending' ? 1 : -1);
        } else {
          return (aValue - bValue) * (sortConfig.direction === 'ascending' ? 1 : -1);
        }
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig?.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { sortedData, requestSort, sortConfig };
}
