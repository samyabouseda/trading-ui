import React from 'react'
import { Provider } from 'react-redux'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
} from 'react-router-dom'
import {
	ConnectedLoginScreen,
	ConnectedSignupScreen,
} from '../containers'

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
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
			<Redirect from="/" exact to="/signup" />
		</Router>
	</Provider>
)

export default Root
