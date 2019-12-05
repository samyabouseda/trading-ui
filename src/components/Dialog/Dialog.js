import React from 'react'
import styles from './Dialog.module.css'
import Card from '../Card'
import Button from '../Button'
import { doDialogClose } from '../../actions'
import { connect } from 'react-redux'

const Dialog = ({
	dismiss,
	testid,
	children,
	dismissButtonText = 'Dismiss',
	dismissButtonColor = 'primary',
}) => {
	return (
		<div
			data-testid={testid}
			className={styles['dialog-background']}
		>
			<div className={styles['dialog-container']}>
				<Card>
					{children}
					<Button
						color={dismissButtonColor}
						onClick={dismiss}
					>
						{dismissButtonText}
					</Button>
				</Card>
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	dismiss: () => dispatch(doDialogClose()),
})

export default connect(null, mapDispatchToProps)(Dialog)
