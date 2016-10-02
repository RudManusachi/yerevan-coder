"use strict";

import React from 'react';
export default
class SubHeader extends React.Component {
  render() {
let subHead = {
  display: 'flex',
  width: '100%',
  height: '50px',
  backgroundColor: '#B8BBBD',
  justifyContent: 'center'
};
let subHLinks = {
  listStyle: 'none',
  display: 'flex',
  paddingRight: '95px'
};
let tabs = {
  textDecoration: 'none',
  backgroundColor: '#60859A',
  color: '#F4F9FC',
  marginTop: '1rem',
  padding: ['.5rem .5rem'],
  height: '50%'

};
return (

  <div style={subHead}>
    <ul style={subHLinks}>
      <li><a style={tabs} href='#0'>Tab1</a></li>
      <li><a style={tabs} href='#0'>Tab2</a></li>
    </ul>
  </div>

    );
  }
};