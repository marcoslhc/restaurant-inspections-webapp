import React from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

function Header(props) {
  return (<div className="header">
    <img src={ logo } className="logo" alt="logo" />
    <h1>Florida Health Department - Bussines Inspections</h1>
  </div>);
}

export default Header;
