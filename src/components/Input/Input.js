import React from 'react'
import styles from './Input.module.css'

const Input = ({
	name,
	testid,
	type,
	placeholder,
	label,
	value,
	readOnly = false,
}) => (
	<fieldset className={styles.fieldset}>
		<label className={styles.label} htmlFor={name}>
			{label}
		</label>
		<input
			readOnly={readOnly}
			name={name}
			type={type}
			value={value}
			placeholder={placeholder}
			data-testid={testid}
			className={styles.input}
		/>
	</fieldset>
)

export default Input
