import React from 'react'
import styles from './DashboardCard.module.css'
import Card from '../Card'

const DashboardCard = ({ title, children }) => {
	return <div className={styles['dashboard-card']}><Card><p className={styles.title}>{title}</p>{children}</Card></div>
}

export default DashboardCard
