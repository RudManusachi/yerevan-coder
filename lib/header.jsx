"use strict";

import React from 'react';

export default
class Header extends React.Component {
  render() {
    let style = {
      flexDirection: 'row',
      justifyContent: 'center',
      whiteSpace: 'noWrap',
      height: '6rem',
      width: '100%',
      backgroundColor: 'rgba(225,135,40,0.2)',
      color: '#484848',
      padding: '1rem'
    };
    let hstyle = {
      fontStyle: 'italic',
      textAlign: 'center',
      paddingLeft: '2rem',
      paddingTop: '1rem',
      paddingBottom: '.5rem',
      paddingRight: '2rem',
      fontSize: '3rem',
      marginBottom: '1rem', 
      display: 'inline'
      
    };
    let logo = {
      width: '100px',
      height: '100px',
      borderRadius:'50%',
      overflow: 'hidden'
    };
    let sidelink = {
      display: 'inline',
      fontFamily: 'helvetica',
      justifyContent: 'flexEnd',
      alignItems: 'flexEnd',
      padding: '.5rem'
    };

    return (
      <div style={style}>
	<img style={logo} src='public/yclogo.png'/>
	<h4 style={hstyle}>YEREVAN CODER</h4>
	<h6 style={sidelink}>LOGIN</h6>
	<h6 style={sidelink}>SIGNUP</h6>
	<h6 style={sidelink}>FORGOT</h6>
      </div>
    );
  }
};
