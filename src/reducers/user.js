import { ActionTypes } from '../constants'

const INITIAL_STATE = {
	username: null,
	address: null,
	privateKey: null,
	successMessage: null,
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

const applyUserSignupSucceeded = (state, action) => {
	const { data } = action.response
	return {
		...state,
		data,
		successMessage: action.successMessage,
	}
}

const applyUserSignupFailed = (state, action) => ({ ...state })

export default user
