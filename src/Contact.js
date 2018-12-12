import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styles from './Contact.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
	render() {
		return(
			<div className={styles.container} id="contact">
				<max>
					<h1>Kontakta oss.</h1>
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
								<p>Hitta alla uppgifter som kund hos oss.</p>
							</div>
							<div className={styles.cardItem}>
								<Link to="/Partners" className={styles.cardButton} >
									<div className={styles.cardIcon} id={styles.arrow} ></div>
									<span>Kontakt</span>
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