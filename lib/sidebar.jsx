"use strict";

import React from 'react';

export default
class SideBar extends React.Component {
  render() {
    let style = {
      listStyle: 'none',
      width: '9em',
      backgroundColor: 'rgba(225,135,40,0.2)',
      color: '#484848'
    };

    let nav = {
      listStyle: 'none',
      
    };
    let item = {
     textDecoration: 'none'
    

     
    }; 

    return (
      <div style={style}>
	<ul style={nav}>
	  <li><a style={item} href='#0'>Home</a></li>
	  <li><a style={item} href='#0'>About</a></li>
	</ul>
      </div>
    );
  }
};
