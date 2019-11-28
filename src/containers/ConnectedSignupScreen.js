import { connect } from 'react-redux'
import SignupScreen from '../screens/SignupScreen'
import { doUserSignupRequest } from '../actions'

const getErrorMessage = state => state.user.errorMessage

const mapStateToProps = state => ({
	errorMessage: getErrorMessage(state),
})

const mapDispatchToProps = dispatch => ({
	onSubmit: (username, password) =>
		dispatch(doUserSignupRequest(username, password)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignupScreen)
