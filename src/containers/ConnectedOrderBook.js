import { connect } from 'react-redux'
import OrderBook from '../components/OrderBook'
import {
	getAsks,
	getBids,
	getHighestAsk,
	getLowestBid,
	getSelectedInstrumentId,
} from '../reducers'
import { doInstrumentSelect } from '../actions'

const mapStateToProps = state => ({
	bids: getBids(state),
	asks: getAsks(state),
	highestAsk: getHighestAsk(state),
	lowestBid: getLowestBid(state),
	instrumentId: getSelectedInstrumentId(state),
})

const mapDispatchToProps = dispatch => ({
	dispatchFetchRequest: instrumentId =>
		dispatch(doInstrumentSelect(instrumentId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderBook)
