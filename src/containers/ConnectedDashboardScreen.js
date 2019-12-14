import { connect } from 'react-redux'
import { getUser } from '../reducers'
import { DashboardScreen } from '../screens'

const mapStateToProps = state => ({
	user: getUser(state),
})

export default connect(mapStateToProps, null)(DashboardScreen)
