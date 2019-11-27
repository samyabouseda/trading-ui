import { ActionTypes } from '../constants'

// TODO: fix state shape -> improve message handling
const INITIAL_STATE = {
	user: {
		address: '',
		username: '',
		privateKey: '',
	},
	signupSucceededMessage: '',
	signupFailedMessage: '',
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.USER_SIGNUP_SUCCEEDED:
			return applyUserSignupSucceeded(state, action)
		case ActionTypes.USER_SIGNUP_FAILED:
			return applyUserSignupFailed(state, action)
		default:
			return state
	}
}

const applyUserSignupSucceeded = (state, action) => ({
	...state,
	products: action.products,
})

const applyUserSignupFailed = (state, action) => ({
	...state,
	// TODO: pass action.error message instead of static value.
	signupFailedMessage: 'Oops! Something went wrong during signup.',
})

export default userReducer
