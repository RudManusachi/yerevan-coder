"use strict";

import React from 'react';

class SideBar extends React.Component {
  render() {
    let style = {
      alignSelf: 'flexEnd',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '500px',
      width: '150px',
      backgroundColor: 'rgba(225,135,40,0.2)',
      color: '#484848',
      verticalAlign: 'middle',
      paddingTop: '2rem'

    };
    let listyle = {
      textAlign: 'center',
      padding: '1rem',
      fontFamily: 'helvetica'
    }; 

    return (
      <div style={style}>
	<ul>
	  <li style={listyle}>Home</li>
	  <li style={listyle}>Add Event</li>
	  <li style={listyle}>About</li>
	</ul>
      </div>
    );
  }
};


class Head extends React.Component {
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


export {SideBar, Head};
