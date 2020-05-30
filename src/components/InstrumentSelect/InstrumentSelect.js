import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import styles from './InstrumentSelect.module.css'

const customStyles = {
	container: (provided, state) => ({
		...provided,
		width: 400,
	}),
	option: (provided, state) => ({
		...provided,
		borderBottom: '1px dotted #ccc',
		color: state.isSelected ? 'white' : 'blue',
		padding: 20,
	}),
	control: (provided, state) => ({
		// none of react-select's styles are passed to <Control />
		// width: 200,
		...provided,
		backgroundColor: 'transparent',
		border: 'none',
	}),
	singleValue: (provided, state) => {
		const opacity = state.isDisabled ? 0.5 : 1
		const transition = 'opacity 300ms'
		return {
			...provided,
			opacity,
			transition,
			fontWeight: 700,
			color: 'white',
		}
	},
	input: (provided, state) => {
		return { color: 'white', fontWeight: 700 }
	},
}

const InstrumentSelect = ({ instruments, onSelect }) => {
	const _instruments = instruments.map(instrument => ({
		label: instrument.name,
		value: instrument.name,
		id: instrument._id,
	}))

	const handleChange = selectedOption => {
		console.log(selectedOption)
		const instrumentId = selectedOption.id
		onSelect(instrumentId)
	}
	return (
		<div>
			<Select
				options={_instruments}
				defaultValue={_instruments[0]}
				styles={customStyles}
				onChange={handleChange}
			/>
			<p className={styles.label}>Select asset</p>
		</div>
	)
}

InstrumentSelect.propTypes = {
	instruments: PropTypes.array.isRequired,
	onSelect: PropTypes.func.isRequired,
}

export default InstrumentSelect
