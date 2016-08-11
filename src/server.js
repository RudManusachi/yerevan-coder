"use strict";

const express = require('express'),
      ReactDOMServer = require('react-dom/server'),
      browserify = require('browserify'),
      body_parser = require('body-parser'),
      through = require('through'),
      fs = require('fs'),
      React = require('react'),
      babel = require('babel-standalone'),
      yerevan_coder = express();

yerevan_coder.get('/', (req, res) => {
  fs.readFile('src/homepage.jsx', (err, file_data) => {
    const compiled = babel.transform(file_data,
				     {presets:['react']}).code,
	  homepage = eval(compiled);
    res.end(
      ReactDOMServer.renderToString(React.createElement(homepage, null))
    );
  });
});

yerevan_coder.get("/*.jsx", (req, res) => {
  const f =
	browserify('.' + req.path)
	.transform((file) => {
	  let data = '';
	  return through(write, end);
	  function write(buf) { data += buf; }
	  function end() {
	    this.queue(
	      babel.transform(data, {presets:['react']}).code
	    );
	    this.queue(null);
	  }	    
	}).bundle();
  
  f.on('readable', () => {
    let r = f.read();
    r !== null ? res.write(r) : res.end();
  });

});

yerevan_coder.use(express.static('.'));

yerevan_coder.listen(8080, () => {
  console.log('Created a server');
});
