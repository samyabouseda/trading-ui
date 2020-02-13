import React from 'react'
import styles from './OrderBook.module.css'
import DashboardCard from '../DashboardCard'
import Table, { TableHeader, TableRow } from '../Table'

const bids = [
	{ price: 9.25, volume: 100 },
	{ price: 10.45, volume: 230 },
	{ price: 11.02, volume: 210 },
	{ price: 12.51, volume: 50 },
]

const asks = [
	{ price: 13.25, volume: 100 },
	{ price: 13.45, volume: 230 },
	{ price: 14.02, volume: 210 },
	{ price: 15.51, volume: 50 },
]

const highestBid = { price: 12.51, volume: 50 }

const lowestAsk = { price: 13.25, volume: 100 }

const OrderBook = (props) => {
	return (
			<DashboardCard title={"Order Book"}>
				{_renderBids(bids)}
				{_renderSpread(highestBid.price, lowestAsk.price)}
				{_renderAsks(asks)}
			</DashboardCard>
	)
}

const _renderBids = bids => (
	<Table>
		<TableHeader headers={['Total', 'Size', 'Bid']} />
		{bids.map((bid, key) => <TableRow key={key} valuesForEachColumn={[(bid.volume * bid.price), bid.volume, bid.price]} />)}
	</Table>
)

const _renderAsks = asks => (
	<Table>
		<TableHeader headers={['Total', 'Size', 'Ask']} />
		{asks.map((ask, key) => <TableRow key={key} valuesForEachColumn={[(ask.volume * ask.price), ask.volume, ask.price]} />)}
	</Table>
)

const _renderSpread = (highestBid, lowestAsk) => (
	<div className={styles['spread-container']}>
		<p className={styles['spread-item']}>Spread</p><p className={styles['spread-item']}>${Math.round((lowestAsk - highestBid) * 100)/100}</p>
	</div>
)

export default OrderBook
