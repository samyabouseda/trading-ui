import { takeEvery, all, call, put } from 'redux-saga/effects'
import { ActionTypes } from '../constants'
import { doUserSignupSuccess, doUserSignupFailure } from '../actions'

function* watchAll() {
	yield all([
		takeEvery(ActionTypes.USER_SIGNUP_REQUEST, requestUserSignup),
	])
}

function* requestUserSignup() {
	try {
		const result = yield call()
		yield put(doUserSignupSuccess(result))
	} catch (error) {
		yield put(doUserSignupFailure(error))
	}
}

export default watchAll
