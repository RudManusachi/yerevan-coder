"use strict";

import React from 'react';
export default
class Header extends React.Component {
  render() {
    let header = {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#F4F9FC',
      color: '#D0DDE4',
      padding: '2%',
      maxWidth: '100%'
    };

    let logo = {
      display: 'flex',
      width: '40%',
      margin: 'auto',
      paddingRight: '8.5%'
    };
    let slogan = {
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '1rem',
      paddingRight: '8%'
    };
    let headerLinks = {
      display: 'flex',
      fontSize: '1rem'
    };
    let siteNav = {
      display: 'flex',
      listStyle: 'none'
    };
    let siteNavSpec = {
      textDecoration: 'none',
      backgroundColor:'#9B4408',
      color: '#F4F9FC',
      margin: '.5rem',
      padding: ['.25rem 1rem']

    };
    let accNav = {
      display: 'flex',
      listStyle: 'none',
      marginLeft: 'auto'
    };
     let accNavSpec = {
      textDecoration: 'none',
      backgroundColor:'#2B5D78',
      color: '#F4F9FC',
      margin: '.5rem',
      padding: ['.25rem 1rem']
    };


    return (
    <header style={header}>
      <div>
        <img style={logo} src='public/ycHEAD.png'/>
      </div>
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
