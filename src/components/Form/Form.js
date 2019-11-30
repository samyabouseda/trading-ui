import React from 'react'

const Form = ({ onSubmit, children }) => {
	//TODO: refactor handleSubmit
	const handleSubmit = event => {
		event.preventDefault()
		const elements = Object.values(event.target.elements)
		const inputs = elements.filter(e => e.localName === 'input')
		const arr = inputs.map(input => ({
			name: input.name,
			value: input.value,
		}))
		const data = arr.reduce((map, obj) => {
			map[obj.name] = obj.value
			return map
		}, {})
		onSubmit(data)
	}

	return (
		<div>
			<form data-testid="signup-form" onSubmit={handleSubmit}>
				{children}
			</form>
		</div>
	)
}

export default Form
