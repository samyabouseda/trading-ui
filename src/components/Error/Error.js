import React from 'react'
import Dialog from '../Dialog'
import Button from '../Button'
import warningIcon from './warning-icon.png'
import styles from './Error.module.css'

const Error = ({ message, buttonText, dismiss }) => (
	<Dialog>
		<div>
			<img
				className={styles.icon}
				src={warningIcon}
				alt="error icon"
			/>
			<p className={styles.title}>Something went wrong.</p>
			<p className={styles.message}>{message}</p>
			<Button color="primary" onClick={dismiss}>
				{'Dismiss'}
			</Button>
		</div>
	</Dialog>
)

export default Error
