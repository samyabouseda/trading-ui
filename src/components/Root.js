import React from 'react'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import {
	ConnectedLoginScreen,
	ConnectedSignupScreen,
} from '../containers'
import DashboardScreen from '../screens/DashboardScreen'

const Root = ({ store, history }) => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
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
				<Redirect exact from="/" to="/signup" />
			</Switch>
		</ConnectedRouter>
	</Provider>
)

export default Root
