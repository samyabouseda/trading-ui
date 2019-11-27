import React, { Component } from 'react'
import Input from '../Input'
import Button from '../Button'
import Card from '../Card'
import styles from './LoginScreen.module.css'

class LoginScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isSignup: 'false',
		}
	}

	render() {
		const { isSignup } = this.state
		return (
			<div
				className={styles['login-screen']}
				data-testid="login-screen"
			>
				<Card>
					{isSignup && (
						<SignupForm
							toggleSignupLoginView={
								this.toggleSignupLoginView
							}
						/>
					)}
					{!isSignup && (
						<LoginForm
							toggleSignupLoginView={
								this.toggleSignupLoginView
							}
						/>
					)}
				</Card>
			</div>
		)
	}

	toggleSignupLoginView = () => {
		this.setState(prevState => ({
			isSignup: !prevState.isSignup,
		}))
	}
}

const SignupForm = ({ toggleSignupLoginView }) => (
	<div>
		<p className={styles.title}>SIGNUP</p>
		<p className={styles.guidelines}>
			Fill in the form to create your account.
		</p>
		<p className={styles.link} onClick={toggleSignupLoginView}>
			Already registered?
		</p>
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

const LoginForm = ({ toggleSignupLoginView }) => (
	<div>
		<p className={styles.title}>LOGIN</p>
		<p className={styles.guidelines}>
			Fill in the form to access your account.
		</p>
		<p className={styles.link} onClick={toggleSignupLoginView}>
			Don't have an account yet?
		</p>
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
