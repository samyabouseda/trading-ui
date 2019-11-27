import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { SignupScreen, LoginScreen } from '../screens'

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Route exact path="/signup" component={SignupScreen} />
			<Route exact path="/login" component={LoginScreen} />
		</Router>
	</Provider>
)

export default Root
