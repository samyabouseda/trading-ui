import React from 'react'
import styles from './Portfolio.module.css'
import DashboardCard from '../DashboardCard'
import Table, { TableHeader, TableRow } from '../Table'
import { getAsks, getBids, getHighestBid, getLowestAsk, getUser } from '../../reducers'
import { connect } from 'react-redux'

const assets = [
	{ symbol: "USDX", name: "Dextr Dollar", amount: "231" },
	{ symbol: "AAPL", name: "Apple Inc.", amount: "231" },
	{ symbol: "MSFT", name: "Microsoft Corp.", amount: "231" },
	{ symbol: "TSLA", name: "Tesla Inc.", amount: "231" },
]

const Portfolio = ({ user }) => {
	return (
		<DashboardCard title={"Portfolio"}>
			<header className={styles.header}>
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

const mapStateToProps = state => ({
	// user: getUser(state),
	bids: getBids(state),
	asks: getAsks(state),
	highestBid: getHighestBid(state),
	lowestAsk: getLowestAsk(state)
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio)
