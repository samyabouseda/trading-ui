import React from 'react'
import Header from '../../components/LoggedInHeader/LoggedInHeader'
import SideBar from '../../components/SideBar/Sidebar'
import Dashboard from '../../components/Dashboard'
import DashboardCard from '../../components/DashboardCard'
import BuyFiatForm from '../../components/BuyFiatForm'

const ProfileScreen = ({ user, currentPath }) => {
	return (
		<div data-testid="dashboard-screen">
			<Header>
				<p>Profile</p>
				<p>Manage your profile information</p>
			</Header>
			<SideBar currentPath={currentPath}/>
			<Dashboard>
				<DashboardCard title="Buy fiat">
					<BuyFiatForm/>
				</DashboardCard>
			</Dashboard>
		</div>
	)
}

export default ProfileScreen
