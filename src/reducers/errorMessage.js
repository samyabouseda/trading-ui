import { ActionTypes } from '../constants'

const errorMessage = (state = null, action) => {
	switch (action.type) {
		case ActionTypes.USER_SIGNUP_FAILURE:
			return applyUserSignupFailure(state, action)
		case ActionTypes.DIALOG_CLOSING:
			return null
		default:
			return state
	}
}

const applyUserSignupFailure = (state, action) => action.errorMessage

export default errorMessage

export const getErrorMessage = state => state.errorMessage
