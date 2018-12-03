import React, { Component } from 'react';
import styles from './Contact.module.scss';


class Contact extends Component {
	render() {
		return(
			<div className={styles.container}>
				<max>
					<h1>Kontakta Oss</h1>
				</max>
				<max className={styles.row} >
					<div className={styles.card}>
						<h6>om du har frågor som</h6>
						<h3>Privatperson</h3>
						<div className={styles.cardInfo} >
							<div className={styles.cardItem} >
								<div className={styles.cardIcon} id={styles.phone} ></div>
								<p>013-45 74 37</p>
							</div>
							<div className={styles.cardItem} >
								<div className={styles.cardIcon} id={styles.mail} ></div>
								<p>prenumerant@ostmedia.se</p>
							</div>
						</div>
					</div>
					<div className={styles.card}>
						<h6>om du har frågor som</h6>
						<h3>Annonsör</h3>
						<div className={styles.cardInfo} >
							<div className={styles.cardItem} >
								<div className={styles.cardIcon} id={styles.phone} ></div>
								<p>013-45 55 87</p>
							</div>
							<div className={styles.cardItem} >
								<div className={styles.cardIcon} id={styles.mail} ></div>
								<p>journalist@ostmedia.se</p>
							</div>
						</div>
					</div>

				</max>
			</div>

		);
	}

};

export default Contact;