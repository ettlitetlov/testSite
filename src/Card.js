import React, { Component } from 'react';
import './variables.scss';
import styles from './Card.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Card extends Component {
  render() {
    return (
      <a href={this.props.link} className={styles.card}>
        <div className={styles.cardIcon}>
          <FontAwesomeIcon icon={this.props.icon} size="4x"/>
        </div>
        <div className={styles.cardText}>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </a>
    );
  }
}

export default Card;
