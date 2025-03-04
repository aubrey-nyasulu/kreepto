"use client"

import CoinContext from "@/context/CoinContext"
import clsx from "clsx"
import { useContext } from "react"

export default function AnalyticsCards({ currency }: { currency: string }) {
    const { analyticsCardsData } = useContext(CoinContext)

    return (
        <div className="w-full flex gap-4 justify-between px-2">
            <MarketOverview
                high24h={analyticsCardsData?.market_data.high_24h.usd}
                low24h={analyticsCardsData?.market_data.low_24h.usd}
                priceChangePercentage24h={analyticsCardsData?.market_data.price_change_percentage_24h}
            />

            <AllTimeStats
                ath={analyticsCardsData?.market_data.ath.usd}
                athChangePercentage={analyticsCardsData?.market_data.ath_change_percentage.usd}
                atl={analyticsCardsData?.market_data.atl.usd}
                atlChangePercentage={analyticsCardsData?.market_data.atl_change_percentage.usd}
            />

            <MarketCapVolume
                marketCap={analyticsCardsData?.market_data.market_cap.usd}
                totalVolume={analyticsCardsData?.market_data.total_volume.usd}
            />

            <SupplyStats
                circulatingSupply={analyticsCardsData?.market_data.circulating_supply}
                maxSupply={analyticsCardsData?.market_data.max_supply}
            />
        </div>
    )
}

type MarketOverviewProps = {
    high24h: number
    low24h: number
    priceChangePercentage24h: number
}

const MarketOverview: React.FC<MarketOverviewProps> = ({ high24h, low24h, priceChangePercentage24h }) => {
    return (
        <div className="p-1 rounded-2xl border w-full min-w-[220px] flex flex-col gap-1">
            <div className="bg-gray-500/10 backdrop-blur-3xl p-2 rounded-t-xl">
                <h2 className="text-lg ">Market Overview (24h)</h2>
            </div>

            <div className="flex-1 flex flex-col justify-center bg-gray-500/5 backdrop-blur-3xl p-2">
                <p>🔼 High: ${high24h?.toLocaleString()}</p>
                <p>🔽 Low: ${low24h?.toLocaleString()}</p>
            </div>

            <div className="bg-gray-500/5 backdrop-blur-3xl p-2 rounded-b-xl">
                <p className={clsx(
                    {
                        'text-green-500': priceChangePercentage24h > 0,
                        'text-red-500': priceChangePercentage24h <= 0
                    }
                )}
                >
                    📉 24h Change: {priceChangePercentage24h?.toFixed(2)}%
                </p>
            </div>
        </div >
    )
}

type AllTimeStatsProps = {
    ath: number
    athChangePercentage: number
    atl: number
    atlChangePercentage: number
}

const AllTimeStats: React.FC<AllTimeStatsProps> = ({ ath, athChangePercentage, atl, atlChangePercentage }) => {
    console.log({ ath, athChangePercentage, atl, atlChangePercentage })
    return (
        <div className="p-1 rounded-2xl border w-full min-w-[220px] flex flex-col gap-1">
            <div className="bg-gray-500/10 backdrop-blur-3xl p-2 rounded-t-xl">
                <h2 className="text-lg ">All-Time High & Low</h2>
            </div>

            <div className="flex-1 flex flex-col justify-center bg-gray-500/5 backdrop-blur-3xl p-2">
                <p >🏆 ATH: ${ath?.toLocaleString()}
                    (<span className={clsx(
                        {
                            'text-green-500': athChangePercentage > 0,
                            'text-red-500': athChangePercentage <= 0
                        }
                    )}
                    >
                        {athChangePercentage?.toFixed(2)}%
                    </span>)
                </p>
            </div>

            <div className="bg-gray-500/5 backdrop-blur-3xl p-2 rounded-b-xl">
                <p>📉 ATL: ${atl?.toLocaleString()}  (<span className={clsx(
                    {
                        'text-green-500': athChangePercentage > 0,
                        'text-red-500': athChangePercentage <= 0
                    }
                )}
                >{atlChangePercentage?.toFixed(2)}%
                </span>)
                </p>

            </div>
        </div>
    )
}

type MarketCapVolumeProps = {
    marketCap: number
    totalVolume: number
}

const MarketCapVolume: React.FC<MarketCapVolumeProps> = ({ marketCap, totalVolume }) => {
    return (
        <div className="p-1 rounded-2xl border w-full min-w-[220px] flex flex-col gap-1">
            <div className="bg-gray-500/10 backdrop-blur-3xl p-2 rounded-t-xl">
                <h2 className="text-lg ">Market Cap & Volume</h2>
            </div>
            <div className="flex-1 flex flex-col justify-center bg-gray-500/5 backdrop-blur-3xl p-2">
                <p>💰 Market Cap: ${marketCap?.toLocaleString()}</p>
            </div>
            <div className="bg-gray-500/5 backdrop-blur-3xl p-2 rounded-b-xl">
                <p>📊 Trading Volume: ${totalVolume?.toLocaleString()}</p>
            </div>
        </div>
    )
}

type SupplyStatsProps = {
    circulatingSupply: number
    maxSupply: number
}

const SupplyStats: React.FC<SupplyStatsProps> = ({ circulatingSupply, maxSupply }) => {
    return (
        <div className="p-1 rounded-2xl border w-full min-w-[220px] flex flex-col gap-1">
            <div className="bg-gray-500/10 backdrop-blur-3xl p-2 rounded-t-xl">
                <h2 className="text-lg ">Supply Overview</h2>
            </div>
            <div className="flex-1 flex flex-col justify-center bg-gray-500/5 backdrop-blur-3xl p-2">
                <p>🔄 Circulating Supply: {circulatingSupply?.toLocaleString()} BTC</p>
            </div>
            <div className="bg-gray-500/5 backdrop-blur-3xl p-2 rounded-b-xl">
                <p>📦 Max Supply: {maxSupply ? maxSupply?.toLocaleString() : "N/A"} BTC</p>
            </div>
        </div>
    )
}
