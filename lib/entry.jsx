import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// const md = window.markdownit();

BigCalendar.momentLocalizer(moment);

const { Component, PropTypes } = React;

const siteColors = {
  topRed: '#d90012',
  middleBlue: '#0033a0',
  bottomOrange: '#f2a800',
  textColor:'#dddada'
};

class About extends Component {
  render () {
    const karabakhWar =
          'https://en.wikipedia.org/wiki/2016_Armenian%E2%80%93Azerbaijani_clashes';
    const devils =
          'https://en.wikipedia.org/wiki/2016_Yerevan_hostage_crisis';
    const iterate =
          'https://iteratehackerspace.github.io';
    return (
      <div style={{...this.props.style}} className={this.props.className}>
        <p>
          My name is Edgar Aroutiounian, I'm an Armenian-American
          programmer from the Bay Area, CA. I worked professionally
          in San Francisco CA, Jersey City, NJ.
        </p>
        <p>
          During late July 2016 I decided within a 36-hour period to
          drop everything and move to Armenia; I had been preparing
          for interviews with various well known Bay Area tech companies but
          the April 2016 <a href={karabakhWar}>four-day</a> war with Azerbaijan
          and the <a href={devils}>Erebuni Police Station crisis</a> pushed me
          over the edge.
        </p>
        <p>
          Since coming to Armenia I've created a hackerspace in Yerevan,
          the capital city, called <a href={iterate}> iterate</a>. You can
          most likely find me there during the week.
        </p>
      </div>
    );
  }
};

class Blog extends Component {

  test = _ => {
    const editor_content = this.editor.querySelector('trix-editor').value;
    // need to send it off
  }

  render () {
    const editorStyle = {
      backgroundColor:'white',
      boxShadow: 'inset 0 0 10px #000000',
      padding:'1.5em 1.5em 1.5em 1.5em'
    };
    const trix = `
<trix-editor></trix-editor>
`;
    const blogEntry = {
      display:'flex',
      flexDirection:'column'
    };

    return (
      <div className={this.props.className}
           style={{...this.props.style, ...blogEntry}}>
        <div style={editorStyle}
             className={'blog-container'}
             ref={handle => this.editor = handle}
          dangerouslySetInnerHTML={{__html:trix}}/>
          <button onClick={this.test}
                  style={{marginLeft:'auto', marginTop:'1em'}}>
            Submit blog post
          </button>
        </div>
    );
  }
};

class TechCalendar extends Component {

  selectedDate = e => {
    console.log(e);
  }

  render () {
    const s = {
      backgroundColor:'white'
    };
    return (
      <BigCalendar
        style={s}
        selectable
        popup
        onSelectSlot={this.selectedDate}
        events={[]}
        />
    );
  }
};

class Login extends Component {

  constructor(p) {
    super(p);
    this.state = {username: '', password:''};
  }

  tryLogin = e => {
    e.preventDefault();
    this.props.doLogin(this.state);
    this.setState({username:'', password:''});
  };

  registerAccount = e => {
    console.log(this.props);
  };

  render () {
    const formContainer = {
      marginTop:'25%',
      height:'50%'
    };
    const formStyle = {
      display:'flex',
      padding:'1% 1% 1% 1%',
      width:'50%',
      height:'100%',
      boxShadow: 'inset 0 0 10px #000000',
      margin:'0 auto',
      flexDirection:'column',
      justifyContent:'center',
      backgroundColor:'white'
    };
    const flexy = {display:'flex', flexDirection:'column'};
    const ui = (isLoggedIn => {
      if (isLoggedIn === false) {
        return (
          <form style={formStyle}
                onSubmit={this.tryLogin}
                className={'form-login'}>
            <p>Login so that you can write blog posts or add tech events.</p>
            <hr/>
            <div style={flexy}>
              <label>Username</label>
              <input type={'text'}
                     placeholder={'someusername'}
                     onChange={e =>
                this.setState({...this.state, username:e.target.value})}
                value={this.state.username}/>
            </div>
            <div style={flexy}>
              <label>Password</label>
              <input type={'password'}
                     placeholder={'not a serious password'}
                     value={this.state.password}
                     onChange={e =>
                this.setState({...this.state, password:e.target.value})}
                />
            </div>
            <div style={flexy}>
              <input type={'submit'} value={'Sign in'}/>
              <input type={'button'}
                     onClick={this.registerAccount}
                     value={'Register an account'}/>
            </div>
          </form>
        );
      } else {
        return (
          <div style={formStyle} className={'form-login'}>
            <p style={{textAlign:'center'}}>
              Logged in, you can add events to the tech calendar
            </p>
          </div>
        );
      }
    });
    return (
      <div style={formContainer}>
        {ui(this.props.isLoggedIn)}
      </div>
    );
  }
};

