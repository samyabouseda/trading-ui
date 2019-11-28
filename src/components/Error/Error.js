import React from 'react'

const Error = ({ message, dismiss }) => (
	<div>
		<p>Warning</p>
		<p>Something went wrong</p>
		<p>{message}</p>
		<button onClick={dismiss}>dismiss</button>
	</div>
)

export default Error
