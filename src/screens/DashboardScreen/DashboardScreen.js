import React from 'react'
import Header from '../../components/LoggedInHeader'
import SideBar from '../../components/SideBar'
import InstrumentSelect from '../../components/InstrumentSelect'
import Dashboard from '../../components/Dashboard'
import ConnectedOrderBook from '../../containers/ConnectedOrderBook'
import Portfolio from '../../components/Portfolio/Portfolio'

const DashboardScreen = ({ user, instruments, onSelect, currentPath }) => {
	return (
		<div data-testid="dashboard-screen">
			<Header>
				<InstrumentSelect instruments={instruments} onSelect={onSelect}/>
			</Header>
			<Dashboard>
				<ConnectedOrderBook/>
				<Portfolio user={user} />
			</Dashboard>
			<SideBar currentPath={currentPath} />
		</div>
	)
}

export default DashboardScreen
