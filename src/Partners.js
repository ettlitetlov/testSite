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
import folk from './assets/icons/folkbladet_clipped.png';

class Partners extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      partners: []
    };
  }


  componentDidMount() {
    let dataURL = "http://localhost/Projects/ostmedia-wordpress/wp-json/wp/v2/nyhetsmedia?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          partners: res
        })
      })
  }


  render() {

    const url = this.props.match.url;

    const partners = this.state.partners.map((nyhetsmedia, i) => {
      return <PartnersCard title={nyhetsmedia.acf.name} link={url + "/" + nyhetsmedia.acf.name.toLowerCase()} icon={nyhetsmedia._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} />
    });


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
            <h5 className={splash.descriptionText}> Här hittar du all information och kontaktuppgifter till våra nyhetsmedier</h5>
          </max>
        </div>
        <max>
          <div className={[styles.cardContainer, splash.cardContainer].join(' ')}>
            {partners}
            
          </div>
        </max>
      </div>,
      <Footer />
      ]
    );
  }
}

export default Partners;
