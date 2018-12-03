import React, { Component } from 'react';
import './Inlamning.module.scss';
import './variables.scss';

import Nav from './Nav';

class Inlamning extends Component {
  render() {
    return (
    	[
      <Nav absolute={false} />,
      <div>
      	<h1>woo</h1>
      </div>
      
      ]
    );
  }
}

export default Inlamning;
