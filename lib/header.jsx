"use strict";

import React from 'react';
export default
class Header extends React.Component {
  render() {
    let home = {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#F4F9FC',
      color: '#D0DDE4',
      width: '100%'
    };
    let hello = {
      padding: '20%'
    };
    let logo = {
      display: 'flex',
      width: '95%'
    };
    let slogan = {
      display: 'flex',
      justifyContent: 'center',

    };
    let subContainer = {
      display: 'flex'

    };
    let directory = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      listStyle: 'none',
      fontSize: '2rem',
      width: '100%',
      height: '150px',
      backgroundColor: '#B8BBBD'
    };
    let tabs0 = {
      textDecoration: 'none',
      color: '#F4F9FC',
      padding: ['.5rem 1.5rem'],
      height: '50%'
    };
    let tabs1 = {
      textDecoration: 'none',
      color: '#F4F9FC',
      padding: ['.5rem 1.5rem'],
      height: '50%'
    };
    let tabs2 = {
      textDecoration: 'none',
      color: '#F4F9FC',
      padding: ['.5rem 1.5rem'],
      height: '50%'
    };
    let tabs3 = {
      textDecoration: 'none',
      color: '#F4F9FC',
      padding: ['.5rem 1.5rem'],
      height: '50%'
    };
    let page1 = {
      display: 'flex',
      width: '100%',
      height: '1000px',
      background:'#F4F7FC',
      color:'#B7BBBD'
    };
    let page2 = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '1000px',
      background: '#F4F5FC',
      color:'#B7BBBD'
    };
    let page3 = {
      display: 'flex',
      width: '100%',
      height: '1000px',
      background: '#F4F5FC',
      color:'#B7BBBD'
    };
    let page4 = {
      display: 'flex',
      width: '100%',
      height: '1000px',
      background: '#F4F5FC',
      color:'#B7BBBD'
    };


    return (
    <header style={home}>
      <div style={hello}>
        <img style={logo} src='public/ycHEAD.png'/>
        <p style={slogan}>One Calendar for All of Yerevan's Tech Events</p>
      </div>

       <div style={subContainer}>
         <ul style={directory}>
          <li><a style={tabs0} href='#calendar'>Enter</a></li>
          <li><a style={tabs1} href='#account'>Login</a></li>
          <li><a style={tabs2} href='#groups'>Meet Us</a></li>
          <li><a style={tabs3} href='#about'>About</a></li>
         </ul>
       </div>

     <content>
       <div style={page1}>
          <a id={'calendar'}>figure out how to get cal in here</a>
       </div>
       <div style={page2}>
          <a id={'account'}>account login</a>
          <a id={'account'}>account signup</a>
          <a id={'account'}>account forgot</a>
       </div>
       <div style={page3}>
          <a id={'groups'}>iterate, meetUp account, facebook</a>
       </div>
       <div style={page4}>
          <a id={'About'}>how site was made, etc.</a>
       </div>
     </content>
     </header>

    );
  }
};
