import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import './index.css'
import store from './store'
import Root from './components/Root'

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root'),
)

if (module.hot) {
	module.hot.accept()
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
