import React from 'react'
import styles from './Dialog.module.css'
import Card from '../Card'
import Button from '../Button'
import { doCloseErrorWindow } from '../../actions'
import { connect } from 'react-redux'

const Dialog = ({ dismiss, testid, children }) => {
	return (
		<div
			data-testid={testid}
			className={styles['dialog-background']}
		>
			<div className={styles['dialog-container']}>
				<Card>
					{children}
					<Button color="primary" onClick={dismiss}>
						{'Dismiss'}
					</Button>
				</Card>
			</div>
		</div>
	)
}

// const mapDispatchToProps = dispatch => ({
// 	dismiss: () => dispatch(doCloseErrorWindow()),
// })

// export default connect(null, mapDispatchToProps)(Dialog)

export default Dialog
