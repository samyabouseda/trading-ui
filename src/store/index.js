import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'

const logger = createLogger()
const saga = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(saga, logger)
)

export default store