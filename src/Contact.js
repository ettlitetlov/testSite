import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { HashLink as AnchorLink } from "react-router-hash-link";

import styles from './Contact.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
	render() {
		return(
			<div className={styles.container} id="contact">
				<max>
					<div className={styles.title} >
						<h1>Kontakta oss.</h1>
						<p>Vi är aldrig mer än ett telefonsamtal eller mail bort. Här hittar du alla uppgifter du behöver för att nå oss, vi ser fram emot att höra från dig.</p>
					</div>
				</max>
				<max className={styles.row} >

					<div className={styles.card}>
						<h3>Annonsör</h3>
						<div className={styles.cardInfo} >
							<div className={styles.cardItem} >
								<div className={styles.cardIcon} id={styles.phone} ></div>
								<p>011-200 355</p>
							</div>
							<div className={styles.cardItem} >
								<div className={styles.cardIcon} id={styles.mail} ></div>
								<a href="mailto:hej@ostmedia.se">hej@ostmedia.se</a>
							</div>
						</div>
					</div>
					<div className={styles.card}>
						<h3>Privatperson</h3>
						<div className={styles.cardInfo} >
							<div className={styles.cardItem} >
								<p>Gå vidare här för att välja det nyhetsmedie du vill Kontakta</p>
							</div>
							<div className={styles.cardItem}>
								<Link to="/nyhetsmedier" className={styles.cardButton} >
									<div className={styles.cardIcon} id={styles.arrow} ></div>
									<span>Våra Nyhetsmedier</span>
								</Link>
							</div>
						</div>
					</div>

				</max>
			</div>

		);
	}

};

export default Contact;