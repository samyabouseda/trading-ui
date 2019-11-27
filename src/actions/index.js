import { ActionTypes } from '../constants'

const doUserSignupRequested = (username, password) => ({
	type: ActionTypes.USER_SIGNUP_REQUESTED,
	username,
	password,
})

const doUserSignupSucceeded = result => ({
	type: ActionTypes.USER_SIGNUP_SUCCEEDED,
	result,
})

const doUserSignupFailed = error => ({
	type: ActionTypes.USER_SIGNUP_FAILED,
	error,
})

export {
	doUserSignupRequested,
	doUserSignupSucceeded,
	doUserSignupFailed,
}
