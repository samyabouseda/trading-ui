require('dotenv').config()

const env = process.env.NODE_ENV // 'development', 'test' or 'production'

const base = {
	// YOUR BASE CONFIG HERE
	PUPPETEER_HEADLESS: process.env.PUPPETEER_HEADLESS || true,
}

const development = {
	configId: 'development',
	services: {
		EXCHANGE_API_URL: 'http://127.0.0.1:8081',
	},
}

const test = {
	configId: 'test',
}

const production = {
	configId: 'production',
}

const config = {
	development,
	test,
	production,
}

export default { ...base, ...config[env] }
