import React, { Component } from 'react';

import { HashLink as AnchorLink } from "react-router-hash-link";

import styles from './Partner.module.scss';
import splash from './Splash.module.scss';

import Nav from './Nav';
import ContactInfoCard from './ContactInfoCard';
import Footer from './Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Partner extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      partnerData: [],
      cardData: [],
      cardSection: [],
      slug: this.props.match.params.name
    };
  }

  componentDidMount() {

    let dataURL = "http://localhost/Projects/ostmedia-wordpress/wp-json/wp/v2/nyhetsmedia?slug=" + this.state.slug + "&_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          partnerData: res
        })
    })

    let cardDataUrl = "http://localhost/Projects/ostmedia-wordpress/wp-json/wp/v2/contactcard";
    fetch(cardDataUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          cardData: res
        })
    })
  }

  setBg(url){
    document.getElementById("bg").style.backgroundImage = "url('" + url + "')";
  }




  render() {

    const bg_id = "" + this.props.name;


    const headerCard = this.state.partnerData.map((data,i) => {
      return <div className={styles.headerTitleContact}>
              <ul>
                <li><b>Telefon:</b> {data.acf.phone}</li>
                <li><b>Öppettider mån-fre:</b> {data.acf.openhours}</li>
                <li><b>Besöksaddress:</b> {data.acf.address}</li>
                <li><b>E-post:</b> {data.acf.mail}</li>
              </ul>
             </div>
    });

    const title = this.state.partnerData.map((data,i) => {
      this.setBg(data.acf.bg);
      return <h1>{data.acf.name}</h1>
    });

    const contactCards = this.state.cardData.map((card,i) => {
      if (card.acf.parent_nyhetsmedie.post_title.toLowerCase() == this.state.slug){
        return <ContactInfoCard
                  name={card.acf.title}
                  fullName={card.title.rendered}
                  description={card.acf.description}
                />
      }
    })

    return (
    	[
      <Nav absolute={true} partner={true} />,
      <div>
        <div className={styles.header}>
        <div className={styles.headerBg} id="bg"></div>
          <max>

            <div className={styles.headerTitle} >
              {title}
              {headerCard}
            </div>
          </max>
        </div>
          
        {/* <div className={styles.blurHider} ></div> */}
        <div className={styles.cardsContainer} >
          {contactCards}

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