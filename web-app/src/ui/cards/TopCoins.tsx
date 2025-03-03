export default function TopCoins() {
    return (
        <div className="w-full flex gap-4 justify-between px-2">
            <MarketOverview {...{ high24h: 2143525, low24h: 134343, priceChangePercentage24h: 24 }} />

            <AllTimeStats {...{ ath: 63463, athChangePercentage: 35, atl: 4224, atlChangePercentage: 31 }} />

            {/* <MarketCapVolume {...{ marketCap: 34341111, totalVolume: 45252 }} /> */}

            {/* <SupplyStats {...{ circulatingSupply: 3225, maxSupply: 24525 }} /> */}
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
        <div className="p-1 rounded-2xl border  w-full min-w-[200px]">
            <div className="bg-blue-500/20 backdrop-blur-3xl p-2 rounded-t-xl">
                <h2 className="text-lg ">Market Overview (24h)</h2>
            </div>

            <div className="my-1 bg-green-500/10 backdrop-blur-3xl p-2">
                <p>🔼 <strong>High:</strong> ${high24h.toLocaleString()}</p>
                <p>🔽 <strong>Low:</strong> ${low24h.toLocaleString()}</p>
            </div>

            <div className="bg-purple-500/10 backdrop-blur-3xl p-2 rounded-b-xl">
                <p>📉 <strong>24h Change:</strong> {priceChangePercentage24h.toFixed(2)}%</p>
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
    return (
        <div className="p-1 rounded-2xl border  w-full min-w-[200px]">
            <div className="bg-blue-500/20 backdrop-blur-3xl p-2 rounded-t-xl">
                <h2 className="text-lg ">All-Time High & Low</h2>
            </div>

            <div className="my-1 bg-green-500/10 backdrop-blur-3xl p-2">
                <p>🏆 <strong>ATH:</strong> ${ath.toLocaleString()} ({athChangePercentage.toFixed(2)}%)</p>
            </div>

            <div className="bg-purple-500/10 backdrop-blur-3xl p-2 rounded-b-xl">
                <p>📉 <strong>ATL:</strong> ${atl.toLocaleString()} ({atlChangePercentage.toFixed(2)}%)</p>
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
        <div className="p-4 rounded-2xl border  w-full">
            <h2 className="text-lg ">Market Cap & Volume</h2>
            <div className="mt-2">
                <p>💰 <strong>Market Cap:</strong> ${marketCap.toLocaleString()}</p>
                <p>📊 <strong>Trading Volume:</strong> ${totalVolume.toLocaleString()}</p>
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
        <div className="p-4 rounded-2xl border  w-full">
            <h2 className="text-lg ">Supply Overview</h2>
            <div className="mt-2">
                <p>🔄 <strong>Circulating Supply:</strong> {circulatingSupply.toLocaleString()} BTC</p>
                <p>📦 <strong>Max Supply:</strong> {maxSupply ? maxSupply.toLocaleString() : "N/A"} BTC</p>
            </div>
        </div>
    )
}

function Card() {
    return (
        <div className="min-w-[200px] p-1 rounded-xl bg-black/5 backdrop-blur-md shadow-sm">
            <div className="mb-1 p-2 bg-black/5 backdrop-blur-md rounded-t-xl">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <p>BitCoin</p>
            </div>

            <div className="p-2 bg-black/5 backdrop-blur-md rounded-b-xl">
                <p>$ 500,383,40</p>

                <p>12.97</p>
            </div>
        </div>
    )
}