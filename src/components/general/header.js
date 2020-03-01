import React, { Component } from 'react';
import logo from '../../assets/SomaLogo0.png';
import {Link, Redirect} from 'react-router-dom';

export class Header extends Component {
    render() {
        return ( 
<nav className="navbar navbar-expand-lg navbar-light bg-white">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button><div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link" to={'/translate'}>Translate <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/music'}>Music </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/film'}>Film </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/travel'}>Travel </Link>
      </li>
    </ul></div> 
  <a className="navbar-brand" href="#">
    <img src={logo} width="170" height="40" className="d-inline-block align-top" alt=""></img>
  </a>
      <Link className="btn btn-primary my-2 my-sm-0" type="account" to={'/account/signup'}>Learn For Free</Link>
</nav>);
    }
}

export default Header;