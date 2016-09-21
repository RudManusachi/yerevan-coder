"use strict";

import React from 'react';

export default
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
	  <li style={listyle}>About</li>
	</ul>
      </div>
    );
  }
};
