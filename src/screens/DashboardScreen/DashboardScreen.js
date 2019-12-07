import React from 'react'

const DashboardScreen = props => {
	return (
		<div data-testid="dashboard-screen">
			<h1 onClick={() => props.history.push('/signup')}>
				Dashboard
			</h1>
		</div>
	)
}

export default DashboardScreen
