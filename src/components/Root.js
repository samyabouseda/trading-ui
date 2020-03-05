import React from 'react'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import {
	ConnectedLoginScreen,
	ConnectedSignupScreen,
	ConnectedDashboardScreen,
	ConnectedProfileScreen
} from '../containers'

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
					component={ConnectedDashboardScreen}
				/>
				<Route
					exact
					path="/profile"
					component={ConnectedProfileScreen}
				/>
				<Redirect exact from="/" to="/signup" />
			</Switch>
		</ConnectedRouter>
	</Provider>
)

export default Root
