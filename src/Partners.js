import React, { Component } from 'react';

import { HashLink as AnchorLink } from "react-router-hash-link";

import styles from './Partners.module.scss';
import splash from './Splash.module.scss';

import Nav from './Nav';
import Card from './Card';
import Footer from './Footer';
import PartnersCard from './PartnersCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import nt from './assets/icons/nt_clipped.png';
import corren from './assets/icons/corren_clipped.png';
import mvt from './assets/icons/mvt_clipped.png';
import vt from './assets/icons/vt_clipped.png';
import lp from './assets/icons/lp_clipped.png';
import nm from './assets/icons/nm_clipped.png';
import v from './assets/icons/v.jpg';

class Partners extends Component {
  render() {
    return (
    	[
      <Nav absolute={true} />,
      <div className={[splash.container, splash.small].join(' ')} id={splash.bg_interview}>
        <div className={splash.splash}>
          <max>
            <h1 className={splash.title}>
              Nyhetsmedier
              <AnchorLink to="#description"> 
                <FontAwesomeIcon icon={["fas", "angle-down"]} size="lg" color="white" className={splash.scroll} />
              </AnchorLink>
            </h1>
          </max>
        </div>
        <div className={splash.description} id="description">
          <max>
            <h5 className={splash.descriptionText}> Här hittar du all information om våra Nyhetsmedier och deras kontakter</h5>
          </max>
        </div>
        <max>
          <div className={[styles.cardContainer, splash.cardContainer].join(' ')}>
            <PartnersCard title="Norrköpings Tidningar" link="#" icon={nt} type="nyhetsmedia" />
            <PartnersCard title="Linköpings Correspondenten" link="#" icon={corren} type="nyhetsmedia" />
            <PartnersCard title="Motala Vadstena Tidningen" link="#" icon={mvt} type="nyhetsmedia" />
            <PartnersCard title="Västerviks-Tidningen" link="#" icon={vt} type="nyhetsmedia" />
            <PartnersCard title="Linköpings-Posten" link="#" icon={lp} type="tidning" />
            <PartnersCard title="Norrköpings-Magazinet" link="#" icon={nm} type="tidning" />
            <PartnersCard title="Vimmerby-Tidningen" link="#" icon={v} type="nyhetsmedia" />
          </div>
        </max>
      </div>,
      <Footer />
      ]
    );
  }
}

export default Partners;
