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
	doInstrumentBidsAsksFetchFailure,
	doFiatPurchaseSuccess,
	doFiatPurchaseFailure,
	doFiatDepositSuccess,
	doFiatDepositFailure,
	doPlaceOrderSuccess,
	doPlaceOrderFailure,
} from '../actions'
import API from '../api'

function* watchAll() {
	yield all([
		takeEvery(ActionTypes.USER_SIGNUP_REQUEST, requestUserSignup),
		takeEvery(ActionTypes.USER_LOGIN_REQUEST, requestUserLogin),
		takeEvery(
			ActionTypes.USER_LOGIN_SUCCESS,
			requestAvailableInstruments,
		),
		takeEvery(
			ActionTypes.INSTRUMENT_SELECT,
			requestSelectedInstrumentBidAskPrices,
		),
		takeEvery(
			ActionTypes.FIAT_PURCHASE_REQUEST,
			requestFiatPurchase,
		),
		takeEvery(
			ActionTypes.FIAT_DEPOSIT_REQUEST,
			requestFiatDeposit,
		),
		takeEvery(ActionTypes.PLACE_ORDER_REQUEST, requestPlaceOrder),
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
	console.log(action)
	try {
		const response = yield call(
			API.instruments.getById,
			action.instrumentId,
		)
		yield put(doInstrumentBidsAsksFetchSuccess(response))
	} catch (error) {
		yield put(doInstrumentBidsAsksFetchFailure(error))
	}
}

function* requestFiatPurchase(action) {
	try {
		const data = {
			privateKey: action.privateKey,
			amount: action.amount,
		}
		const response = yield call(
			API.instruments.purchaseFiat,
			data,
		)
		yield put(doFiatPurchaseSuccess(response))
	} catch (error) {
		yield put(doFiatPurchaseFailure(error))
	}
}

function* requestFiatDeposit(action) {
	try {
		const data = {
			privateKey: action.privateKey,
			amount: action.amount,
		}
		const response = yield call(API.instruments.depositFiat, data)
		yield put(doFiatDepositSuccess(response))
	} catch (error) {
		yield put(doFiatDepositFailure(error))
	}
}

function* requestPlaceOrder(action) {
	try {
		const data = {
			numberOfShares: action.numberOfShares,
			assetId: action.assetId,
			side: action.side,
			limitPrice: action.limitPrice,
			privateKey: action.privateKey,
		}
		const response = yield call(API.orders.placeOrder, data)
		yield put(doPlaceOrderSuccess(response))
	} catch (error) {
		yield put(doPlaceOrderFailure(error))
	}
}

export default watchAll
