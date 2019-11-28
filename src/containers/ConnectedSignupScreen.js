import { connect } from 'react-redux'
import SignupScreen from '../screens/SignupScreen'
import { doUserSignupFailure, doUserSignupRequest } from '../actions'

const getErrorMessage = state => state.user.errorMessage

const mapStateToProps = state => ({
	errorMessage: getErrorMessage(state),
})

const mapDispatchToProps = dispatch => ({
	onSubmit: (username, password) => {
		if (username !== '' && password !== '') {
			dispatch(doUserSignupRequest(username, password))
		} else {
			dispatch(
				doUserSignupFailure({
					message:
						'You must provide a username and a password',
				}),
			)
		}
	},
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignupScreen)
