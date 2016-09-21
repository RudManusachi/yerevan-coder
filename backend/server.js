"use strict";

const express = require('express'),
      body_parser = require('body-parser'),
      fs = require('fs'),
      yerevan_coder = express();

const json_parser = body_parser.json();

yerevan_coder.get('/', (req, res) => {
  fs.readFile('public/index.html', (err, file_data) => {
    res.end(file_data);
  });
});

yerevan_coder.post('/add_event', json_parser, (req, res) => {
  console.log(req.body);
  res.end(JSON.stringify({result:"success"}));
});

yerevan_coder.get('/init_cal_data', (req, res) => {
  let example_data = [{
    'title': 'Long Event',
    'allDay':true,
    'start': (new Date(2016, 8, 17)).getTime(),
    'end': (new Date(2016, 8, 20)).getTime(),
    'desc': 'Big conference for important people'
  }];
  res.end(JSON.stringify(example_data));
});

yerevan_coder.use(express.static('.'));

yerevan_coder.listen(8080, () => {
  console.log('Created a server');
});
