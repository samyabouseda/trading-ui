import React from 'react'
import Header from '../../components/LoggedInHeader/LoggedInHeader'
import SideBar from '../../components/SideBar/Sidebar'
import Dashboard from '../../components/Dashboard'
import DashboardCard from '../../components/DashboardCard'
import BuyFiatForm from '../../components/BuyFiatForm'
import Portfolio from '../../components/Portfolio'
import styles from './ProfileScreen.module.css'

const ProfileScreen = ({ user, currentPath }) => {
	return (
		<div data-testid="dashboard-screen">
			<Header>
				<p className={styles.title}>Profile</p>
				<p className={styles["sub-title"]}>Manage your profile information</p>
			</Header>
			<SideBar currentPath={currentPath}/>
			<Dashboard>
					<BuyFiatForm/>
					<Portfolio user={user} />
			</Dashboard>
		</div>
	)
}

export default ProfileScreen
