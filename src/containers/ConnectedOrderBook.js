import { connect } from 'react-redux'
import OrderBook from '../components/OrderBook'
import {
	getAsks,
	getBids,
	getHighestAsk,
	getLowestBid,
} from '../reducers'

const mapStateToProps = state => ({
	bids: getBids(state),
	asks: getAsks(state),
	highestAsk: getHighestAsk(state),
	lowestBid: getLowestBid(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(OrderBook)
