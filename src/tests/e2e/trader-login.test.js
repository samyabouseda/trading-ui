/**
 Scénario : Un trader existant se connecte à la plateforme
 	ETANT DONEE que le trader se trouve sur la page de login
	LORSQUE le trader remplis les champs "username" et "privateKey"
	ET click sur le bouton "Login"
	ALORS il doit accéder à son tableau de bord
 */

const sel = testid => `[data-testid="${testid}"]`
const ROUTES = {
	LOGIN: `http://localhost:3000/login`,
	DASHBOARD: `http://localhost:3000/dashboard`,
}
let USER = {
	username: 'Dan',
	password: 'thisisapassword',
	// TODO: Auto generate a new user account before each test.
	privateKey:
		'0x3359894b7fd6d87666aca88f6d0977ea71a8748a408186521c274112acba4502',
}

describe('Scénario : Un trader existant se connect à la plateforme', async () => {
	it('ETANT DONEE que le trader se trouve sur la page de login', async () => {
		await page.goto(ROUTES.LOGIN)
		await page.waitForSelector(sel('login-screen'))
	})

	it('LORSQUE le trader remplis les champs "username" et "privateKey"', async () => {
		const values = {
			username: USER.username,
			privateKey: USER.privateKey,
		}
		await expect(page).toFillForm(sel('login-form'), values)
	})

	it('ET click sur le bouton "Login"', async () => {
		await expect(page).toClick('button', {
			text: 'Login',
		})
	})

	it('ALORS il doit acceder au tablau de bord', async () => {
		await expect(page).toMatchElement(sel('dashboard-screen'))
	})
})
