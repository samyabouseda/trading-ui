// The file for a custom puppeteer config, learn more:
// https://github.com/smooth-code/jest-puppeteer#configure-puppeteer

module.exports = {
	launch: {
		headless: false, //process.env.HEADLESS !== 'false',
	},
	browserContext: 'default',
}
