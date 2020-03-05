import { connect } from 'react-redux'
import { getUser, getInstruments } from '../reducers'
import { DashboardScreen } from '../screens'
import { doInstrumentSelect } from '../actions'

const mapStateToProps = state => ({
	user: getUser(state),
	instruments: getInstruments(state),
	currentPath: state.router.location.pathname,
})

const mapDispatchToProps = dispatch => ({
	onSelect: instrumentId => dispatch(doInstrumentSelect(instrumentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen)
