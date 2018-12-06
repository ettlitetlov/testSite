import React, { Component } from 'react';
import styles from './Footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (

      <footer>
        <max className={styles.logoContainer} >
          <div className={styles.logo}></div>
          <p>Vi skapar dina möjligheter</p>
        </max>
        
        <max className={styles.links} >
          <a href="#">support@ostmedia.se</a>
          <span></span>
          <a href="#">hej@ostmedia.se</a>
          <span></span>
          <a href="#">kundservice@ostmedia.se</a>
        </max>
        
      </footer>
      
    );
  }
}

export default Footer;
