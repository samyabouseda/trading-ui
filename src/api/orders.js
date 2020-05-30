import axios from 'axios'
import config from '../config'
import { NOT_FOUND } from 'http-status-codes'

const SERVICE_URL = `${config.services.EXCHANGE_API_URL}/orders/`

const placeOrder = async ({
	numberOfShares,
	assetId,
	usdxAmount,
	privateKey,
}) => {
	try {
		const URL = `${SERVICE_URL}/orders`
		return await axios.post(URL, {
			numberOfShares,
			assetId,
			usdxAmount,
			privateKey,
		})
		// return {
		// 	data: {
		// 		purchase: {
		// 			buyer: "0x3d088960898540017ABeCEcAf6017246899495e4",
		// 			fiat: {
		// 				symbol: "USDX",
		// 				name: "Dextr. USD",
		// 				address: "0x3d088960898540017ABeCEcAf60172468994FAAA",
		// 			},
		// 			amount: 231,
		// 			status: "pending" // complete,
		// 		}
		// 	}
		// }
	} catch (error) {
		throw Error(error.message)
	}
}

export default {
	placeOrder,
}
