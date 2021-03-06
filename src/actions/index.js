import { ActionTypes } from '../constants'

// SIGNUP
export const doUserSignupRequest = (username, password) => ({
	type: ActionTypes.USER_SIGNUP_REQUEST,
	username,
	password,
})

export const doUserSignupSuccess = response => ({
	type: ActionTypes.USER_SIGNUP_SUCCESS,
	response,
	successMessage: 'Your account has been created successfully!',
})

export const doUserSignupFailure = error => ({
	type: ActionTypes.USER_SIGNUP_FAILURE,
	errorMessage: error.message || 'Something went wrong.',
})

// LOGIN
export const doUserLoginRequest = (username, privateKey) => ({
	type: ActionTypes.USER_LOGIN_REQUEST,
	username,
	privateKey,
})

export const doUserLoginFailure = error => ({
	type: ActionTypes.USER_LOGIN_FAILURE,
	errorMessage: error.message || 'Something went wrong.',
})

export const doUserLoginSuccess = response => ({
	type: ActionTypes.USER_LOGIN_SUCCESS,
	response,
})

// DIALOGS
export const doDialogClose = () => ({
	type: ActionTypes.DIALOG_CLOSING,
})

// INSTRUMENTS
export const doInstrumentSelect = instrumentId => ({
	type: ActionTypes.INSTRUMENT_SELECT,
	instrumentId,
})

export const doInstrumentsFetchSuccess = response => ({
	type: ActionTypes.INSTRUMENTS_FETCH_SUCCESS,
	response,
})

export const doInstrumentBidsAsksFetchSuccess = response => ({
	type: ActionTypes.INSTRUMENT_BIDS_ASKS_PRICE_FETCH_SUCCESS,
	response,
})

export const doInstrumentBidsAsksFetchFailure = error => ({
	type: ActionTypes.INSTRUMENTS_FETCH_FAILURE,
	errorMessage:
		error.message || 'Could not complete fiat purchase.',
})

// FIAT
export const doFiatPurchaseRequest = (amount, privateKey) => ({
	type: ActionTypes.FIAT_PURCHASE_REQUEST,
	amount,
	privateKey,
})

export const doFiatPurchaseSuccess = response => ({
	type: ActionTypes.FIAT_PURCHASE_SUCCESS,
	response,
})

export const doFiatPurchaseFailure = error => ({
	type: ActionTypes.FIAT_PURCHASE_FAILURE,
	errorMessage:
		error.message || 'Could not complete fiat purchase.',
})

export const doFiatDepositRequest = (amount, privateKey) => ({
	type: ActionTypes.FIAT_DEPOSIT_REQUEST,
	amount,
	privateKey,
})

export const doFiatDepositSuccess = response => ({
	type: ActionTypes.FIAT_DEPOSIT_SUCCESS,
	response,
})

export const doFiatDepositFailure = error => ({
	type: ActionTypes.FIAT_DEPOSIT_FAILURE,
	errorMessage: error.message || 'Could not complete deposit.',
})

// ORDERS
export const doPlaceOrderRequest = (
	numberOfShares,
	assetId,
	limitPrice,
	side,
	privateKey,
) => ({
	type: ActionTypes.PLACE_ORDER_REQUEST,
	numberOfShares,
	assetId,
	limitPrice,
	side,
	privateKey,
})

export const doPlaceOrderSuccess = response => ({
	type: ActionTypes.PLACE_ORDER_SUCCESS,
	response,
})

export const doPlaceOrderFailure = error => ({
	type: ActionTypes.PLACE_ORDER_FAILURE,
	errorMessage: error.message || 'Could not place the order.',
})
