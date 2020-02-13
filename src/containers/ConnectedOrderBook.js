import { connect } from 'react-redux'
import OrderBook from '../components/OrderBook'
import { getAsks, getBids, getHighestBid, getLowestAsk } from '../reducers'

const mapStateToProps = state => ({
	bids: getBids(state),
	asks: getAsks(state),
	highestBid: getHighestBid(state),
	lowestAsk: getLowestAsk(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(OrderBook)
