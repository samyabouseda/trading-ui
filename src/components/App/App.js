import React from 'react'
import styles from './App.module.css'
import LoginScreen from '../LoginScreen'

function App() {
	return (
		<div className={styles.app}>
			<header className={styles['app__header']}>
				<h1 className={styles.title}>Dextr.</h1>
				<h2 className={styles['catch-phrase']}>
					Decentralized stock exchange for traders.
				</h2>
			</header>
			<LoginScreen />
		</div>
	)
}

export default App
