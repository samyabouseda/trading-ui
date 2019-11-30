import React from 'react'
import styles from './Screen.module.css'

const Screen = ({ children }) => (
	<div className={styles.screen}>{children}</div>
)

export default Screen
