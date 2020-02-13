import React from 'react'
import Header from '../../components/LoggedInHeader'
import SideBar from '../../components/SideBar'
import InstrumentSelect from '../../components/InstrumentSelect'
import Dashboard from '../../components/Dashboard'

const DashboardScreen = ({ user, instruments, onSelect }) => {
	return (
		<div data-testid="dashboard-screen">
			<Header>
				<InstrumentSelect instruments={instruments} onSelect={onSelect}/>
			</Header>
			<Dashboard>
				<h1>Order Book</h1>
				<h2>Fetch the bids and asks for the selected instrument</h2>
			</Dashboard>
			<SideBar />
		</div>
	)
}

export default DashboardScreen
