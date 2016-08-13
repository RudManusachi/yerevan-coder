"use strict";

const express = require('express'),
      browserify = require('browserify'),
      body_parser = require('body-parser'),
      through = require('through'),
      fs = require('fs'),
      babel = require('babel-standalone'),
      yerevan_coder = express();

yerevan_coder.get('/', (req, res) => {
  fs.readFile('public/index.html', (err, file_data) => {
    res.end(file_data);
  });
});

yerevan_coder.get("/*.jsx", (req, res) => {
  const f =
	browserify('.' + req.path)
	.transform(file => {
	  let data = '';
	  return through(buf => data += buf, end);
	  function end() {
	    this.queue(
	      babel.transform(data,
			      // the es2015 is because of Safari
			      // not keeping up with Chrome and
			      // others
			      {presets:['react', 'es2015']}).code
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
