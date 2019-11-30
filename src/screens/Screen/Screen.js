import React from 'react'
import styles from './Screen.module.css'
import Error from '../../components/Error'
import { connect } from 'react-redux'
import { doCloseErrorWindow } from '../../actions'
import { getErrorMessage, getSuccessMessage } from '../../reducers'

const Screen = ({
	successMessage,
	errorMessage,
	dismiss,
	children,
}) => (
	<div className={styles.screen}>
		{errorMessage && (
			<Error message={errorMessage} dismiss={dismiss} />
		)}
		{successMessage && (
			<Error message={successMessage} dismiss={dismiss} />
		)}
		{children}
	</div>
)

const mapStateToProps = state => ({
	errorMessage: getErrorMessage(state),
	successMessage: getSuccessMessage(state),
})

const mapDispatchToProps = dispatch => ({
	dismiss: () => dispatch(doCloseErrorWindow()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Screen)
