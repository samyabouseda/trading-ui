import { ActionTypes } from '../constants'

const INITIAL_STATE = {
	instruments: [],
	selectedInstrumentId: null,
	selectedInstrument: {
		bids: [],
		asks: [],
		highestBid: 0,
		lowestAsk: 0,
	},
}

const orders = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.PLACE_ORDER_SUCCESS:
			return applyPlaceOrderSucceeded(state, action)
		case ActionTypes.PLACE_ORDER_FAILURE:
			return state
		default:
			return state
	}
}

const applyPlaceOrderSucceeded = (state, action) => ({
	...state,
	instruments: action.response.data.instruments,
})

// GETTERS
export const getInstruments = state => {
	return state.instruments.instruments
}

export default orders
