import { connect } from 'react-redux'
import { getUser } from '../reducers'
import { ProfileScreen } from '../screens'

const mapStateToProps = state => ({
	user: getUser(state),
	currentPath: state.router.location.pathname,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
