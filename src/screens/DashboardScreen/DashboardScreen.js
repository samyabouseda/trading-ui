import React from 'react'
import Header from '../../components/LoggedInHeader'
import SideBar from '../../components/SideBar'
import InstrumentSelect from '../../components/InstrumentSelect'

const DashboardScreen = ({ user, instruments, onSelect }) => {
	return (
		<div data-testid="dashboard-screen">
			<Header>
				<InstrumentSelect instruments={instruments} onSelect={onSelect}/>
			</Header>
			<SideBar />
		</div>
	)
}

export default DashboardScreen
