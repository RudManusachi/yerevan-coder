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
      height: '75px',
      backgroundColor: '#B8BBBD'
    };
    let tabs = {
      textDecoration: 'none',
      color: '#F4F9FC',
      padding: ['.5rem 1.5rem'],
      height: '50%'
    };

    let openButton = {
      border: 'none',
      backgroundColor: '#B8BBBD'
    };

    let modalCont = {
      overlay: {
        backgroundColor: '#F4F9FC'
      },
      content: {
        top: '75px',
        borderRadius: '10px'

      }
    };

    let xButton = {
      marginLeft: 'auto',
      padding: ['0 .5rem'],
      fontFamily: ['Poppins, sans-serif'],
      justifyContent: 'flex-end'
    };


    return (
    <header style={home}>

      <div style={hello}>
        <img style={logo} src='public/ycHEAD.png'/>
        <p style={slogan}>One Calendar for All of Yerevan's Tech Events</p>
      </div>

       <div style={subContainer}>
         <ul style={modalDirectory}>

            <button onClick={this.openModal} style={openButton}>
              <li><a style={tabs}>Enter
              </a></li></button>
            <Modal
              style={modalCont}
              isOpen={this.state.open}>
              <p>Calendar</p>
                <button onClick={this.closeModal}
                  style={xButton}>x</button>
            </Modal>

            <button onClick={this.openModal} style={openButton}>
              <li><a style={tabs}>Login
              </a></li></button>
            <Modal
              style={modalCont}
              isOpen={this.state.open}>
              <p>Account</p>
                <button onClick={this.closeModal}
                  style={xButton}>x</button>
            </Modal>

            <button onClick={this.openModal} style={openButton}>
              <li><a style={tabs}>Meet Us
              </a></li></button>
            <Modal
              style={modalCont}
              isOpen={this.state.open}>
              <p>Say Hello!</p>
                <button onClick={this.closeModal}
                  style={xButton}>x</button>
            </Modal>

            <button onClick={this.openModal} style={openButton}>
              <li><a style={tabs}>About
              </a></li></button>
            <Modal
              style={modalCont}
              isOpen={this.state.open}>
              <p></p>
              <button onClick={this.closeModal}
                style={xButton}>x</button>
            </Modal>

         </ul>
       </div>
     </header>

    );
  }
};
