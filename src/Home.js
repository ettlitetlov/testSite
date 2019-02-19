import React, { Component } from 'react';
import './Home.module.scss';
import './variables.scss';
import Nav from './Nav';
import Header from './Header';

class Home extends Component {
  render() {
    return (
      [
      <Nav absolute={true} home={true} />,
      <Header />
      ]
    );
  }
}

export default Home;
