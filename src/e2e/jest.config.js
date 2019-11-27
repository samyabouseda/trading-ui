// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	preset: 'jest-puppeteer',
	setupFilesAfterEnv: ['expect-puppeteer'],
	testRegex: './*\\.test\\.js$',
}