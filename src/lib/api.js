export const fetchTokens = async () => {
    const res = await fetch('https://api.energiswap.exchange/v1/assets')
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json()
  }