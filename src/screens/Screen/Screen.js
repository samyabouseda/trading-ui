import React from 'react'
import styles from './Screen.module.css'
import Error from '../../components/Error'
import { connect } from 'react-redux'
import { doCloseErrorWindow } from '../../actions'
import { getErrorMessage } from '../../reducers'

const Screen = ({ errorMessage, dismiss, children }) => (
	<div className={styles.screen}>
		{errorMessage && (
			<Error message={errorMessage} dismiss={dismiss} />
		)}
		{children}
	</div>
)

const mapStateToProps = state => ({
	errorMessage: getErrorMessage(state),
})

const mapDispatchToProps = dispatch => ({
	dismiss: () => dispatch(doCloseErrorWindow()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Screen)
