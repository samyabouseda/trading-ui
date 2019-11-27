import { connect } from 'react-redux'
import SignupScreen from '../screens/SignupScreen'
import { doUserSignupRequested } from '../actions'

const mapStateToProps = state => ({
	// TODO: fix state shape -> remove the extra userReducer
	message: state.userReducer.signupFailedMessage, //.signupFailedMessage,
})

const mapDispatchToProps = dispatch => ({
	onSubmit: (username, password) =>
		dispatch(doUserSignupRequested(username, password)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignupScreen)
