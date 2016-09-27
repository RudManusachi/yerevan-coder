"use strict";

import React from 'react';

export default
class SideBar extends React.Component {
  render() {
    let style = {
      alignSelf: 'flexEnd',
      flexDirection: 'column',
      justifyContent: 'center',
      listStyle: 'none',
      width: '9em',
      backgroundColor: 'rgba(225,135,40,0.2)',
      color: '#484848',
      verticalAlign: 'middle',
      paddingTop: '1rem',
      clear: 'both'

    };
    let listyle = {
      textAlign: 'center',
      padding: '20px',
      textDecoration: 'none',
      
     
    }; 

    return (
      <div style={style}>
	<ul>
	  <li style={listyle}><a href='#0'>Home</a></li>
	  <li style={listyle}><a href='#0'>About</a></li>
	</ul>
      </div>
    );
  }
};
