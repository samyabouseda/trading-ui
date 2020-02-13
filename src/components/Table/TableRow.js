import React from 'react'
import styles from './Table.module.css'

const TableRow = ({ valuesForEachColumn }) => {
	return (
		<tbody>
		<tr className={styles.row}>
			{valuesForEachColumn.map((value, key) => <td key={key} className={styles['row-item']}>{value}</td>)}
		</tr>
		</tbody>
	)
}

export default TableRow
