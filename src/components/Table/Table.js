import React from 'react'
import PropTypes from 'prop-types'
import { TableHeader, TableRow } from './index'
import styles from './Table.module.css'

const Table = ({children}) => {
	return (
		<div>
			<table className={styles.table}>
				{children}
			</table>
		</div>
	)
}

Table.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.instanceOf(TableHeader),
		PropTypes.instanceOf(TableRow)
	]).isRequired
}
export default Table
