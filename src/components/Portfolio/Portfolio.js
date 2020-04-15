import React from 'react'
import styles from './Portfolio.module.css'
import DashboardCard from '../DashboardCard'
import Table, { TableHeader, TableRow } from '../Table'

const Portfolio = ({ user }) => {
	return (
		<DashboardCard title={"Portfolio"}>
			{console.log(user)}
			<header className={styles.header}>
				<h2 className={styles.header__total}>${user.totalDeposited}</h2>
				<p className={styles.label}>Tradable limit (amount deposited)</p>
				<h2 className={styles.header__total}>${"17570.43"}</h2>
				<p className={styles.label}>Total balance</p>
			</header>
			{_renderAssets(user.balances)}
		</DashboardCard>
	)
}

const _renderAssets = assets => (
	<Table>
		<TableHeader headers={['Asset', 'Qty.', 'Price', 'Total']} />
		{assets.map((asset, key) => <TableRow key={key} valuesForEachColumn={[asset.name, asset.amount, 1, (asset.amount * 1)]} />)}
	</Table>
)

export default Portfolio
