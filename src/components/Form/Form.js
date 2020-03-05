import React from 'react'
import styles from './Form.module.css'

const Form = ({ onSubmit, submitParams = {}, testid, children }) => {
	const handleSubmit = event => {
		event.preventDefault()
		const elements = Object.values(event.target.elements)
		const inputs = elements.filter(e => e.localName === 'input')
		const inputsKeyValuePairs = getKeyValuePairsFrom(inputs)
		const data = constructDataObjectWith(inputsKeyValuePairs)
		onSubmit(data, submitParams)
	}

	const getKeyValuePairsFrom = inputs =>
		inputs.map(input => ({
			name: input.name,
			value: input.value,
		}))

	const constructDataObjectWith = inputsKeyValuePairs =>
		inputsKeyValuePairs.reduce((map, obj) => {
			map[obj.name] = obj.value
			return map
		}, {})

	return (
		<div>
			<form className={styles.form} data-testid={testid} onSubmit={handleSubmit}>
				{children}
			</form>
		</div>
	)
}

export default Form
