import React, { Component } from 'react';
import './variables.scss';
import styles from './ContactInfoCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactInfoCard extends Component {
  render() {

    /*const linkTitles = this.props.linkTitles;
    const links = this.props.links.map( (link, i) =>
      <li><a href={link}>{linkTitles[i]}</a></li>
    );*/

    return (
      <div className={styles.card}>
        <max>
          <div className={styles.cardContent} >
            <h2>{this.props.name}</h2>
            <div className={styles.text} >
              <div className={styles.section} >
                <h4>Redaktionen</h4>
                <ul>
                  <li>E-post: <b>tipsa@nt.se</b></li>
                  <li>Telefon: <b>011-200 260</b></li>
                </ul>
              </div>
              <div className={styles.section} >
                <h4>Videoredaktionen</h4>
                <ul>
                  <li>E-post: <b>videoredaktionen@ostgotamedia.se</b></li>
                  <li>Telefon: <b>011-200 260</b></li>
                </ul>
              </div>
            </div>
            <p className={styles.description}>
              Vad innebär meddelandeskyddet? Meddelarskydd är ett skydd mot röjande eller efterforskning av uppgiftslämnarens identitet. Skyddet ges enligt tryckfrihetsförordningen (SFS-nummer 1949:105) och yttrandefrihetsgrundlagen (SFS-nummer 1991:1469).
            </p>
          </div>
        </max>
      </div>
    );
  }
}

export default ContactInfoCard;
