import axios from 'axios'
import config from '../config'
import { CONFLICT, NOT_FOUND } from 'http-status-codes'

const ACCOUNTS = `${config.services.EXCHANGE_API_URL}/accounts`

const create = async ({ username, password }) => {
	try {
		return await axios.post(ACCOUNTS, {
			username,
			password,
		})
	} catch (error) {
		console.log(error)
		if (error.message.includes(CONFLICT)) {
			throw Error('User already exists!')
		}
		throw Error(error.message)
	}
}

const login = async privateKey => {
	try {
		const url = `${ACCOUNTS}/${privateKey}`
		console.log(url)
		return await axios.get(url)
	} catch (error) {
		if (error.message.includes(NOT_FOUND)) {
			throw Error(
				"User doesn't exist. Please create an account first!",
			)
		}
		throw Error(error.message)
	}
}

const accounts = {
	create,
	login,
}

export default accounts
