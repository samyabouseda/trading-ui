import React from 'react'
import styles from './Table.module.css'

const TableRow = ({ valuesForEachColumn }) => {
	return (
		<tr className={styles.row}>
			{valuesForEachColumn.map(value => <td className={styles['row-item']}>{value}</td>)}
		</tr>
	)
}

export default TableRow
