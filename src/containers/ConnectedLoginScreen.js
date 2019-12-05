import { connect } from 'react-redux'
import { doUserLoginFailure, doUserLoginRequest } from '../actions'
import { getErrorMessage, getUser } from '../reducers'
import { LoginScreen } from '../screens'

const mapStateToProps = state => ({
	errorMessage: getErrorMessage(state),
	user: getUser(state),
})

const mapDispatchToProps = dispatch => ({
	onSubmit: ({ username, privateKey }) => {
		if (username !== '' && privateKey !== '') {
			dispatch(doUserLoginRequest(username, privateKey))
		} else {
			dispatch(
				doUserLoginFailure({
					message:
						'You must provide a username and a private key',
				}),
			)
		}
	},
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(LoginScreen)
