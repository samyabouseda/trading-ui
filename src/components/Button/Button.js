import React from 'react'

const Button = ({ name, testid, onClick, children }) => (
	<button name={name} data-testid={testid} onClick={onClick}>
		{children}
	</button>
)

export default Button
