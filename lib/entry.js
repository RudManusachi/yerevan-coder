import React from 'react';
import { render } from 'react-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

const md = window.markdownit();

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

  s = {
    overflowY: 'scroll'
  }

  render () {
    return (
      <div className={this.props.className}
           style={{...this.props.style, ...this.s}}>
        <p> Blog component </p>
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

  s = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }

  render () {
    return (
      <div style={{...this.props.style, ...this.s}}>
        <p> Login screen </p>
      </div>
    );
  }
};

class Content extends Component {
  render() {
    const s = {
      minWidth: '80%',
      marginLeft:'2%',
      backgroundColor:siteColors.middleBlue,
      boxShadow: 'inset 0 0 10px #000000'
    };
    const aboutStyle = {
      color:siteColors.textColor
    };
    const contentComponent = (c => {
      switch (c) {
      case 'About': return <About className={'non-calendar-content'}
                                  style={aboutStyle}/>;
      case 'Blog': return <Blog className={'non-calendar-content'}
                                style={aboutStyle}/>;
      case 'Login':return <Login style={aboutStyle}/>;
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
          <em style={banner_s}> Yerevan Coder </em>
        </h1>
      </header>
    );
  }
};

class App extends Component {

  constructor () {
    super();
    this.state = {contentChoice: 0, isLoggedIn: false};
  }

  static defaultProps = {
    topics: ['About', 'Blog', 'Tech Events', 'Login']
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
            <Content contentShow={this.props.topics[this.state.contentChoice]}/>
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

render(<App/>, document.getElementById('container'));
