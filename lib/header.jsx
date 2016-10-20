"use strict";

var Modal = require('react-modal');
import BigCalendar from 'react-big-calendar';
import React from 'react';
import moment from 'moment';
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

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
    let meetUsLinks = {
      textDecoration:'none',
      padding: '.5rem'
    };

    let xButton = {
      color: '#F4F9FC',
      padding: ['0 .5rem'],
      margin: '.25rem',
      border: 'none',
      backgroundColor: '#6E6D74',
      fontFamily: ['Poppins, sans-serif'],


    };
    let accButton = {
      color: '#F4F9FC',
      padding: ['0 .5rem'],
      margin: '.25rem',
      border: 'none',
      backgroundColor: '#6E6D74',
      fontFamily: ['Poppins, sans-serif'],

    };

    let accountForm = {
      display: 'inline-flex',
      minHeight: '50%'
    };
    let account = {
      padding: '.5rem',
      backgroundColor: '#F4F9FC',
      fontWeight: '400'
    };
    let inputBox = {
      margin: '.25rem'
    };

    let cal = {
        top: '45px',
        left: '45px',
        right: '45px',
        bottom: '45px',
        overflowY: 'scroll',
        overflowX: 'scroll'
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
              onClick={() => this.openModal('account')}
              style={tabs}>
              Login
            </button>
          </li>

          <li>
            <button
              onClick={() => this.openModal('about')}
              style={tabs}>
              Meet Us
            </button>
          </li>

          <li>
            <button
              onClick={() => this.openModal('calendar')}
              style={tabs}>
              Event Calendar
            </button>
          </li>

        </ul>
      </div>


      <Modal
        style={modalCont}
        isOpen={this.state.activeModal === 'account'}>
        <form class='pureForm pureFormStacked'
          style={accountForm}>
          <fieldset style={account}>
            <legend>Account Sign In</legend>
              <input
                type='email'
                placeholder='Email'
                style={inputBox} />
              <input
                type='password'
                placeholder='Password'
                style={inputBox}/>
              <button
                type='submit'
                class='pureButton pureButtonPrimary'
                style={accButton}>
                Sign In
              </button>
          </fieldset>

          <fieldset style={account}>
            <legend>Create Account</legend>
              <input
                type='email'
                placeholder='Email'
                style={inputBox}/>
              <input
                type='password'
                placeholder='Password'
                style={inputBox}/>
              <input
                type='username'
                placeholder='Username'
                style={inputBox} />
              <button
                type='submit'
                class='pureButton pureButtonPrimary'
                style={accButton}>
                Create Account
              </button>
          </fieldset>

          <fieldset style={account}>
            <legend>Forgot Password</legend>
              <input
                type='email'
                placeholder='Email'
                style={inputBox} />
              <button
                type='reset'
                class='pureButton pureButtonPrimary'
                style={accButton}>
                Reset Password
              </button>
          </fieldset>
        </form>
          <button onClick={this.closeModal}
            style={xButton}>x</button>
      </Modal>

      <Modal
        style={modalCont}
        isOpen={this.state.activeModal === 'about'}>
        <p>Check out our other website
          <a style={meetUsLinks} href='https://iteratehackerspace.github.io/'>
          iteratehackerspace
          </a>
            or connect with us on
          <a style={meetUsLinks} href='https://www.facebook.com/groups/410797219090898/'>
            Facebook
          </a>
        </p>
          <button onClick={this.closeModal}
            style={xButton}>x</button>
      </Modal>

      <Modal
        style={modalCont}
        isOpen={this.state.activeModal === 'calendar'}>
        <div>
          <BigCalendar
            id={'downSize'}
            style={cal}
    	      selectable
    	      onSelectSlot={this.selected_date}
    	      events={this.state.cal_data}/>
        </div>
          <button onClick={this.closeModal}
            style={xButton}>x</button>
      </Modal>
     </header>
    );
  }
};
