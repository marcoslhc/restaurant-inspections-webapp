import React from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

function Header(props) {
  return (<div className="header">
    <img src={logo} className="logo" alt="logo" />
    <h2>Code For Miami New Project</h2>
  </div>);
}

export default Header;
