import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers'
import rootSaga from '../sagas'

const logger = createLogger()
const saga = createSagaMiddleware()

export const history = createBrowserHistory()

const store = createStore(
	createRootReducer(history), // root reducer with router state
	compose(applyMiddleware(routerMiddleware(history), saga, logger)),
)

saga.run(rootSaga)

export default store
