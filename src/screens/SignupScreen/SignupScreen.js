import React from 'react'
// import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import styles from './SignupScreen.module.css'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import LoggedOutHeader from '../../components/LoggedOutHeader'

const SignupScreen = props => (
	<div className={styles['signup-screen']}>
		<LoggedOutHeader />
		<div
			className={styles['login-screen']}
			data-testid="signup-screen"
		>
			<Card>
				<SignupForm />
			</Card>
		</div>
	</div>
)

const SignupForm = () => (
	<div>
		<p className={styles.title}>SIGNUP</p>
		<p className={styles.guidelines}>
			Fill in the form to create your account.
		</p>
		<Link to="/login">
			<p className={styles.link}>Already registered?</p>
		</Link>
		<form data-testid="signup-form">
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
			<Button color="primary">Create account</Button>
		</form>
	</div>
)

// SignupScreen.propTypes = {}

export default SignupScreen
