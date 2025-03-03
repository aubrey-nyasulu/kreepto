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
}

const initialState: CoinContextTypes = {
    coinData: [],
    fecthCoinData: () => { },
    loading: true,
    setLoading: () => { },
    totalPages: 0
}

const CoinContext = createContext<CoinContextTypes>(initialState)

export const CoinContextProvider = ({ children }: { children: ReactNode }) => {
    const TOTAL_FILES = 250
    const ITEMS_PER_PAGE = 10

    const [coinData, setCoinData] = useState<CoinData[]>([])
    const [loading, setLoading] = useState(true)
    const [pages, setPages] = useState<number[]>([])


    const fecthCoinData = useCallback(
        async ({ currency, page, query }: FecthCoinDataPropTypes) => {
            try {
                // normally the key could live in a .env file
                const options = {
                    method: 'GET',
                    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-X3KPSR7PGvJ1pKDGRhaqRkij' }
                }

                // return

                const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}&per_page=${ITEMS_PER_PAGE}`, options)

                if (!res.ok) return

                const data = await res.json()

                setCoinData(data)
                setPages(Array.from({ length: Math.ceil(TOTAL_FILES / ITEMS_PER_PAGE) }))
            } catch (error) {
                console.log({ error })
            } finally {
                setLoading(false)
            }
        }, [])


    return (
        <CoinContext.Provider value={{
            coinData,
            fecthCoinData,
            loading,
            setLoading,
            totalPages: TOTAL_FILES / ITEMS_PER_PAGE,
        }}>
            {children}
        </CoinContext.Provider >
    )
}

export default CoinContext
