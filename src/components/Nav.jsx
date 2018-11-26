import React from "react";
import ReactDOM from "react-dom";

import styles from "./Nav.scss";

export default class Nav extends React.Component {
  render() {
    return (
		<div>
      		<h2 className={styles.nav-item}>nav</h2>
  		</div>
    );
  }
}