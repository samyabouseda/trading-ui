import React from 'react'
import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import styles from './LoginScreen.module.css'
import Screen from '../Screen'

import {
	Button,
	Card,
	Input,
	Form,
	LoggedOutHeader,
	ErrorDialog,
} from '../../components'

const LoginScreen = ({ errorMessage, onSubmit }) => (
	<Screen>
		{errorMessage && <ErrorDialog message={errorMessage} />}
		<LoggedOutHeader />
		<div
			className={styles['login-screen']}
			data-testid="login-screen"
		>
			<Card>
				<p className={styles.title}>LOGIN</p>
				<p className={styles.guidelines}>
					Fill in the form to access your account.
				</p>
				<Link to="/signup">
					<p className={styles.link}>
						Don't have an account yet?
					</p>
				</Link>
				<Form onSubmit={onSubmit} testid="login-form">
					<Input
						name="username"
						label="username"
						type="text"
						placeholder="John"
					/>
					<Input
						name="privateKey"
						label="Private Key"
						type="text"
						placeholder="0xthisShouldBeAVeryLongString"
					/>
					<Button type="submit" color="primary">
						Login
					</Button>
				</Form>
			</Card>
		</div>
	</Screen>
)

LoginScreen.propTypes = {
	errorMessage: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
}

export default LoginScreen
