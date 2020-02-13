import axios from 'axios'
import config from '../config'
import { NOT_FOUND } from 'http-status-codes'

const SERVICE_URL = `${config.services.EXCHANGE_API_URL}/instruments`

const getAll = async () => {
	try {
		// const response = await axios.get(SERVICE_URL, )
		return {
			data: {
				instruments: [
					{ name: 'Apple Inc.', id: '5e4538ef7d4c990824c4d470', symbol: 'AAPL', address: '0x776a9b10c5fe1805317B4B0da110672C53608aDd' },
					{ name: 'Microsoft Corp.', id: '5e4538ef7d4c990824c4d472', symbol: 'MSFT', address: '0x776a9b10c5fe1805317B4B0da110672C53608aAF' },
					{ name: 'Tesla Inc.', id: '5e4538ef7d4c990824c4d488', symbol: 'TSLA', address: '0x776a9b10c5fe1805317B4B0da110672C53608aCD' },
				]
			}
		}
	} catch (error) {
		throw Error(error.message)
	}
}

const getById = async instrumentId => {
	try {
		const url = `${SERVICE_URL}/${instrumentId}`
		return await axios.get(url)
	} catch (error) {
		if (error.message.includes(NOT_FOUND)) {
			throw Error(
				"Instrument doesn't exist. Please enter an instrument that exists.",
			)
		}
		throw Error(error.message)
	}
}

const accounts = {
	getAll,
	getById,
}

export default accounts
