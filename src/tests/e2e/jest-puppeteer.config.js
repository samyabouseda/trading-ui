// The file for a custom puppeteer config, learn more:
// https://github.com/smooth-code/jest-puppeteer#configure-puppeteer
import config from '../../config'

module.exports = {
	launch: {
		headless: config.PUPPETEER_HEADLESS,
	},
	browserContext: 'default',
}
