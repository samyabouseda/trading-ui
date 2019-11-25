import React from 'react'
import styles from './Button.module.css'

const Button = ({ name, testid, onClick, color, children }) => {
	const classNames = `${styles.button} ${
		styles[`button--${color}`]
	}`
	return (
		<button
			className={classNames}
			name={name}
			data-testid={testid}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
