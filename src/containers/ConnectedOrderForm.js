import { connect } from 'react-redux'
import OrderForm from '../components/OrderForm'
import {
	getAsks,
	getBids,
	getHighestBid,
	getLowestAsk,
} from '../reducers'

const mapStateToProps = state => ({
	bids: getBids(state),
	asks: getAsks(state),
	highestBid: getHighestBid(state),
	lowestAsk: getLowestAsk(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)
