import { ActionTypes } from '../constants'

const INITIAL_STATE = {
	address: null,
	username: null,
	privateKey: null,
}

const user = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.USER_SIGNUP_SUCCESS:
			return applyUserSignupSucceeded(state, action)
		case ActionTypes.USER_SIGNUP_FAILURE:
			return applyUserSignupFailed(state, action)
		default:
			return state
	}
}

const applyUserSignupSucceeded = (state, action) => ({
	...state,
})

const applyUserSignupFailed = (state, action) => ({
	...state,
})

export default user
