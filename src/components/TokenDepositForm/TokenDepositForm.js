import React, { Component } from 'react'
import { Button, Form, Input } from '../index'
import { connect } from 'react-redux'
import { getUser } from '../../reducers'
import { doFiatDepositRequest } from '../../actions'
import DashboardCard from '../DashboardCard'

class TokenDepositForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			usdxAmount: 1000,
		}
	}

	render() {
		const { user, onSubmit  } = this.props
		return (
			<DashboardCard title="Token deposit">
			<Form onSubmit={onSubmit} submitParams={ user.privateKey } testid="deposit-form">
				<Input
					testid="user-address-field"
					name="user-address"
					label="Deposit from"
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
				<Button type="submit" color="success">
					Deposit USDX
				</Button>
			</Form>
			</DashboardCard>
		)
	}

	handleUSDXAmountChange = (value) => {
		this.setState({ usdxAmount: value })
	}
}

const mapStateToProps = state => ({
	user: getUser(state),
})

const mapDispatchToProps = dispatch => ({
	onSubmit: (data, params) => {
		dispatch(doFiatDepositRequest(data["usdx-amount"], params))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(TokenDepositForm)
