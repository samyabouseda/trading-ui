import { ActionTypes } from '../constants'

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

const doDialogClose = () => ({
	type: ActionTypes.DIALOG_CLOSING,
})

export {
	doUserSignupRequest,
	doUserSignupSuccess,
	doUserSignupFailure,
	doDialogClose,
}
