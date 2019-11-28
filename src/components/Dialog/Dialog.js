import React from 'react'
import styles from './Dialog.module.css'
import Card from '../Card'

const Dialog = ({ children }) => {
	return (
		<div className={styles['dialog-background']}>
			<div className={styles['dialog-container']}>
				<Card>{children}</Card>
			</div>
		</div>
	)
}

export default Dialog
