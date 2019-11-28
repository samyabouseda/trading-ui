/**
 Scénario : Un nouveau trader s’enregistre sur la plateforme
 	ETANT DONEE que le trader se trouve sur la page de création de compte
 	LORSQUE le trader remplis les champs « username » et « password » avec ses informations
 	ET click sur le bouton « Create account »
 	ALORS il doit voir un message de confirmation avec son username et sa clé privée
*/

const sel = testid => `[data-testid="${testid}"]`
const ROUTES = {
	SIGNUP: `http://localhost:3000/signup`,
}

describe('Scénario : Un nouveau trader s’enregistre sur la plateforme', async () => {
	it('ETANT DONEE que le trader se trouve sur la page de création de compte', async () => {
		await page.goto(ROUTES.SIGNUP)
		await page.waitForSelector(sel('signup-screen'))
	})

	it('LORSQUE le trader remplis les champs « username » et « password » avec ses informations', async () => {
		const values = {
			username: 'James',
			password: 'Bond',
		}
		await expect(page).toFillForm(sel('signup-form'), values)
	})

	it('ET click sur le bouton "Create account"', async () => {
		await expect(page).toClick('button', {
			text: 'Create account',
		})
	})

	it('ALORS il doit voir un errorMessage de confirmation avec son username et sa clé privée', async () => {
		await page.waitForSelector(sel('signup-success-message'))
		await page.waitForSelector(sel('username-field'))
		await page.waitForSelector(sel('private-key-field'))
	})
})
