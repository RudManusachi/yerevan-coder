"use strict";

import React from 'react';

export default
class Header extends React.Component {
  render() {

    let siteHeader = {
      display: 'flex-wrap',
      backgroundColor: 'rgba(225,135,40,0.2)',
      color: '#484848',
      padding: '1rem',
      width: '100%'
    };

    let head = {
      maxWidth: '450px',
      
    };
    let nav = {
      display: 'inline-flex',
      
      position: 'relative',
      left: '5rem'

    };

    let navLinks = {
      listStyle: 'none',
      display: 'inline-flex'
    };

    let navLinksSelect = {
      textDecoration: 'none',
     

    };

    let accountLinks = {
      listStyle: 'none',
      display: 'inline-flex'
    };

     let accountLinksSelect = {
      textDecoration: 'none',
      

    };

    return (

    <header style={siteHeader}>
      <a href='#'><img style={head} src='public/ycHEAD.png'/></a>
        <div style={nav}>
          <ul style={navLinks}>
             <li><a style={navLinksSelect} href='#0'>Home</a></li>
             <li><a style={navLinksSelect} href='#0'>About</a></li>
           </ul>
         <ul style={accountLinks}>
	         <li><a style={accountLinksSelect} href='#0'>Login</a></li>
	         <li><a style={accountLinksSelect} href='#0'>SignUp</a></li>
	         <li><a style={accountLinksSelect} href='#0'>Forgot</a></li>
         </ul>
      </div>

    </header>
    );
  }
};
