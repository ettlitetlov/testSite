import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import Nav from './Nav.js';
import video from './assets/bg-video.mp4';
import Footer from './Footer.js'
import styles from './Annonsera.module.scss';

class Annonsera extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};


	}

	componentDidMount(){
	}

	render() {
		return([
		  <Nav absolute={true} />,
			<header>
				<div className={styles.videoContainer}>

				</div>
					<div className={styles.headerText}>
						<h1 className={styles.headerText}>Vi skapar dina möjligheter</h1>
						<h4 className={styles.headerText}>Vår försäljningsavdelning är en unik sammansatt grupp av reklamkunniga medierådgivare, 
							kreatörer & analytiker som tillsammans ger dina affärer en god skjuts framåt inom allt från 
							digital och traditionell annonsering i  nyhetsmedier, till sociala medier, Google Ads och Native.
							Kontakta oss på <a className={styles.mailLink} href="mailto:foretagsannons@ostmedia.se">foretagsannons@ostmedia.se</a> så hjälper vi dig direkt!

						</h4>
						<ButtonToolbar className={styles.btns}>
							<Button size="lg" className={styles.leftBtn}>
							Läs mer om våra produkter och medieslag här
							</Button>
						</ButtonToolbar>
					</div>

            </header>,
            <Footer/>
        ]
		);
	}

};

export default Annonsera;