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
						<h1>Nutidens mediebolag.</h1>
						<h4>
							Vår verksamhet vilar på trovärdighet. I en omvärld som ständigt förändras hjälper vi dig att orientera dig. Dygnet runt servar vi dig med nyheter, men också med smarta lösningar för att nå ut och få din affär att växa.
						</h4>
					</div>

			</header>
		);
	}

};

export default Header;