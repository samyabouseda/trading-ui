import { takeEvery, all, call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { ActionTypes } from '../constants'
import {
	doUserSignupSuccess,
	doUserSignupFailure,
	doUserLoginSuccess,
	doUserLoginFailure,
	doInstrumentsFetchSuccess,
	doInstrumentBidsAsksFetchSuccess,
	doFiatPurchaseSuccess,
	doFiatPurchaseFailure,
} from '../actions'
import API from '../api'

function* watchAll() {
	yield all([
		takeEvery(ActionTypes.USER_SIGNUP_REQUEST, requestUserSignup),
		takeEvery(ActionTypes.USER_LOGIN_REQUEST, requestUserLogin),
		takeEvery(ActionTypes.USER_LOGIN_SUCCESS, requestAvailableInstruments),
		takeEvery(ActionTypes.INSTRUMENT_SELECT, requestSelectedInstrumentBidAskPrices),
		takeEvery(ActionTypes.FIAT_PURCHASE_REQUEST, requestFiatPurchase)
	])
}

function* requestUserLogin(action) {
	try {
		const response = yield call(
			API.accounts.login,
			action.privateKey,
		)
		yield put(doUserLoginSuccess(response))
		yield put(push('/dashboard'))
	} catch (error) {
		yield put(doUserLoginFailure(error))
	}
}

function* requestUserSignup(action) {
	try {
		const account = {
			username: action.username,
			password: action.password,
		}
		const response = yield call(API.accounts.create, account)
		yield put(doUserSignupSuccess(response))
	} catch (error) {
		yield put(doUserSignupFailure(error))
	}
}

function* requestAvailableInstruments(action) {
	try {
		const response = yield call(API.instruments.getAll)
		yield put(doInstrumentsFetchSuccess(response))
	} catch (error) {
		// TODO: yield put (doInstrumentsFetchFailure(error))
	}
}

function* requestSelectedInstrumentBidAskPrices(action) {
	try {
		const response = yield call(API.instruments.getById, action.instrumentId)
		yield put(doInstrumentBidsAsksFetchSuccess(response))
	} catch (error) {
		// TODO: yield put (doInstrumentBidsAsksFetchFailure(error))
	}
}

function* requestFiatPurchase(action) {
	try {
		const data = {
			privateKey: action.privateKey,
			amount: action.amount,
		}
		const response = yield call(API.instruments.purchaseFiat, data)
		yield put(doFiatPurchaseSuccess(response))
	} catch (error) {
		yield put(doFiatPurchaseFailure(error))
	}
}

export default watchAll
