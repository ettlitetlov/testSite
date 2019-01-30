import React, {Component} from 'react';
import { HashLink as AnchorLink } from "react-router-hash-link";

import styles from './Inlamning.module.scss';
import splash from './Splash.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from './Nav';
import Card from './Card';
import Footer from './Footer';

class Journalistik extends Component {

    
  constructor(props) {
    super(props);

    this.state = {
    };
  }

    render(){
        return (
            [<Nav absolute={true} />,
            <div className={[splash.container].join(' ')} id={splash.bg_journalistik}>
            <div className={splash.splash} >
              <max>
                <h1 className={splash.title}>
                Journalistik
                <AnchorLink to="#description"> 
                  <FontAwesomeIcon icon={["fas", "angle-down"]} size="lg" color="white" className={splash.scroll} />
                </AnchorLink>
                </h1>
              </max>
            </div>
            </div>
            ] 
        );

    }
}

export default Journalistik;