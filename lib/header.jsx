"use strict";

import React from 'react';

export default
class Header extends React.Component {
  render() {
    let style = {
      display: 'inline-block',
      backgroundColor: 'rgba(225,135,40,0.2)',
      color: '#484848',
      padding: '1rem',
      width: '100%'
    };

   

    let head = {
      maxWidth: '450px',
      
    };

    let account = {
      display: 'inline-flex',
      listStyle: 'none'
    };

     let item = {
      textDecoration: 'none',
      padding: '.5rem'
      
      

    };

    return (
      <div style={style}>

	       <img style={head} src='public/ycHEAD.png'/>
         <ul style={account}>
	         <li><a style={item} href='#0'>Login</a></li>
	         <li><a style={item} href='#0'>SignUp</a></li>
	         <li><a style={item} href='#0'>Forgot</a></li>
         </ul>
      </div>
    );
  }
};
