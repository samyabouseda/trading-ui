import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import user from './user'
import errorMessage from './errorMessage'

const createRootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		user,
		errorMessage,
	})

export default createRootReducer

export { getErrorMessage } from './errorMessage'
export { getUser, getSuccessMessage } from './user'
