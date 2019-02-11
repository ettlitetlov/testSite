import React, { Component } from 'react';
import styles from './Nav.module.scss';

import NavItem from './NavItem.js';
import { Link } from "react-router-dom";

class Nav extends Component {

	constructor(props) {
		super(props);

		this.state = {
			style: { position: 'relative' },
			partnerStyle: ""
		};
	}

	componentDidMount() {

		const absoluteStyle = {
			position: 'absolute',
			width: '100%'
		};
		const regularStyle = {
			position: 'relative',
			background: 'rgb(0, 82, 140)'
			/*background: '#1d1d1d'*/
		};


		if(this.props.absolute) {
			this.setState({style: absoluteStyle})
		} else {
			this.setState({style: regularStyle})
		}

	}

	render() {

		if(this.props.absolute){
			if(this.props.partner) {
				/* partner with anchor link */

				const partnerLogo = {
					display: 'block'
				}


				return(
					<div id="top" style={this.state.style} >
						<nav className={styles.nav} >
							<Link to="/" className={styles.logo} style={partnerLogo} ></Link>
							<NavItem title="Prenumerera" link="/nyhetsmedier"/>
							<NavItem title="Journalistik" link="/journalistik" />
							<NavItem title="Materialinlämning" link="/Inlamning" />
							<NavItem title="Annonsera" link="/annonsera"/>
							<NavItem title="Karriär" link="/karriar"/>
							<NavItem title="Kontakt" link="/nyhetsmedier" anchor={true} />
						</nav>
					</div>
				);
			} else {
				return(
					<div id="top" style={this.state.style} >
						<nav className={styles.nav} >
							<Link to="/" className={styles.logo}></Link>
							<NavItem title="Prenumerera" link="/nyhetsmedier"/>
							<NavItem title="Journalistik" link="/journalistik" />
							<NavItem title="Materialinlämning" link="/Inlamning" />
							<NavItem title="Annonsera" link="/annonsera"/>
							<NavItem title="Karriär" link="/karriar"/>
							<NavItem title="Kontakt" link="/nyhetsmedier" anchor={true} />
						</nav>
					</div>
				);
			}
		} else {
			if (this.props.partner) {

				const partnerLogo = {
					width: '170px',
					height: '100px',
					marginRight: '85%',
					order: '4',
					alignSelf: 'flexStart'
				}


				return(
					<div id="top">
						<nav className={styles.nav} style={this.state.style} >
							<Link to="/" className={styles.logo} style={partnerLogo} ></Link>
							<NavItem title="Materialinlämning" link="/Inlamning" />
							<NavItem title="Kontakt" link="/#contact" anchor={true} />
						</nav>
					</div>
				);
			}
			return(
				<div id="top">
					<nav className={styles.nav} style={this.state.style} >
						<Link to="/" className={styles.logo} ></Link>
						<NavItem title="Materialinlämning" link="/Inlamning" />
						<NavItem title="Kontakt" link="/Partners" />
					</nav>
				</div>

			);
		}

		
	}

};

export default Nav;