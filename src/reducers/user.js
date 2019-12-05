import { ActionTypes } from '../constants'

const INITIAL_STATE = {
	username: null,
	address: null,
	privateKey: null,
	successMessage: null,
	balances: [],
}

const user = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.USER_SIGNUP_SUCCESS:
			return applyUserSignupSucceeded(state, action)
		case ActionTypes.USER_SIGNUP_FAILURE:
			return applyUserSignupFailed(state, action)
		case ActionTypes.USER_LOGIN_REQUEST:
			return applyUserLoginRequested(state, action)
		case ActionTypes.USER_LOGIN_SUCCESS:
			return applyUserLoginSucceded(state, action)
		case ActionTypes.USER_LOGIN_FAILURE:
			return applyUserLoginFailed(state, action)
		case ActionTypes.DIALOG_CLOSING:
			return applyDialogClosing(state, action)
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

const applyUserLoginRequested = (state, action) => ({
	...state,
	username: action.username,
	privateKey: action.privateKey,
})

const applyUserLoginSucceded = (state, action) => {
	const {
		user: { balances, address },
	} = action.response.data
	return {
		...state,
		address,
		balances,
	}
}

const applyUserLoginFailed = (state, action) => ({
	...state,
	username: null,
	privateKey: null,
})

const applyDialogClosing = (state, action) => ({
	...state,
	successMessage: null,
})

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
