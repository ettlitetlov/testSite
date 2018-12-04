import React, { Component } from 'react';
import './variables.scss';
import styles from './Inlamning.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './Nav';

class Inlamning extends Component {
  render() {
    return (
    	[
      <Nav absolute={true} />,
      <div className={styles.container} >
        <div className={styles.splash}>
          <max>
            <h1 className={styles.title}>Materialinlämning</h1>
          </max>
        </div>
        <max>
          <h5 className={styles.titleText}>
            Här kan du lämna in ditt material. Lorem ipsum yada materila är najs woo. Bra kvalite ska det var apå det också
          </h5>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <FontAwesomeIcon icon={["far","newspaper"]} size="6x"/>
              </div>
              <div className={styles.cardText}>
                <h3>Print</h3>
                <h6>Här lämnar du in allt från artiklar till nyhetsinslag</h6>
              </div>

            </div>
          </div>
        </max>
      </div>
      
      ]
    );
  }
}

export default Inlamning;
