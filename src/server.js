"use strict";

const l = console.log;

const express = require('express'),
      ReactDOMServer = require('react-dom/server'),
      body_parser = require('body-parser'),
      fs = require('fs'),
      React = require('react'),
      babel = require('babel-standalone'),
      yerevan_coder = express();

yerevan_coder.get('/', (req, res) => {

  const homepage_jsx = fs.readFileSync('src/homepage.jsx');
  const compiled = babel.transform(homepage_jsx, {presets:['react']}).code;
  const result = React.createElement(eval(compiled), null);
  const rendered = ReactDOMServer.renderToStaticMarkup(result);
  res.end(rendered);

});

yerevan_coder.use(express.static('.'));

yerevan_coder.listen(8080, () => {
  console.log('Created a server');
});
