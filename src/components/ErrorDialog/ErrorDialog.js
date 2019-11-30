import React from 'react'
import Dialog from '../Dialog'
import warningIcon from './warning-icon.png'
import styles from './Error.module.css'

const ErrorDialog = ({ message }) => (
	<Dialog>
		<div>
			<img
				className={styles.icon}
				src={warningIcon}
				alt="error icon"
			/>
			<p className={styles.title}>Something went wrong.</p>
			<p className={styles.message}>{message}</p>
		</div>
	</Dialog>
)

export default ErrorDialog
