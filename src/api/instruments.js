import axios from 'axios'
import config from '../config'
import { NOT_FOUND } from 'http-status-codes'

const SERVICE_URL = `${config.services.EXCHANGE_API_URL}/instruments`

const getAll = async () => {
	try {
		return await axios.get(SERVICE_URL, )
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
