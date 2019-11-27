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
			<div className={styles['login-screen']}>
				<Card>
					<div>
						<p className={styles.title}>
							{isSignup ? 'SIGNUP' : 'LOGIN'}
						</p>
						<p className={styles.guidelines}>
							Fill in the form to{' '}
							{isSignup ? 'create' : 'access'} your
							account.
						</p>
						<p
							className={styles.link}
							onClick={this.toggleSignupLoginView}
						>
							{isSignup
								? 'Already registered?'
								: "Don't have an account yet?"}
						</p>
						<form>
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
							<Button color="primary">
								{isSignup
									? 'Create account'
									: 'Login'}
							</Button>
						</form>
					</div>
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

export default LoginScreen
