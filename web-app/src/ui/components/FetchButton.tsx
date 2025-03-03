"use client"

import CoinContext from "@/context/CoinContext"
import { useContext } from "react"

export default function FetchButton({ currency }: { currency: string }) {
    const { fecthCoinData, setLoading } = useContext(CoinContext)

    const refresh = () => {
        setLoading(true)
        fecthCoinData({ currency, page: '1' })
    }

    return (
        <button
            onClick={refresh}
            className="font-semibold fixed bottom-4 right-4 md:right-8 bg-gray-500/10 backdrop-blur-xl border outline-0 px-8 py-4 rounded-full"
        >
            Refresh Feed
        </button>
    )
}
