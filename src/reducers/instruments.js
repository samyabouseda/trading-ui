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

const instruments = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.INSTRUMENT_SELECT:
			return applyInstrumentSelected(state, action)
		case ActionTypes.INSTRUMENTS_FETCH_SUCCESS:
			return applyInstrumentsFetchSucceeded(state, action)
		case ActionTypes.INSTRUMENT_BIDS_ASKS_PRICE_FETCH_SUCCESS:
			return applyInstrumentBidsAsksFetchSucceeded(
				state,
				action,
			)
		default:
			return state
	}
}

const applyInstrumentSelected = (state, action) => ({
	...state,
	selectedInstrumentId: action.instrumentId,
})

const applyInstrumentsFetchSucceeded = (state, action) => ({
	...state,
	instruments: action.response.data.instruments,
})

const applyInstrumentBidsAsksFetchSucceeded = (state, action) => {
	return {
		...state,
		selectedInstrument: action.response.data.instrument,
	}
}

// GETTERS
export const getInstruments = state => {
	return state.instruments.instruments
}

export const getInstrument = state => {
	// state.instruments.instruments.map(instrument => {
	// 	if (
	// 		instrument.id === state.instruments.selectedInstrumentId
	// 	) {
	// 		return instrument
	// 	}
	// })
	return {
		...state.instruments.instruments[0],
		highestAsk: state.instruments.selectedInstrument.highestAsk,
		lowestBid: state.instruments.selectedInstrument.lowestBid,
	}
}

export const getSelectedInstrument = state =>
	state.instruments.selectedInstrument

export const getSelectedInstrumentId = state =>
	state.instruments.selectedInstrumentId

export const getBids = state => getSelectedInstrument(state).bids

export const getAsks = state => getSelectedInstrument(state).asks

export const getHighestAsk = state =>
	getSelectedInstrument(state).highestAsk

export const getLowestBid = state =>
	getSelectedInstrument(state).lowestBid

export default instruments
