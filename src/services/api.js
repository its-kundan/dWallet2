// src/lib/api.js
export const fetchTokens = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL 
      || 'https://api.energiswap.exchange';
    
    const res = await fetch(`${API_URL}/v1/assets`);
    return res.json();
  };