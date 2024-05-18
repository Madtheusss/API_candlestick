import { config } from 'dotenv'
import axios from 'axios'

const readMarketPrice = async (): Promise<Number> => {
    config()

    const result = await axios.get(process.env.PRICES_API)
    const data = result.data
    const price = data.bitcoin.usd
    console.log(price)
    return price
}

readMarketPrice()