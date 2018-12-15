import React, { Component } from 'react';

import { HashLink as AnchorLink } from "react-router-hash-link";

import styles from './Partner.module.scss';
import splash from './Splash.module.scss';

import Nav from './Nav';
import ContactInfoCard from './ContactInfoCard';
import Footer from './Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Partner extends Component {
  render() {

    const bg_id = "" + this.props.name;

    const data = 
    [
      {
        name: "Redaktionen",
        listTitle: ["E-post", "Telefon"],
        listInfo: ["tipsa@nt.se", "011-200 260"]
      },
      {
        name: "Videoredaktionen",
        listTitle: ["E-post", "Telefon"],
        listInfo: ["videoredaktionen@ostgotamedia.se", "011-200 260"]
      }
    ]

    return (
    	[
      <Nav absolute={true} partner={true} />,
      <div>
        <div className={styles.header} id={styles[bg_id]}>
          <max>

            <div className={styles.headerTitle} >
              <h1>Norrköpings-Tidningar</h1>
              <div className={styles.headerTitleContact} >
                <ul>
                  <li><b>Telefon:</b> 011-200 000</li>
                  <li><b>Öppetider mån-fre:</b> 8-17</li> 
                  <li><b>Besöksaddress:</b> Stohagsgatan 2, Norrköping</li> 
                  <li><b>E-post till anställda:</b> fornamn.efternamn@nt.se</li> 
                </ul>
              </div>
            </div>
          </max>
        </div>
          
        {/* <div className={styles.blurHider} ></div> */}
        <div className={styles.cardsContainer} >
          <ContactInfoCard 
            name="Nyhetstips" 
            list={data} 
            description="Vad innebär meddelandeskyddet? Meddelarskydd är ett skydd mot röjande eller efterforskning av uppgiftslämnarens identitet. Skyddet ges enligt tryckfrihetsförordningen (SFS-nummer 1949:105) och yttrandefrihetsgrundlagen (SFS-nummer 1991:1469)."
          />

          <ContactInfoCard 
            name="Utebliven Tidning" 
            list={data} 
            description="Vad innebär meddelandeskyddet? Meddelarskydd är ett skydd mot röjande eller efterforskning av uppgiftslämnarens identitet. Skyddet ges enligt tryckfrihetsförordningen (SFS-nummer 1949:105) och yttrandefrihetsgrundlagen (SFS-nummer 1991:1469)."
          />

          <ContactInfoCard 
            name="Utebliven Tidning" 
            list={data} 
            description="Vad innebär meddelandeskyddet? Meddelarskydd är ett skydd mot röjande eller efterforskning av uppgiftslämnarens identitet. Skyddet ges enligt tryckfrihetsförordningen (SFS-nummer 1949:105) och yttrandefrihetsgrundlagen (SFS-nummer 1991:1469)."
          />

        </div>
      </div>,
      <Footer />
      ]
    );
  }
}

export default Partner;

/*


<div>
        <div className={styles.header} id={styles[bg_id]}>
          <div className={styles.headerHalfPicLayer}></div>
            <div className={styles.headerContent} >
              <max>
                <div className={styles.headerTitle} >
                  
                  <h1>Norrköpings-Tidningar</h1>
                  <div className={styles.headerTitleContact} >
                    <ul>
                      <li>ofheljf</li>
                      <li>ofheljf</li>
                      <li>ofheljf</li>  
                    </ul>
                  </div>
                </div>
              </max>
            </div>
        </div>

*/