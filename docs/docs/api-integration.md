---
title: API Integration
---

# API Integration

The Crypto Price Tracker fetches real-time cryptocurrency prices using the **CoinGecko API**.

## API Endpoint Used
```http
GET https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5
```

## Fetching Data
We use the fetch API to retrieve data:

```bash
const fetchCryptoData = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5"
  )
  return response.json();
}
```

## Handling Errors
```bash
try {
  const data = await fetchCryptoData();
} catch (error) {
  console.error("Error fetching data:", error);
}
````