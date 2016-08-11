"use strict";

const express = require('express'),
      ReactDOMServer = require('react-dom/server'),
      body_parser = require('body-parser'),
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
  fs.readFile('.' + req.path, (err, file_data) => {
    // console.log(err);

    // console.log(file_data);
    const compiled = babel.transform(file_data,
				     {presets:['react']}).code;
    console.log(compiled);

    res.end(compiled);
    // console.log(eval(compiled));
    // res.end(eval(compiled));
  });
});

yerevan_coder.use(express.static('.'));

yerevan_coder.listen(8080, () => {
  console.log('Created a server');
});
