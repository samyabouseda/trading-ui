import { ActionTypes } from '../constants'

// SIGNUP
const doUserSignupRequest = (username, password) => ({
	type: ActionTypes.USER_SIGNUP_REQUEST,
	username,
	password,
})

const doUserSignupSuccess = response => ({
	type: ActionTypes.USER_SIGNUP_SUCCESS,
	response,
	successMessage: 'Your account has been created successfully!',
})

const doUserSignupFailure = error => ({
	type: ActionTypes.USER_SIGNUP_FAILURE,
	errorMessage: error.message || 'Something went wrong.',
})

// LOGIN
const doUserLoginRequest = (username, privateKey) => ({
	type: ActionTypes.USER_LOGIN_REQUEST,
	username,
	privateKey,
})

const doUserLoginFailure = error => ({
	type: ActionTypes.USER_LOGIN_FAILURE,
	errorMessage: error.message || 'Something went wrong.',
})

// DIALOGS
const doDialogClose = () => ({
	type: ActionTypes.DIALOG_CLOSING,
})

export {
	doUserSignupRequest,
	doUserSignupSuccess,
	doUserSignupFailure,
	doUserLoginRequest,
	doUserLoginFailure,
	doDialogClose,
}
