/**
 Scénario : Un trader existant se connect à la plateforme
 	ETANT DONEE que le trader se trouve sur la page de login
 	LORSQUE le trader remplis les champs "username", "password" et "privateKey"
 	ET click sur le bouton "Login"
 	ALORS il doit acceder au tablau de bord
 */

const sel = testid => `[data-testid="${testid}"]`
const ROUTES = {
	LOGIN: `http://localhost:3000/login`,
	DASHBOARD: `http://localhost:3000/dashboard`,
}

describe('Scénario : Un trader existant se connect à la plateforme', async () => {
	it('ETANT DONEE que le trader se trouve sur la page de login', async () => {
		await page.goto(ROUTES.LOGIN)
		await expect(page).toMatchElement(sel('login-screen'))
	})

	it('LORSQUE le trader remplis les champs "username", "password" et "privateKey"', async () => {
		const values = {
			username: 'James',
			password: 'Bond',
			privateKey:
				'0x76612a34b55d00ccf9a02ad4e622254afba5abe35d3850975d047667aff7ce9a',
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
