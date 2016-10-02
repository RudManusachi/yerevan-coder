"use strict";

import React from 'react';
export default
class Header extends React.Component {
  render() {
    let header = {
      backgroundColor: '#F4F9FC',
      color: '#D0DDE4',
      padding: '2%',
      width: '100%'

    };
    let empty = {
      height: '0px',
      width:'0px'
    };
    let logo = {
      width: '40%',
      margin: 'auto',
      display: 'flex',
      paddingRight: '130px'
    };
    let slogan = {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '1rem',
      paddingRight: '130px'
    };
    let headerLinks = {
      display: 'flex',
      fontSize: '1rem'
    };
    let siteNav = {
      listStyle: 'none',
      display: 'flex'
    };
    let siteNavSpec = {
      textDecoration: 'none',
      color: '#F4F9FC',
      backgroundColor:'#9B4408',
      margin: '.5rem',
      padding: ['.25rem 1rem']

    };
    let accNav = {
      listStyle: 'none',
      display: 'flex',
      marginLeft: 'auto',
      paddingRight: '2rem'
    };
     let accNavSpec = {
      textDecoration: 'none',
      color: '#F4F9FC',
      backgroundColor:'#2B5D78',
      margin: '.5rem',
      padding: ['.25rem 1rem']
    };
  

    return (
    <header style={header}>
        <a style={empty} href='#'><img style={logo}
          src='public/ycHEAD.png'/></a>
        <p style={slogan}>One Calendar for All of Yerevan's Tech Events</p>
      <nav style={headerLinks}>
          <ul style={siteNav}>
             <li><a style={siteNavSpec} href='#0'>Home</a></li>
             <li><a style={siteNavSpec} href='#0'>About</a></li>
           </ul>
         <ul style={accNav}>
	         <li><a style={accNavSpec} href='#0'>Login</a></li>
	         <li><a style={accNavSpec} href='#0'>SignUp</a></li>
	         <li><a style={accNavSpec} href='#0'>Forgot</a></li>
         </ul>
       </nav>

     </header>

    );
  }
};
