import React from 'react'
import styles from './LoggedInHeader.module.css'

const LoggedInHeader = ({ children }) => {
	return (
		<Header testid={"dashboard-screen"}>
			{children}
		</Header>
	)
}

const Header = ({ children, testid }) => (
	<header className={styles.header} data-testid={testid}>
		{children}
	</header>
)

export default LoggedInHeader
