import React from 'react'
import styles from './OrderBook.module.css'
import DashboardCard from '../DashboardCard'
import Table, { TableHeader, TableRow } from '../Table'

const OrderBook = ({ bids, asks, highestAsk, lowestBid }) => {
	return (
		<DashboardCard title={'Order Book'}>
			{_renderBids(bids)}
			{_renderSpread(highestAsk, lowestBid)}
			{_renderAsks(asks)}
		</DashboardCard>
	)
}

const _renderBids = bids => (
	<Table>
		<TableHeader headers={['Total', 'Size', 'Bid']} />
		{bids.map((bid, key) => (
			<TableRow
				key={key}
				valuesForEachColumn={[
					bid.volume * bid.limitPrice,
					bid.volume,
					bid.limitPrice,
				]}
			/>
		))}
	</Table>
)

const _renderAsks = asks => (
	<Table>
		<TableHeader headers={['Total', 'Size', 'Ask']} />
		{asks.map((ask, key) => (
			<TableRow
				key={key}
				valuesForEachColumn={[
					ask.volume * ask.limitPrice,
					ask.volume,
					ask.limitPrice,
				]}
			/>
		))}
	</Table>
)

const _renderSpread = (highestBid, lowestAsk) => (
	<div className={styles['spread-container']}>
		<p className={styles['spread-item']}>Spread</p>
		<p className={styles['spread-item']}>
			${Math.round((lowestAsk - highestBid) * 100) / 100}
		</p>
	</div>
)

export default OrderBook
