import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.module.scss';
import './variables.scss';

import Nav from './Nav';
import Header from './Header';
import Contact from './Contact';

class Home extends Component {
  render() {
    return (
      [
      <Nav absolute={true} />,
      <Header />,
      <Contact />
      ]
    );
  }
}

export default Home;
