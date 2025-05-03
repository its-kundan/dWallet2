import { useState } from 'react'

export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config)

  // Ensure items is always an array, default to empty array if falsy
  const safeItems = Array.isArray(items) ? items : []

  const sortedItems = [...safeItems].sort((a, b) => {
    if (!sortConfig) return 0

    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]

    if (aValue < bValue) {
      return sortConfig.direction === 'ascending' ? -1 : 1
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'ascending' ? 1 : -1
    }
    return 0
  })

  const requestSort = (key) => {
    let direction = 'ascending'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return { sortedItems, requestSort, sortConfig }
}