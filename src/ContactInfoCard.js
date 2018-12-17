import React, { Component } from 'react';
import './variables.scss';
import styles from './ContactInfoCard.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactInfoCard extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      cardData: []
    };
  }

  componentDidMount(){

    let cardDataUrl = "http://localhost/Projects/ostmedia-wordpress/wp-json/wp/v2/contactcard_section?per_page=50";
    fetch(cardDataUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          cardData: res
        })
    })
  }

  render() {

    let sections = this.state.cardData.map((data, i) => {
      //console.log(this.props.fullName, data.acf.parent_contactcard.post_title);
      let phone = "";
      let mail = "";
      if (this.props.fullName == data.acf.parent_contactcard.post_title) {
        
        if(data.acf.phone) {
          
          phone = <li>Telefon: <b>{data.acf.phone}</b></li>; 
        }
        if(data.acf.mail) {
          mail = <li>E-post: <b>{data.acf.mail}</b></li>;
        }
        return <div className={styles.section} >
                  <h4>{data.acf.title}</h4>
                  <ul>
                    {mail}
                    {phone}
                  </ul>
                </div>
      }
    });


    return (
      <div className={styles.card}>
        <max>
          <div className={styles.cardContent} >
            <h2>{this.props.name}</h2>
            <div className={styles.text} >
              {sections}
            </div>
            <p className={styles.description}>{this.props.description}</p>
          </div>
        </max>
      </div>
    );
  }
}

export default ContactInfoCard;
