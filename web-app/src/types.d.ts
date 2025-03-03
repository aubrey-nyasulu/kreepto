export type CoinData = {
    [index: string]: string | number
    name: string
    symbol: string
    image: string
    current_price: number
    price_change_percentage_24h: number
    market_cap: number
}

export type PearchParams = {
    searchParams: {
        currency: string, page: string, query?: string

    }
}