import { connect } from 'react-redux'
import SignupScreen from '../screens/SignupScreen'
import { doUserSignupFailure, doUserSignupRequest } from '../actions'
import {
	getErrorMessage,
	getSuccessMessage,
	getUser,
} from '../reducers'

const mapStateToProps = state => ({
	successMessage: getSuccessMessage(state),
	errorMessage: getErrorMessage(state),
	user: getUser(state),
})

const mapDispatchToProps = dispatch => ({
	onSubmit: ({ username, password }) => {
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
