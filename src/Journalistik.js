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
  componentDidMount() {
    let dataURL = "http://api.ostmedia.se/wp-json/wp/v2/pages";
    
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
          
      })
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
            <div className={splash.description} id="description">
              <max>
                <h5 className={splash.descriptionText}> Så jobbar vi med nyheter</h5>
              </max>
            </div>
              <max>
                <div className={splash.articleContainer}>
                <h4>Policy</h4>
                  Lagar och regler för våra mediekanaler
                  <p>Öst Medias samtliga nyhetsmedier, både tryckta tidningar och nyhetsplattformar online, sorterar under grundlagen: Tryckfrihetsförordningen och Yttrandefrihetsgrundlagen. Enligt dessa ska våra medier ha ansvariga utgivare som tar ansvar för att vi följer såväl grundlagen som de pressetiska reglerna i vår nyhetsverksamhet. </p>
                </div>
              </max>
            </div>
            ] 
            
        );

    }
}

export default Journalistik;