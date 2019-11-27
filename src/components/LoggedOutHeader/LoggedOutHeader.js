import React from 'react'
import styles from './LoggedOutHeader.module.css'

const LoggedOutHeader = () => {
	return (
		<header className={styles['header']}>
			<h1 className={styles['title']}>Dextr.</h1>
			<h2 className={styles['catch-phrase']}>
				Decentralized stock exchange for traders.
			</h2>
		</header>
	)
}

export default LoggedOutHeader
