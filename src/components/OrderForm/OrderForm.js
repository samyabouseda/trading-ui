import React, { Component } from 'react'
import { Button, Form, Input } from '../index'
import { connect } from 'react-redux'
import { getInstrument, getUser } from '../../reducers'
import { doPlaceOrderRequest } from '../../actions'
import DashboardCard from '../DashboardCard'
import styles from './OrderForm.module.css'

const DEFAULT_NB_OF_SHARES = 1

class OrderForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			marketSideIsBuy: true,
			assetPricePerShare: props.instrument.highestAsk,
			numberOfShares: DEFAULT_NB_OF_SHARES,
			usdxAmount:
				props.instrument.highestAsk * DEFAULT_NB_OF_SHARES,
		}
	}

	render() {
		const { instrument, user, onSubmit } = this.props
		return (
			<DashboardCard title="Order Form">
				<Form
					onSubmit={onSubmit}
					submitParams={user.privateKey}
					testid="buy-fiat-form"
				>
					<Button
						onClick={() =>
							this.toggleMarketSide(instrument)
						}
						color={
							this.state.marketSideIsBuy
								? 'success'
								: 'inactive'
						}
					>
						Buy
					</Button>
					<Button
						onClick={() =>
							this.toggleMarketSide(instrument)
						}
						color={
							this.state.marketSideIsBuy
								? 'inactive'
								: 'error'
						}
					>
						Sell
					</Button>
					<Info
						instrument={instrument}
						marketSideIsBuy={this.state.marketSideIsBuy}
					/>
					<Input
						testid="eth-amount-field"
						name="number-of-shares"
						label="Quantity"
						type="text"
						onChange={this.handleQuantityChange}
						value={this.state.numberOfShares}
					/>
					<Input
						testid="usdx-amount-field"
						name="usdx-amount"
						label="Total price in USDX"
						type="text"
						onChange={this.handlePriceChange}
						value={this.state.usdxAmount}
					/>
					<input
						type="hidden"
						name="limit-price"
						value={this.state.assetPricePerShare}
					/>
					<input
						type="hidden"
						name="asset-id"
						value={instrument.id}
					/>
					<input
						type="hidden"
						name="side"
						value={
							this.state.marketSideIsBuy ? 'bid' : 'ask'
						}
					/>
					<Button
						type="submit"
						color={
							this.state.marketSideIsBuy
								? 'success'
								: 'error'
						}
					>
						{this.state.marketSideIsBuy
							? 'Buy Assets'
							: 'Sell Assets'}
					</Button>
				</Form>
			</DashboardCard>
		)
	}

	toggleMarketSide = instrument => {
		this.setState((prevState, props) => {
			const marketSideIsBuy = !prevState.marketSideIsBuy
			const assetPricePerShare = marketSideIsBuy
				? instrument.highestAsk
				: instrument.lowestBid
			const usdxAmount =
				prevState.numberOfShares * assetPricePerShare
			return { marketSideIsBuy, assetPricePerShare, usdxAmount }
		})
	}

	handleQuantityChange = value => {
		let numberOfShares = value
		let usdxAmount = value * this.state.assetPricePerShare
		this.setState({ usdxAmount, numberOfShares })
	}

	handlePriceChange = value => {
		let usdxAmount = value
		let numberOfShares = value / this.state.assetPricePerShare
		this.setState({ usdxAmount, numberOfShares })
	}
}

const Info = ({ instrument, marketSideIsBuy }) => (
	<div className={styles.info}>
		<div>
			<p className={styles.title}>{instrument.name}</p>
			<p className={styles['sub-title']}>Selected asset</p>
		</div>
		<div>
			<p className={styles.title}>
				$
				{marketSideIsBuy
					? instrument.highestAsk
					: instrument.lowestBid}
			</p>
			<p className={styles['sub-title']}>Price per share</p>
		</div>
	</div>
)

const mapStateToProps = state => ({
	instrument: getInstrument(state),
	user: getUser(state),
})

const mapDispatchToProps = dispatch => ({
	onSubmit: (data, params) => {
		dispatch(
			doPlaceOrderRequest(
				data['number-of-shares'],
				data['asset-id'],
				data['limit-price'],
				data['side'],
				params,
			),
		)
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)
