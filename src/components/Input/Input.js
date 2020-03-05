import React, { Component } from 'react'
import styles from './Input.module.css'

class Input extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: this.props.value || ""
		}
	}

	render() {
		const {
			name,
			testid,
			type,
			placeholder,
			label,
			value,
			readOnly = false,
		} = this.props
		return (
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
					onChange={this.handleChange}
				/>
			</fieldset>
		)
	}

	handleChange = (e) => {
		const { onChange } = this.props
		this.setState({ value: e.target.value })
		if (onChange) onChange(e.target.value)
	}
}

export default Input
