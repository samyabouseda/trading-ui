import React from 'react'
import PropTypes from 'prop-types'
import styles from './Table.module.css'

const TableHeader = ({ headers }) => {
	return (
		<thead>
		<tr className={styles.header}>
			{headers.map((header, key) => <th className={styles['header-item']} key={key}>{header}</th>)}
		</tr>
		</thead>
	)
}

TableHeader.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.string)
}

export default TableHeader
