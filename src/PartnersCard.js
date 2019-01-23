import React, { Component } from 'react';
import './variables.scss';
import styles from './PartnersCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PartnersCard extends Component {
  render() { 

    const css_order = {
      order: this.props.order
    };

    return (
      <a className={styles.card} href={this.props.link} style={css_order}>
        <img className={styles.cardIcon} src={this.props.icon} />
        <div className={styles.title}>
          <h3>{this.props.title}</h3>
        </div>
      </a>
    );
  }
}

export default PartnersCard;
