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
    let siteNav = {
      display: 'flex',
      listStyle: 'none'
    };
    let subHead = {
      display: 'flex',
      width: '100%',
      height: '150px',
      backgroundColor: '#B8BBBD',
      justifyContent: 'center'
    };
    let tabs0 = {
      textDecoration: 'none',
      backgroundColor: '#60859A',
      color: '#F4F9FC',
      padding: ['.25rem .5rem'],
      margin: '.5rem',
      height: '50%'
    };
    let tabs1 = {
      textDecoration: 'none',
      backgroundColor: '#60859A',
      color: '#F4F9FC',
      padding: ['.25rem .5rem'],
      margin: '.5rem',
      height: '50%'
    };
    let tabs2 = {
      textDecoration: 'none',
      backgroundColor: '#60859A',
      color: '#F4F9FC',
      padding: ['.25rem .5rem'],
      margin: '.5rem',
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
    <header style={header}>
      <div style={hello}>
        <img style={logo} src='public/ycHEAD.png'/>
        <p style={slogan}>One Calendar for All of Yerevan's Tech Events</p>
      </div>

       <div style={subContainer}>
         <ul style={directory}>
          <li><a style={tabs0} href='#about'>About</a></li>
          <li><a style={tabs1} href='#login'>Login</a></li>
          <li><a style={tabs1} href='#signup'>SignUp</a></li>
          <li><a style={tabs1} href='#forgot'>Forgot</a></li>
          <li><a style={tabs2} href='#iterate'>Iterate<br/>Hackerspace</a></li>
          <li><a style={tabs2} href='#connect'>Meet<br/>Us</a></li>
         </ul>
       </div>

     <content>
       <div style={page1}>
           <a id={'about'}>information about site, why it was made</a>
       </div>

       <div style={page2}>
           <a id={'account'}>login stuffs</a>
           <a id={'account'}>signup credentials</a>
           <a id={'account'}>steps to take</a>
       </div>


       <div style={page3}>
           <a id={'iterate'}>about iterate hackerspace</a>
       </div>

       <div style={page4}>
           <a id={'connect'}>link to meetup and facebook group</a>
       </div>
     </content>
     </header>

    );
  }
};
