import React from 'react'
import Header from '../../components/LoggedInHeader/LoggedInHeader'
import SideBar from '../../components/SideBar/Sidebar'

const ProfileScreen = ({ user, currentPath }) => {
	return (
		<div data-testid="dashboard-screen">
			<Header>
				hello, {user.username}
			</Header>
			<SideBar currentPath={currentPath}/>
		</div>
	)
}

export default ProfileScreen
