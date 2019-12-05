import { takeEvery, all, call, put } from 'redux-saga/effects'
import { ActionTypes } from '../constants'
import { doUserSignupSuccess, doUserSignupFailure } from '../actions'
import API from '../api'

function* watchAll() {
	yield all([
		takeEvery(ActionTypes.USER_SIGNUP_REQUEST, requestUserSignup),
		// TODO: Add UserSignupRequest
	])
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
