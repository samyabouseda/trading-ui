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
		case ActionTypes.ERROR_POPUP_CLOSE:
			return { ...state, successMessage: null }
		default:
			return state
	}
}

const applyUserSignupSucceeded = (state, action) => {
	const {
		user: { username, address, privateKey },
	} = action.response.data
	return {
		...state,
		username,
		address,
		privateKey,
		successMessage: action.successMessage,
	}
}

const applyUserSignupFailed = (state, action) => ({ ...state })

export const getSuccessMessage = state => state.user.successMessage

export const getUser = state => {
	const {
		user: { username, address, privateKey },
	} = state
	return {
		username,
		address,
		privateKey,
	}
}

export default user
