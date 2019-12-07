import React from 'react'
import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import styles from './SignupScreen.module.css'
import Screen from '../Screen'

import {
	Button,
	Card,
	Input,
	Form,
	LoggedOutHeader,
	SuccessSignupDialog,
	ErrorDialog,
} from '../../components'

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
			className={styles['signup-screen']}
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
				<Form onSubmit={onSubmit} testid="signup-form">
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
