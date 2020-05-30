import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import user from './user'
import errorMessage from './errorMessage'
import instruments from './instruments'

const createRootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		user,
		errorMessage,
		instruments,
	})

export default createRootReducer

export { getErrorMessage } from './errorMessage'
export { getUser, getSuccessMessage } from './user'
export {
	getInstruments,
	getInstrument,
	getSelectedInstrument,
	getAsks,
	getBids,
	getHighestBid,
	getLowestAsk,
} from './instruments'
