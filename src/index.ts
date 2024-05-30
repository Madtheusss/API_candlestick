import { config } from 'dotenv'
import axios from 'axios'

config()

const readMarketPrice = async (): Promise<Number> => {

    const result = await axios.get(process.env.PRICES_API)

    // Extrai os dados da resposta
    const data = result.data

    // Extrai o preço do bitcoin em dólares dos dados
    const price = data.bitcoin.usd

    // Retorna o preço
    return price
}

readMarketPrice()