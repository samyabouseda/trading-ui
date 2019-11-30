import React from 'react'
// import PropTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import styles from './SignupScreen.module.css'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import LoggedOutHeader from '../../components/LoggedOutHeader'
import Screen from '../Screen'
import Dialog from '../../components/Dialog'

const SignupScreen = ({
	successMessage,
	user,
	dismiss,
	onSubmit,
}) => (
	<Screen>
		{successMessage && (
			<Dialog
				dismiss={dismiss}
				data-testid="signup-success-dialog"
			>
				<p data-testid="signup-success-message">
					{successMessage}
				</p>
				<Input
					testid="user-address-field"
					name="user-address"
					label="Address"
					type="text"
					value={user.address}
				/>
				<Input
					testid="user-private-key-field"
					name="user-private-key"
					label="Private key"
					type="text"
					value={user.privateKey}
				/>
			</Dialog>
		)}
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

const Form = ({ onSubmit, children }) => {
	//TODO: refactor handleSubmit
	const handleSubmit = event => {
		event.preventDefault()
		const elements = Object.values(event.target.elements)
		const inputs = elements.filter(e => e.localName === 'input')
		const arr = inputs.map(input => ({
			name: input.name,
			value: input.value,
		}))
		const data = arr.reduce((map, obj) => {
			map[obj.name] = obj.value
			return map
		}, {})
		onSubmit(data)
	}
	return (
		<div>
			<form data-testid="signup-form" onSubmit={handleSubmit}>
				{children}
			</form>
		</div>
	)
}

// SignupScreen.propTypes = {}

export default SignupScreen
