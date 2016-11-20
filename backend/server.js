'use strict';

const express = require('express');
const createElement = require('react').createElement;
const renderToString  = require('react-dom/server').renderToString;
const frontend = require('../lib/entry').default;
const body_parser = require('body-parser');
const session = require('express-session');

const yc = express();
const json_parser = body_parser.json();
const form_parser = body_parser.urlencoded({extended: true});

yc.use(require('helmet')());
yc.use(express.static('public'));
yc.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

const posts = [
  {author: 'Edgar Aroutiounian',
   date: new Date,
   title:'Coming to Armenia',
   tags: ['Armenia', 'Repat'],
   post: 'This is an example blog post'},
  {author: 'Edgar Aroutiounian',
   date: new Date,
   title:'Coming to Armenia',
   tags: ['Armenia', 'Repat'],
   post: 'This is an example blog post'},
  {author: 'Edgar Aroutiounian',
   date: new Date,
   title:'Coming to Armenia',
   tags: ['Armenia', 'Repat'],
   post: 'This is an example blog post'},
  {author: 'Edgar Aroutiounian',
   date: new Date,
   title:'Coming to Armenia',
   tags: ['Armenia', 'Repat'],
   post: 'This is an example blog post'},
  {author: 'Edgar Aroutiounian',
   date: new Date,
   title:'Coming to Armenia',
   tags: ['Armenia', 'Repat'],
   post: 'This is an example blog post'},
  {author: 'Edgar Aroutiounian',
   date: new Date,
   title:'Coming to Armenia',
   tags: ['Armenia', 'Repat'],
   post: 'This is an example blog post'},
  {author: 'Edgar Aroutiounian',
   date: new Date,
   title:'Coming to Armenia',
   tags: ['Armenia', 'Repat'],
   post: 'This is an example blog post'},
  {author: 'Another Person',
   date: new Date,
   title:'Coming to Armenia',
   tags: ['Armenia', 'Coding'],
   post: 'Another example blog post'}
];

const rendered = renderToString(createElement(frontend, null));
const font =
      'https://fonts.googleapis.com/css?family=Poppins';
const video_opts =
      'playsinline autoplay muted loop';

const site =`
<!doctype html>
<meta charset="utf-8">
<head>
  <link href="${font}" rel="stylesheet">
  <link rel="shortcut icon" type="image/x-icon" href="public/favicon.ico">
  <link href="styles.css" rel="stylesheet" type="text/css">
  <link href="react-big-calendar.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" type="text/css" href="trix.css">
  <script type="text/javascript" src="trix.js"></script>
  <script>
    // This way we avoid a needless HTTP request
    window.__ALL_BLOG_POSTS__ = ${JSON.stringify(posts)}
  </script>
</head>
<body>
  <video ${video_opts} poster="Dancing-Bulbs.jpg" id="bgvid">
    <source src="Dancing-Bulbs.webm" type="video/webm">
  </video>
  <div id='container'>${rendered}</div>
  <script src='bundle.js'></script>
</body>
`;

yc.get('/', (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.end(site);
});

yc.post('/login', json_parser, form_parser, (req, res) => {
  const {username, password} = req.body;
  console.log(username);
  res.end(JSON.stringify({result:'success'}));
});

yc.post('/add-blog-post', json_parser, (req, res) => {
  res.end(JSON.stringify({result:'success'}));
});

yc.listen(8080, () => console.log('Started'));
