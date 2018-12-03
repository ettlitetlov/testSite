import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from './NavItem.module.scss';

class NavItem extends Component {
	render() {
		return(
			<Link className={styles.link} to={this.props.link}>
				{this.props.title}
			</Link>

		);
	}

};

export default NavItem;