import axios from 'axios'
import config from '../config'

const ACCOUNTS = `${config.services.EXCHANGE_API_URL}/accounts`

const create = async ({ username, password }) => {
	try {
		return await axios.post(ACCOUNTS, {
			username,
			password,
		})
	} catch (error) {
		throw Error(error.message)
	}
}

const accounts = {
	create,
}

export default accounts
