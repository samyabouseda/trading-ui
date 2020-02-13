import { ActionTypes } from '../constants'

const INITIAL_STATE = {
	instruments: [
		{ value: 'chocolate', label: 'Apple Inc.', id: '001' },
		{ value: 'strawberry', label: 'Strawberry', id: '002' },
		{ value: 'vanilla', label: 'Vanilla', id: '003' }
	],
	selectedInstrumentId: null,
}

const instruments = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.INSTRUMENT_SELECT : return applyInstrumentSelected(state, action)
		default : return state
	}
}

const applyInstrumentSelected = (state, action) => ({
	...state,
	selectedInstrumentId: action.instrumentId,
})

export const getInstruments = state => {
	return state.instruments.instruments
}

export default instruments

