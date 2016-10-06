"use strict";

var Modal = require('react-modal');

import React from 'react';
export default
class Header extends React.Component {
  constructor () {
     super();
     this.state = {open:false}
     this.openModal = this.openModal.bind(this);
     this.closeModal = this.closeModal.bind(this);
   }
   openModal () {
      this.setState({open: true}); }
   closeModal () {
     this.setState({open: false}); }
  render() {
    let home = {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#F4F9FC',
      color: '#D0DDE4',
      width: '100%'
    };
    let hello = {
      padding: '30%',
      top: '102px'
    };
    let logo = {
      display: 'flex',
      width: '95%'
    };
    let slogan = {
      display: 'flex',
      justifyContent: 'center'
    };
    let subContainer = {
      display: 'flex',
      zIndex: '9999',
      position: 'fixed',
      width: '100%'

    };
    let modalDirectory = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      listStyle: 'none',
      fontSize: '2rem',
      width: '100%',
      height: '100px',
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
    let modal = {

    };

    let modal1 = {

    };
    let mamaModal = {

    };

    let modal2 = {
    };
    let modal3 = {

    };
    let modal4 = {


    };


    return (
    <header style={home}>
      <div style={hello}>
        <img style={logo} src='public/ycHEAD.png'/>
        <p style={slogan}>One Calendar for All of Yerevan's Tech Events</p>
      </div>

       <div style={subContainer}>
         <ul style={modalDirectory}>
          <li><a style={tabs0} href='#calendar'>Enter</a></li>
          <li><a style={tabs1} href='#account'>Login</a></li>
          <li><a style={tabs2} href='#groups'>Meet Us</a></li>
          <li><a style={tabs3} href='#about'>About</a></li>
         </ul>
       </div>

       <div>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal isOpen={this.state.open}>
            <h1>Basic Modal</h1>
            <button onClick={this.closeModal}>Close</button>
            <input />
            <input />
          </Modal>
        </div>

     <content>

         <div style={modal} id={'calendar'}>
          <div style={modal1}>
            <a href='#'>Close</a>
          </div>
         </div>


          <div style={modal} id={'account'}>
            <div style={modal2}>
              <a href='#'>Close</a>
            </div>
          </div>

          <div style={modal} id={'groups'}>
            <div style={modal3}>
              <a href='#'>Close</a>
            </div>
          </div>

          <div style={modal} id={'about'}>
            <div style={modal4}>
              <a href='#'>Close</a>
            </div>
          </div>

     </content>
     </header>

    );
  }
};
