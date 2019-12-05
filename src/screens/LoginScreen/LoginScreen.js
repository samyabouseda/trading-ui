import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import styles from './LoginScreen.module.css'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import LoggedOutHeader from '../../components/LoggedOutHeader'

const LoginScreen = () => (
	<div className={styles['signup-screen']}>
		<LoggedOutHeader />
		<div
			className={styles['login-screen']}
			data-testid="login-screen"
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
			Fill in the form to access your account.
		</p>
		<Link to="/signup">
			<p className={styles.link}>Don't have an account yet?</p>
		</Link>
		<form data-testid="login-form">
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
			<Button color="primary">Login</Button>
		</form>
	</div>
)

export default LoginScreen
