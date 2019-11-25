import React from 'react'

const Input = ({ name, testid, type, placeholder, label, value }) => (
	<fieldset>
		<label htmlFor={name}>{label}</label>
		<input
			name={name}
			type={type}
			value={value}
			placeholder={placeholder}
			data-testid={testid}
		/>
	</fieldset>
)

export default Input
