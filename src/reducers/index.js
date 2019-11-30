import { combineReducers } from 'redux'
import user from './user'
import errorMessage from './errorMessage'

const rootReducer = combineReducers({
	user,
	errorMessage,
})

export default rootReducer

export { getErrorMessage } from './errorMessage'
export { getUser, getSuccessMessage } from './user'
