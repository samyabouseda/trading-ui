import { ActionTypes } from '../constants'

const doUserSignupRequest = (username, password) => ({
	type: ActionTypes.USER_SIGNUP_REQUEST,
	username,
	password,
})

const doUserSignupSuccess = response => ({
	type: ActionTypes.USER_SIGNUP_SUCCESS,
	response,
})

const doUserSignupFailure = error => ({
	type: ActionTypes.USER_SIGNUP_FAILURE,
	errorMessage: error.message || 'Something went wrong.',
})

const doCloseErrorWindow = () => ({
	type: ActionTypes.ERROR_POPUP_CLOSE,
})

export {
	doUserSignupRequest,
	doUserSignupSuccess,
	doUserSignupFailure,
	doCloseErrorWindow,
}