import axios from 'axios'
import config from '../config'

const SERVICE_URL = `${config.services.EXCHANGE_API_URL}`

const placeOrder = async ({
	numberOfShares,
	assetId,
	limitPrice,
	side,
	privateKey,
}) => {
	try {
		const URL = `${SERVICE_URL}/orders`
		const order = {
			side,
			limitPrice,
			size: numberOfShares,
			instrument: '0x7d0c42B08088B9c451dd68b3a6e3Ed770c6E08D6',
		}
		return await axios.post(URL, {
			order,
			privateKey,
		})
	} catch (error) {
		throw Error(error.message)
	}
}

export default {
	placeOrder,
}
