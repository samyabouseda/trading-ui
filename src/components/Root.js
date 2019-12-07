import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import {
	ConnectedLoginScreen,
	ConnectedSignupScreen,
} from '../containers'
import DashboardScreen from '../screens/DashboardScreen'

const Root = ({ store, history }) => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Route
				exact
				path="/signup"
				component={ConnectedSignupScreen}
			/>
			<Route
				exact
				path="/login"
				component={ConnectedLoginScreen}
			/>
			<Route
				exact
				path="/dashboard"
				component={DashboardScreen}
			/>
		</ConnectedRouter>
	</Provider>
)

export default Root
