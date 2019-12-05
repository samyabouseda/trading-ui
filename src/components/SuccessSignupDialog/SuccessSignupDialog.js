import Dialog from '../Dialog/Dialog'
import Input from '../Input'
import React from 'react'

const SuccessSignupDialog = ({ message, user }) => (
	<Dialog
		testid="signup-success-dialog"
		dismissButtonText="I confirm I've copied it somewhere safe"
		dismissButtonColor="success"
	>
		<p data-testid="signup-success-message">{message}</p>
		<Input
			testid="user-address-field"
			name="user-address"
			label="Address"
			type="text"
			value={user.address}
			readOnly={true}
		/>
		<Input
			testid="user-private-key-field"
			name="user-private-key"
			label="Private key"
			type="text"
			value={user.privateKey}
			readOnly={true}
		/>
	</Dialog>
)

export default SuccessSignupDialog
