import { takeEvery, all, call, put } from 'redux-saga/effects'
import { ActionTypes } from '../constants'
import { doUserSignupSucceeded, doUserSignupFailed } from '../actions'

function* watchAll() {
	yield all([
		takeEvery(
			ActionTypes.USER_SIGNUP_REQUESTED,
			requestUserSignup,
		),
	])
}

function* requestUserSignup() {
	try {
		const result = yield call()
		yield put(doUserSignupSucceeded(result))
	} catch (error) {
		yield put(doUserSignupFailed(error))
	}
}

export default watchAll
