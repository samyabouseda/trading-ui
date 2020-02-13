import React from 'react'
import Header from '../../components/LoggedInHeader'
import SideBar from '../../components/SideBar'
import InstrumentSelect from '../../components/InstrumentSelect'
import Dashboard from '../../components/Dashboard'
import OrderBook from '../../components/OrderBook'

const DashboardScreen = ({ user, instruments, onSelect }) => {
	return (
		<div data-testid="dashboard-screen">
			<Header>
				<InstrumentSelect instruments={instruments} onSelect={onSelect}/>
			</Header>
			<Dashboard>
				<OrderBook/>
			</Dashboard>
			<SideBar />
		</div>
	)
}

export default DashboardScreen
