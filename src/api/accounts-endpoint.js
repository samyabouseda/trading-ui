import axios from 'axios'
import config from '../config'
import { CONFLICT } from 'http-status-codes'

const ACCOUNTS = `${config.services.EXCHANGE_API_URL}/accounts`

const create = async ({ username, password }) => {
	try {
		return await axios.post(ACCOUNTS, {
			username,
			password,
		})
	} catch (error) {
		if (error.message.includes(CONFLICT)) {
			throw Error('User already exists!')
		}
		throw Error(error.message)
	}
}

const accounts = {
	create,
}

export default accounts
