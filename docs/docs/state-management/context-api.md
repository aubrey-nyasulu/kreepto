---
title: State Management
---

# State Management

The app uses the Context API to manage and fetch cryptocurrency data. The context is defined in CoinContext.tsx.

```tsx
"use client"

import { CoinData } from "@/types"
import { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useState } from "react"

type FecthCoinDataPropTypes = {
    currency: string,
    page: string
    query?: string
}

type CoinContextTypes = {
    coinData: CoinData[],
    fecthCoinData: ({ currency, query }: FecthCoinDataPropTypes) => void
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>
    totalPages: number,
    analyticsCardsData: any,
    setAnalyticsCardsData: Dispatch<SetStateAction<any>>
}

const initialState: CoinContextTypes = {
    coinData: [],
    fecthCoinData: () => { },
    loading: true,
    setLoading: () => { },
    totalPages: 0,
    analyticsCardsData: {},
    setAnalyticsCardsData: () => { }
}

const CoinContext = createContext<CoinContextTypes>(initialState)

export const CoinContextProvider = ({ children }: { children: ReactNode }) => {
    const TOTAL_FILES = 250
    const ITEMS_PER_PAGE = 5

    const [coinData, setCoinData] = useState<CoinData[]>([])
    const [loading, setLoading] = useState(true)
    const [analyticsCardsData, setAnalyticsCardsData] = useState<any>()


    const fecthCoinData = useCallback(
        async ({ currency, page, query }: FecthCoinDataPropTypes) => {
            try {
                // normally the key could live in a .env file
                const options = {
                    method: 'GET',
                    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-X3KPSR7PGvJ1pKDGRhaqRkij' }
                }

                if (query?.length) {
                    const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`, options)

                    if (!res.ok) throw new Error('failed to search')

                    const data = await res.json()

                    const formattedData = data.coins.map((coin: any) => ({
                        id: coin.id,
                        name: coin.name,
                        symbol: coin.symbol,
                        image: coin.thumb,
                        current_price: 0, // No price data available in search
                        price_change_percentage_24h: 0, // No percentage change in search
                        market_cap: 0, // No market cap data in search
                    }))

                    setCoinData(formattedData)
                } else {
                    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}&per_page=${ITEMS_PER_PAGE}&symbol=${query}`, options)

                    if (!res.ok) throw new Error('failed to fetch')

                    const data = await res.json()

                    setCoinData(data)
                }
            } catch (error) {
                // errors could be logged to an external service
            } finally {
                setLoading(false)
            }
        }, [])

    const fetchCryptoData = async () => {
        try {
            const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin")

            if (!res.ok) throw new Error("Failed to fetch")

            const data = await res.json()

            setAnalyticsCardsData(data)
        } catch (error) {
            // errors could be logged to an external service
        }
    }

    useEffect(() => {
        fetchCryptoData()
    }, [])

    return (
        <CoinContext.Provider value={{
            coinData,
            fecthCoinData,
            loading,
            setLoading,
            analyticsCardsData,
            setAnalyticsCardsData,
            totalPages: TOTAL_FILES / ITEMS_PER_PAGE,
        }}>
            {children}
        </CoinContext.Provider >
    )
}

export default CoinContext

```