import { ActionTypes } from '../constants'

const INITIAL_STATE = {
	instruments: [],
	selectedInstrumentId: null,
}

const instruments = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.INSTRUMENT_SELECT : return applyInstrumentSelected(state, action)
		case ActionTypes.INSTRUMENTS_FETCH_SUCCESS: return applyInstrumentsFetchSucceeded(state, action)
		default : return state
	}
}

const applyInstrumentSelected = (state, action) => ({
	...state,
	selectedInstrumentId: action.instrumentId,
})

const applyInstrumentsFetchSucceeded = (state, action) => ({
	...state,
	instruments: action.response.data.instruments
})

export const getInstruments = state => {
	return state.instruments.instruments
}

export default instruments

