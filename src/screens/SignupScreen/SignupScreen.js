import React from 'react'
// import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import styles from './SignupScreen.module.css'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import LoggedOutHeader from '../../components/LoggedOutHeader'
import Screen from '../Screen'

const SignupScreen = ({ onSubmit }) => (
	<Screen>
		<LoggedOutHeader />
		<div
			className={styles['login-screen']}
			data-testid="signup-screen"
		>
			<Card>
				<SignupForm onSubmit={onSubmit} />
			</Card>
		</div>
	</Screen>
)

const SignupForm = ({ onSubmit }) => {
	const handleSubmit = event => {
		event.preventDefault()
		const username = event.target.elements.username.value
		const password = event.target.elements.password.value
		onSubmit(username, password)
	}
	return (
		<div>
			<p className={styles.title}>SIGNUP</p>
			<p className={styles.guidelines}>
				Fill in the form to create your account.
			</p>
			<Link to="/login">
				<p className={styles.link}>Already registered?</p>
			</Link>
			<form data-testid="signup-form" onSubmit={handleSubmit}>
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
			</form>
		</div>
	)
}

// SignupScreen.propTypes = {}

export default SignupScreen
