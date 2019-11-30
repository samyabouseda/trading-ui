import React from 'react'
import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import styles from './SignupScreen.module.css'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import LoggedOutHeader from '../../components/LoggedOutHeader'
import Screen from '../Screen'
import ErrorDialog from '../../components/ErrorDialog'
import SuccessSignupDialog from '../../components/SuccessSignupDialog'
import Form from '../../components/Form'

const SignupScreen = ({
	successMessage,
	errorMessage,
	user,
	onSubmit,
}) => (
	<Screen>
		{successMessage && (
			<SuccessSignupDialog
				message={successMessage}
				user={user}
			/>
		)}
		{errorMessage && <ErrorDialog message={errorMessage} />}
		<LoggedOutHeader />
		<div
			className={styles['login-screen']}
			data-testid="signup-screen"
		>
			<Card>
				<p className={styles.title}>SIGNUP</p>
				<p className={styles.guidelines}>
					Fill in the form to create your account.
				</p>
				<Link to="/login">
					<p className={styles.link}>Already registered?</p>
				</Link>
				<Form onSubmit={onSubmit}>
					<Input
						name="username"
						label="username"
						type="text"
						placeholder="John"
					/>
					<Input
						name="password"
						label="password"
						type="password"
						placeholder="Password"
					/>
					<Button type="submit" color="primary">
						Create account
					</Button>
				</Form>
			</Card>
		</div>
	</Screen>
)

SignupScreen.propTypes = {
	successMessage: PropTypes.string,
	errorMessage: PropTypes.string,
	user: PropTypes.shape({
		username: PropTypes.string,
		address: PropTypes.string,
		privateKey: PropTypes.string,
	}),
	onSubmit: PropTypes.func.isRequired,
}

export default SignupScreen
