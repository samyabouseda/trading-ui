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
		'0xf581a6a329a60ffd07abe34ce920acb3765fd784090b890153fddeb9f33b0316',
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
		// if this test doesn't pass, it may be because the test account
		// doesn't exist yet. See the todo at the top of the file.
		await expect(page).toMatchElement(sel('dashboard-screen'))
	})
})
