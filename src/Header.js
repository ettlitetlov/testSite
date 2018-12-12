import React, { Component } from 'react';
import styles from './Header.module.scss';


import video from './assets/bg-video.mp4';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};


	}

	componentDidMount(){
	}

	render() {
		return(
			<header>
				<div className={styles.videoContainer}>
					<video autoPlay={true} loop={true} muted={true} autobuffer="true" >
						<source src={video} />
					</video>
				</div>
					<div className={styles.headerText}>
						<h1>Nutidens mediehus.</h1>
						<h4>
							I en föränderlig medievärld hjälper vi dig hitta rätt mediekanaler för att nå befintliga och nya kunder. Vi skapar dina möjligheter.
						</h4>
					</div>

			</header>
		);
	}

};

export default Header;