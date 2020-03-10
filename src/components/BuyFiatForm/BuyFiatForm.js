import React, { Component } from 'react'
import { Button, Form, Input } from '../index'
import { connect } from 'react-redux'
import { getUser } from '../../reducers'
import { doFiatPurchaseRequest } from '../../actions'
import DashboardCard from '../DashboardCard'

const ETH_TO_USDX_RATE = 231

class BuyFiatForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			usdxAmount: ETH_TO_USDX_RATE,
			ethAmount: 1,
		}
	}

	render() {
		const { user, onSubmit  } = this.props
		return (
			<DashboardCard title="Buy fiat">
			<Form onSubmit={onSubmit} submitParams={ user.privateKey } testid="buy-fiat-form">
				<Input
					testid="user-address-field"
					name="user-address"
					label="Withdraw from"
					type="text"
					value={user.address || "0x0"}
					readOnly={true}
				/>
				<Input
					testid="usdx-amount-field"
					name="usdx-amount"
					label="USDX"
					type="text"
					onChange={this.handleUSDXAmountChange}
					value={this.state.usdxAmount}
				/>

				<Input
					testid="eth-amount-field"
					name="eth-amount"
					label="ETH"
					type="text"
					onChange={this.handleETHAmountChange}
					value={this.state.ethAmount}
				/>
				<Button type="submit" color="success">
					Buy USDX
				</Button>
			</Form>
			</DashboardCard>
		)
	}

	handleUSDXAmountChange = (value) => {
		let ethAmount = value / ETH_TO_USDX_RATE
		let usdxAmount = value
		this.setState({ usdxAmount, ethAmount })
	}

	handleETHAmountChange = (value) => {
		let ethAmount = value
		let usdxAmount = value * ETH_TO_USDX_RATE
		this.setState({ usdxAmount, ethAmount })
	}
}

const mapStateToProps = state => ({
	user: getUser(state),
})

const mapDispatchToProps = dispatch => ({
	onSubmit: (data, params) => {
		dispatch(doFiatPurchaseRequest(data["usdx-amount"], params))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(BuyFiatForm)
