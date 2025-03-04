"use client"

import { useContext, useEffect } from "react"
import CoinContext from "@/context/CoinContext"
import { CoinData, PearchParams } from "@/types"
import Image from "next/image"
import { currencyHandler, debounce } from "@/lib/utils"
import TableSkeleton from "../loaders/TableSkeleton"
import clsx from "clsx"

export default function Table({ searchParams }: PearchParams) {
    const { coinData, loading, fecthCoinData } = useContext(CoinContext)

    const currency = searchParams?.currency || 'usd'
    const page = searchParams?.page || '1'
    const query = searchParams?.query || ''

    useEffect(() => {
        debounce(() => fecthCoinData({ currency, page, query }))
    }, [currency, page, query, fecthCoinData])

    if (loading) {
        return <TableSkeleton />
    }

    return (
        <div className="relative w-full mx-auto rounded-b-lg border rounded-xl overflow-x-auto ">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left text-gray-600 text-sm font-medium">
                        {
                            ['name', 'price', 'change', 'marketCap'].map((title, index) => (
                                <th
                                    key={title}
                                    className=" px-8 py-3 border-b cursor-context-menu"
                                >
                                    {title}
                                </th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody className="text-gray-800">
                    {
                        coinData?.length > 0
                            ? coinData.map(({ name,
                                symbol, image, current_price, price_change_percentage_24h, market_cap }, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="hover:bg-gray-50 cursor-pointer group"
                                >
                                    <td className=" px-8 py-3 border border-x-0 cursor-context-menu">
                                        <div className="flex gap-2 items-center">
                                            <Image
                                                src={image}
                                                alt="cryto coin image"
                                                className="w-8 h-8"
                                                width={1080}
                                                height={1080}
                                            />

                                            {name} - {symbol}
                                        </div>
                                    </td>

                                    <td className=" px-8 py-3 border border-x-0 cursor-context-menu">
                                        {currencyHandler(currency)}
                                        {" "}
                                        {current_price.toLocaleString()}
                                    </td>

                                    <td className={clsx(
                                        "px-8 py-3 border border-x-0 cursor-context-menu",
                                        {
                                            'text-green-500': price_change_percentage_24h > 0,
                                            'text-red-500': price_change_percentage_24h <= 0
                                        }
                                    )}>
                                        {price_change_percentage_24h.toFixed(2)}
                                    </td>

                                    <td className=" px-8 py-3 border border-x-0 cursor-context-menu">
                                        {currencyHandler(currency)}
                                        {" "}
                                        {market_cap.toLocaleString()}
                                    </td>
                                </tr>
                            ))
                            : <p className="p-4">No Results Available</p>
                    }
                </tbody>
            </table>
        </div>
    )
}
