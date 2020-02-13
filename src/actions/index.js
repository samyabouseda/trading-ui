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

const doUserLoginSuccess = response => ({
	type: ActionTypes.USER_LOGIN_SUCCESS,
	response,
})

// DIALOGS
const doDialogClose = () => ({
	type: ActionTypes.DIALOG_CLOSING,
})

// INSTRUMENTS
const doInstrumentSelect = instrumentId => ({
	type: ActionTypes.INSTRUMENT_SELECT,
	instrumentId
})

const doInstrumentsFetchSuccess = response => ({
	type: ActionTypes.INSTRUMENTS_FETCH_SUCCESS,
	response
})

const doInstrumentsFetchFailure = error => ({
	type: ActionTypes.INSTRUMENTS_FETCH_FAILURE,
	errorMessage: error.message || 'Something went wrong.',
})

export {
	doUserSignupRequest,
	doUserSignupSuccess,
	doUserSignupFailure,
	doUserLoginRequest,
	doUserLoginFailure,
	doUserLoginSuccess,
	doDialogClose,
	doInstrumentSelect,
	doInstrumentsFetchSuccess,
	doInstrumentsFetchFailure
}
