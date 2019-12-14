import React from 'react'

const DashboardScreen = ({ user }) => {
	return (
		<div data-testid="dashboard-screen">
			<h1>Dashboard</h1>
			<h2>Hi, {user.username}</h2>
		</div>
	)
}

export default DashboardScreen
