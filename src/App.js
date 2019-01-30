import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';

/* componenets */
import Home from './Home';
import Inlamning from './Inlamning';
import Journalistik from './Journalistik';
import Partners from './Partners';
import Partner from './Partner';

/* font awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


library.add(faAngleDown);

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
		      	<Route exact={true} path="/" component={Home} />
		        <Route path="/inlamning" component={Inlamning} />
				<Route path="/journalistik" component={Journalistik} />
		        <Switch>
			        <Route path="/nyhetsmedier/:name" component={Partner} />

			        <Route path="/nyhetsmedier" component={Partners} />
		        </Switch>
	        </div>
        </Router>
        	
    );
  }
}

export default App;
