import React from 'react'
import Dialog from '../Dialog'
import Button from '../Button'

const Error = ({ message, buttonText, dismiss }) => (
	<Dialog>
		<div>
			<p>Warning</p>
			<p>Something went wrong</p>
			<p>{message}</p>
			<Button color="primary" onClick={dismiss}>
				{'Dismiss'}
			</Button>
		</div>
	</Dialog>
)

export default Error
