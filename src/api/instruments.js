import axios from 'axios'
import config from '../config'
import { CONFLICT, NOT_FOUND } from 'http-status-codes'

const SERVICE_URL = `${config.services.EXCHANGE_API_URL}/instruments/`

const getAll = async () => {
	try {
		// TODO: Replace hardcoded response with real request.
		const response = await axios.get(SERVICE_URL, )
		return {
			data: {
				instruments: [
					{ name: 'Apple Inc.', id: '5e4538ef7d4c990824c4d470', symbol: 'AAPL', address: '0x776a9b10c5fe1805317B4B0da110672C53608aDd' },
					{ name: 'Microsoft Corp.', id: '5e4538ef7d4c990824c4d472', symbol: 'MSFT', address: '0x776a9b10c5fe1805317B4B0da110672C53608aAF' },
					{ name: 'Tesla Inc.', id: '5e4538ef7d4c990824c4d488', symbol: 'TSLA', address: '0x776a9b10c5fe1805317B4B0da110672C53608aCD' },
				]
			}
		}
		// return response
	} catch (error) {
		throw Error(error.message)
	}
}

const getById = async instrumentId => {
	try {
		const url = `${SERVICE_URL}${instrumentId}`
		// TODO: Replace hardcoded response with real request.
		// const response = await axios.get(url)
		return {
			data: {
				instrument: {
					address: '0000',
					bids: [
						{ price: 9.25, volume: 100 },
						{ price: 10.45, volume: 230 },
						{ price: 11.02, volume: 210 },
						{ price: 12.51, volume: 50 },
					],
					asks: [
						{ price: 13.25, volume: 100 },
						{ price: 13.45, volume: 230 },
						{ price: 14.02, volume: 210 },
						{ price: 15.51, volume: 50 },
					],
					highestBid: 12.51,
					lowestAsk: 13.25,
				}
			}
		}
		// return response
	} catch (error) {
		if (error.message.includes(NOT_FOUND)) {
			throw Error(
				"Instrument doesn't exist. Please enter an instrument that exists.",
			)
		}
		throw Error(error.message)
	}
}

const purchaseFiat = async ({ amount, privateKey }) => {
	try {
		const URL = `${SERVICE_URL}/fiat/USDX`
		// return await axios.post(URL, {
		// 	amount,
		// 	privateKey,
		// })
		return {
			data: {
				purchase: {
					buyer: "0x3d088960898540017ABeCEcAf6017246899495e4",
					fiat: {
						symbol: "USDX",
						name: "Dextr. USD",
						address: "0x3d088960898540017ABeCEcAf60172468994FAAA",
					},
					amount: 231,
					status: "pending" // complete,
				}
			}
		}
	} catch (error) {
		throw Error(error.message)
	}
}

const accounts = {
	getAll,
	getById,
	purchaseFiat,
}

export default accounts
