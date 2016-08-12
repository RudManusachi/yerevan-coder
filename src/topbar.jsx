const React = require('react');

module.exports = class _ extends React.Component {
  render () {
    let nav_style = {display:'flex',
		     flexDirection:'row',
		     flexWrap:'nowrap',
		     marginTop:'0.75em',
		     marginLeft:'0.75em',
		     lineHeight:'5em',
		     marginRight:'0.75em',
		     paddingLeft:'1em',
		     paddingRight:'1em',
		     backgroundColor:'darkgrey',
		     justifyContent: 'space-between',
		     alignContent:'flex-end',
		     alignItems:'flex-end'},
	links_style = {wordSpacing:'0.10em'},
	a_style = {textDecoration:'none',
		   color:'black'};

    return (
      <nav style={nav_style}>
	<h1> A SF programmer in Yerevan </h1>
	<div style={links_style}>
	  <a style={a_style}
	     href={"http://twitter.com/edgararout"}> twitter </a>
	  <a style={a_style}
	     href={"http://github.com/fxfactorial"}> github </a>
	</div>	
      </nav>
    );
  }
};
