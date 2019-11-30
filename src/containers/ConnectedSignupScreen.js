import { connect } from 'react-redux'
import SignupScreen from '../screens/SignupScreen'
import {
	doCloseErrorWindow,
	doUserSignupFailure,
	doUserSignupRequest,
} from '../actions'
import { getSuccessMessage, getUser } from '../reducers'

const mapStateToProps = state => ({
	successMessage: getSuccessMessage(state),
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
	dismiss: () => dispatch(doCloseErrorWindow()),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignupScreen)
