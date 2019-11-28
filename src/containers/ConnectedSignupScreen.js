import { connect } from 'react-redux'
import SignupScreen from '../screens/SignupScreen'
import { doUserSignupFailure, doUserSignupRequest } from '../actions'

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

export default connect(null, mapDispatchToProps)(SignupScreen)
