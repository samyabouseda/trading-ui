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
						<p>{isSignup ? 'SIGNUP' : 'LOGIN'}</p>
						<p>
							Fill in the form to{' '}
							{isSignup ? 'create' : 'access'} your
							account.
						</p>
						<button onClick={this.toggleSignupLoginView}>
							{isSignup
								? 'Already registered?'
								: "Don't have an account yet?"}
						</button>
						<form>
							<Input
								name="username"
								label="username"
								type="text"
								placeholder="Bob"
							/>
							<Input
								name="password"
								label="password"
								type="password"
							/>
							<Button>
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
