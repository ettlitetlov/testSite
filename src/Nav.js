import React, { Component } from 'react';
import styles from './Nav.module.scss';

import NavItem from './NavItem.js';
import { Link } from "react-router-dom";

class Nav extends Component {

	constructor(props) {
		super(props);

		this.state = {
			style: { position: 'relative' }
		};
	}

	componentDidMount() {

		const absoluteStyle = {
			position: 'absolute'
		};
		const regularStyle = {
			position: 'relative',
			background: '#1d1d1d'
		};


		if(this.props.absolute) {
			this.setState({style: absoluteStyle})
		} else {
			this.setState({style: regularStyle})
		}

	}

	render() {

		return(
			<div>
				<nav className={styles.nav} style={this.state.style} >
					<Link to="/" className={styles.logo} ></Link>
					<NavItem title="materialinlämning" link="/Inlamning" />
					<NavItem title="kontakt" link="#" />
				</nav>
			</div>

		);
	}

};

export default Nav;