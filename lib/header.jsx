"use strict";

var Modal = require('react-modal');
import BigCalendar from 'react-big-calendar';
import React from 'react';
export default
class Header extends React.Component {
  constructor () {
     super();
     this.state = {
       activeModal: null
     };

     this.openModal = this.openModal.bind(this);
     this.closeModal = this.closeModal.bind(this);
    //  this.handleModalChangeEnter = this.handleModalChange.bind(this, true);
    //  this.handleModalChangeLogin = this.handleModalChange.bind(this, false);
  }
  openModal (modalName) {
     this.setState({
       activeModal: modalName
     });
  }
  closeModal () {
     this.setState({
       activeModal: null
     });
  }
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
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '2rem',
      width: '100%',
      height: '75px',
      backgroundColor: '#B8BBBD'
    };
    let allTabs = {
      display: 'flex',
      listStyle: 'none'

    };
    let tabs = {
      textDecoration: 'none',
      color: '#F4F9FC',
      padding: ['.5rem 1.5rem'],
      border: 'none',
      height: '50%',
      backgroundColor: '#B8BBBD',
      liStyle: 'none'
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
        <ul style={allTabs}>

          <li>
            <button
              onClick={() => this.openModal('login')}
              style={tabs}>
              Enter
            </button>
          </li>

          <li>
            <button
              onClick={() => this.openModal('calendar')}
              style={tabs}>
              Calendar
            </button>
          </li>

          <li>
            <button
              onClick={() => this.openModal('team')}
              style={tabs}>
              Meet Us
            </button>
          </li>

        </ul>
      </div>


      <Modal
        style={modalCont}
        isOpen={this.state.activeModal === 'login'}>
        <p>1!</p>
          <button onClick={this.closeModal}
            style={xButton}>x</button>
      </Modal>

      <Modal
        style={modalCont}
        isOpen={this.state.activeModal === 'calendar'}>
        <p>2!</p>
          <button onClick={this.closeModal}
            style={xButton}>x</button>
      </Modal>

      <Modal
        style={modalCont}
        isOpen={this.state.activeModal === 'team'}>
        <p>3!</p>
          <button onClick={this.closeModal}
            style={xButton}>x</button>
      </Modal>

     </header>
    );
  }
};



/*
<div style={subContainer}>
  <ul style={modalDirectory}>



  </ul>
</div>
<button onClick={this.openModal}
  style={openButton}>
  <li><a style={tabs}>Enter
  </a></li></button>
<Modal
  style={modalCont}
  isOpen={this.state.open}>
    <button onClick={this.closeModal}
      style={xButton}>x</button>
</Modal>

<button onClick={this.openModal}
  style={openButton}>
  <li><a style={tabs}>Login
  </a></li></button>
<Modal
  style={modalCont}
  isOpen={this.state.open}>
  <p>Account</p>
    <button onClick={this.closeModal()}
      style={xButton}>x</button>
</Modal>

<button onClick={this.openModal('team')}
  style={openButton}>
  <li><a style={tabs}>Meet Us
  </a></li></button>

<Modal
  style={modalCont}
  isOpen={this.state.activeModal === 'team'}>
  <p>Say Hello!</p>
    <button onClick={this.closeModal()}
      style={xButton}>x</button>
</Modal>

<button onClick={this.openModal} style={openButton}>
  <li><a style={tabs}>About
  </a></li></button>
<Modal
  style={modalCont}
  isOpen={this.state.open}>
  <p>why only this content</p>
  <button onClick={this.closeModal}
    style={xButton}>x</button>
</Modal>

*/
