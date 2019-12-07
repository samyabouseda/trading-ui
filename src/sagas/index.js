import { takeEvery, all, call, put } from 'redux-saga/effects'
import { ActionTypes } from '../constants'
import {
	doUserSignupSuccess,
	doUserSignupFailure,
	doUserLoginSuccess,
	doUserLoginFailure,
} from '../actions'
import API from '../api'

function* watchAll() {
	yield all([
		takeEvery(ActionTypes.USER_SIGNUP_REQUEST, requestUserSignup),
		takeEvery(ActionTypes.USER_LOGIN_REQUEST, requestUserLogin),
	])
}

function* requestUserLogin(action) {
	try {
		const response = yield call(
			API.accounts.login,
			action.privateKey,
		)
		yield put(doUserLoginSuccess(response))
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

export default watchAll
