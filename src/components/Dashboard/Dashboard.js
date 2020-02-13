import React from 'react'
import styles from './Dashboard.module.css'

const Dashboard = ({ children }) => {
	return (
		<div className={styles.dashboard}>
			{children}
		</div>
	)
}

export default Dashboard
