
class HomePage extends React.Component {
  render() {
    return (
      <html>
	<body>
	  <div id="react-container"> 
	    <p> Hello World</p>
	  </div>
	  <script src="static/react.js"></script>
	  <script src="static/react-dom.js"></script>
	  <script src="src/splash.jsx"> </script>
	</body>
      </html>
    );
  }
};

module.exports = HomePage;
