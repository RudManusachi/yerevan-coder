"use strict";

import React from 'react';

export default
class Header extends React.Component {
  render() {
    let style = {
      flexDirection: 'row',
    
      whiteSpace: 'noWrap',
     
     
      backgroundColor: 'rgba(225,135,40,0.2)',
      color: '#484848',
      padding: '1em'
    };

   

    let head = {
      paddingLeft: '6em',
      
      maxWidth: '30em',
      display: 'inline'
      
    };

    let sidelink = {
      display: 'inline',
      justifyContent: 'flexEnd',
      alignItems: 'flexEnd',
      padding: '2em',
      float: 'right',
      listStyle: 'none'
    };

     let item = {
      display: 'inline',
      padding: '1em'
    };

    return (
      <div style={style}>

	       <img style={head} src='public/ycHEAD.png'/>
         <ul style={sidelink}>
	         <li style={item}>Login </li>
	         <li style={item}>SignUp </li>
	         <li style={item}>Forgot </li>
         </ul>
      </div>
    );
  }
};
