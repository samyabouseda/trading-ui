import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import styles from './SideBar.module.css'
import { DashboardIcon, ProfileIcon } from '../../icons'

const Sidebar = ({ currentPath }) => {
	return (
		<section className={styles.sidebar}>
			<div className={styles.icons}>
				<Link to="/dashboard">
					<DashboardIcon active={currentPath === '/dashboard'}/>
				</Link>
			</div>

			<div className={styles.icons}>
				<Link to="/profile">
					<ProfileIcon active={currentPath === '/profile'} />
				</Link>
			</div>
		</section>
	)
}

export default Sidebar
