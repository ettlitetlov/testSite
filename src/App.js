import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

/* componenets */
import Home from './Home';
import Inlamning from './Inlamning';

/* font awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faDesktop, faVideo, faSolarPanel } from '@fortawesome/free-solid-svg-icons';

library.add(faNewspaper, faDesktop, faVideo, faSolarPanel);

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	componenetDidMount(){
		
		console.log("font awesome", library);

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
