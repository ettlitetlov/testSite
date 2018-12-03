import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import './App.scss';

import Home from './Home';
import Inlamning from './Inlamning';


class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

  render() {
    return (
    	
    	<Router>
			<div>
		      	<Route exact path="/" component={Home} />
		        <Route path="/inlamning" component={Inlamning} />
	        </div>
        </Router>
        	
    );
  }
}

export default App;