class Content extends Component {
  render() {
    const s = {
      minWidth: '80%',
      marginLeft:'2%',
      filter:'grayscale(50%)',
      backgroundColor:siteColors.middleBlue,
      boxShadow: 'inset 0 0 10px #000000'
    };
    const aboutStyle = {
      color:siteColors.textColor
    };
    const contentComponent = (c => {
      switch (c) {
      case 'About':
        return (
          <About className={'non-calendar-content'}
                 style={aboutStyle}/>
        );
      case 'Blog':
        return (
          <Blog className={'non-calendar-content'}
                style={aboutStyle}/>
        );
      case 'Login':
        return (
          <Login isLoggedIn={this.props.isLoggedIn}
                 doLogin={this.props.doLogin}
                 style={aboutStyle}/>
        );
      default: return <TechCalendar/>;
      }
    })(this.props.contentShow);

    return (
      <section style={s}>
        {contentComponent}
      </section>
    );
  }
};

class SideBar extends Component {

  changeContent = (k, _) => this.props.contentChoice(k)

  render () {
    const sect_s = {
      textAlign:'center',
      filter:'grayscale(50%)',
      backgroundColor:siteColors.middleBlue,
      boxShadow: 'inset 0 0 10px #000000',
      maxWidth: '18%',
      minWidth: '18%'
    };
    const li_style = {
      // Goes top right bottom left
      padding:'1em 1em 1em 1em',
      transition:'color 0.50s ease-in'
    };
    const items = this.props.topics.map((item, idx) => {
      return (
        <li style={li_style}
            className={'side-bar-choice'}
            title={(t => {
              switch (item) {
              case 'About':
                return 'A short description about me, motivations';
              case 'Blog':
                return 'Blog with various Armenian programmers writing posts';
              case 'Tech Events':
                return 'One stop shop for tech events in Yerevan';
              case 'Login':
                return 'Login to get the ability to write blog posts, add tech events';
              default: return '';
              }
          })(item)}
          key={idx}
          onClick={this.changeContent.bind(this, idx)}>
          <h4>{item}</h4>
        </li>
      );
    });
    return (
      <section style={sect_s}>
        <ul style={{listStyleType:'none'}}>
          {items}
        </ul>
      </section>
    );
  }
};

class TopBar extends Component {
  render () {
    const s = {
      backgroundColor:siteColors.topRed,
      boxShadow: 'inset 0 0 10px #000000',
      paddingLeft:'0.5em',
      marginLeft:'2vw',
      marginRight:'2vw',
      filter:'grayscale(40%)',
      maxHeight:'10vh'
    };
    const banner_s = {
      display:'flex',
      alignItems:'center',
      paddingLeft:'0.5em',
      color:siteColors.textColor
    };
    return (
      <header style={s}>
        <h1>
          <em style={banner_s}>հայերեն ծրագրավորող (Armenian Coder)</em>
        </h1>
      </header>
    );
  }
};

export default
class App extends Component {

  constructor () {
    super();
    this.state = {contentChoice: 1, isLoggedIn: false};
  }

  static defaultProps = {
    topics: ['About', 'Blog', 'Tech Events', 'Login']
  }

  doLogin = loginParams => {
    const post_params = {
      method:'post',
      body:JSON.stringify(loginParams),
      headers:new Headers({
        'content-type':'application/json'
      })
    };
    fetch('/login', post_params)
      .then(respP => respP.json())
      .then(resp => {
        console.log(resp);
        this.setState({contentChoice:3, isLoggedIn:true});
      });
  }

  render () {
    const lower_style = {
      marginTop:'2vh',
      marginRight:'2vw',
      marginLeft:'2vw',
      display:'flex',
      minHeight:'78vh'
    };

    const footer_s = {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'2vh',
      marginLeft:'2vw',
      marginRight:'2vw',
      minHeight:'8vh',
      paddingLeft:'0.5em',
      color:siteColors.textColor,
      boxShadow: 'inset 0 0 10px #000000',
      filter:'grayscale(40%)',
      backgroundColor:siteColors.bottomOrange
    };
    const yCoder = 'https://github.com/fxfactorial/yerevan-coder';
    return (
      <div style={{minHeight:'100vh', opacity:'0.95'}}>
        <TopBar/>
        <div style={lower_style}>
          <SideBar
            topics={this.props.topics}
            contentChoice={viewChoice => this.setState({contentChoice:viewChoice})}
            />
            <Content contentShow={this.props.topics[this.state.contentChoice]}
                     doLogin={this.doLogin}
                     isLoggedIn={this.state.isLoggedIn}/>
        </div>
        <footer style={footer_s}>
          <p>
            Don't like something on the site? Change it by forking
            the <a href={yCoder}>repo</a> and making a pull request.
          </p>
        </footer>
      </div>
    );
  }
};
